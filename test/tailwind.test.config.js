const pseudoPlugin = require('..');
const colors = require('tailwindcss/colors');

module.exports = {
	theme: {
		colors: {
			green: colors.green,
			red: colors.red,
		},
	},
	variants: {
		textColor: ['valid', 'invalid', 'before', 'after'],
	},
	plugins: [pseudoPlugin],
};
