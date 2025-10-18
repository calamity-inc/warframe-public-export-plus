#!/usr/bin/env node
const fs = require("fs");
const { execSync } = require("child_process");

const indexTypes = fs.readFileSync("index.d.ts", "utf8");
let types = indexTypes + "\nexport interface IPublicExportPlus {";
for (const line of indexTypes.split(/\r?\n/)) {
  if (line.startsWith("export declare const")) {
    types += "\n" + line.slice(21);
  }
}
types += "\n}";

console.log("🕐 Generating schemas...");
fs.writeFileSync("tmp-types.ts", types);
execSync("npx ts-to-zod tmp-types.ts tmp-schemas.ts --skipValidation", {
  stdio: "inherit",
});

const schemas = fs
  .readFileSync("tmp-schemas.ts", "utf8")
  .replace(/z\.object/g, "z.strictObject")
  .replace("iAbilitySchema = z.strictObject({", "iAbilitySchema = z.object({");
fs.writeFileSync("tmp-schemas.ts", schemas);

console.log("🕐 Validating schemas...");
const test = `import { z } from "zod";
import { iPublicExportPlusSchema } from "./tmp-schemas";
import publicExportPlus from "./index";
try {
    iPublicExportPlusSchema.parse(publicExportPlus);
    console.log("✅ Schemas validated successfully.");
} catch (e) {
    console.error((e as Error).message);
    process.exit(1);
}`;
fs.writeFileSync("tmp-test.ts", test);

try {
  execSync("npx ts-node tmp-test.ts", {
    stdio: "inherit",
    env: {
      ...process.env,
      TS_NODE_COMPILER_OPTIONS: JSON.stringify({ module: "commonjs" }),
    },
  });
} catch (error) {
  if (typeof error?.status === "number") {
    process.exitCode = error.status;
  } else {
    process.exitCode = 1;
  }
} finally {
  fs.unlinkSync("tmp-schemas.ts");
  fs.unlinkSync("tmp-types.ts");
  fs.unlinkSync("tmp-test.ts");
}
