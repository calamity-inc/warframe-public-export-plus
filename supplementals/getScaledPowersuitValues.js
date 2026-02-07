const ExportWarframes = require("../ExportWarframes.json");

const joaat = (str) => {
	let hash = 0;
	for (let i = 0; i != str.length; ++i) {
		hash = (hash + str.charCodeAt(i)) >>> 0;
		hash = (hash + (hash << 10)) >>> 0;
		hash = (hash ^ (hash >>> 6)) >>> 0;
	}
	hash = (hash + (hash << 3)) >>> 0;
	hash = (hash ^ (hash >>> 11)) >>> 0;
	hash = (hash + (hash << 15)) >>> 0;
	return hash;
};

let utilInstance;
module.exports = async (uniqueName, rank) => {
	if (!utilInstance) {
		const bytes = await require("node:fs/promises").readFile(require("node:path").resolve(__dirname, "util.wasm"));
		utilInstance = (await WebAssembly.instantiate(bytes, {})).instance;
	}
	const [
		health_add,
		shield_add,
		power_add,
		armor_add,
		ability_strength,
		heal_rate,
	] = utilInstance.exports.get_powersuit_scaling_values(joaat(uniqueName), rank);
	const powersuit = ExportWarframes[uniqueName];
	return {
		health: powersuit.health + health_add,
		shield: powersuit.shield + shield_add,
		power: powersuit.power + power_add,
		armor: powersuit.armor + armor_add,
		ability_strength,
		heal_rate,
	};
};
