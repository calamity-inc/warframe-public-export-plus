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
types = types.replaceAll("readonly ", "");
types += "\n}";

console.log("Generating schemas...");
fs.writeFileSync("tmp-types.ts", types);
execSync("npx ts-to-zod tmp-types.ts tmp-schemas.js --skipValidation");

const schemas = fs
  .readFileSync("tmp-schemas.js", "utf8")
  .replaceAll("z.object", "z.strictObject")
  .replace("iAbilitySchema = z.strictObject({", "iAbilitySchema = z.object({")
  .replace("z.record(tMissionTypeSchema, iTilesetMissionSchema).partial()", "z.partialRecord(tMissionTypeSchema, iTilesetMissionSchema)");
fs.writeFileSync("tmp-schemas.mjs", schemas);

console.log("Validating schemas...");
const test = `import { z } from "zod";
import { iPublicExportPlusSchema } from "./tmp-schemas.mjs";
import publicExportPlus from "./index.js";
try {
  iPublicExportPlusSchema.parse(publicExportPlus);
  console.log("Schemas validated successfully.");
} catch (e) {
  console.error(e.message);
  process.exit(1);
}`;
fs.writeFileSync("tmp-test.mjs", test);

try {
  execSync("node tmp-test.mjs", {
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
  fs.unlinkSync("tmp-types.ts");
  fs.unlinkSync("tmp-schemas.mjs");
  fs.unlinkSync("tmp-schemas.js");
  fs.unlinkSync("tmp-test.mjs");
}
