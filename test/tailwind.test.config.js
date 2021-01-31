const pseudoPlugin = require("..");
const colors = require("tailwindcss/colors");

module.exports = {
	theme: {
		colors: {
			green: colors.green,
			red: colors.red,
		},
	},
	variants: {
		ringColor: ["valid", "invalid"],
		ringOffsetColor: ["valid", "invalid"],
		ringOffsetWidth: ["valid", "invalid"],
		ringWidth: ["valid", "invalid"],
	},
	plugins: [pseudoPlugin],
};
