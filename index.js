const pseudo = require("./pseudo.json");

const pseudoPlugin = ({ addVariant, e }) => {
	//   const customPseudoElements = config
	//     ? config('customPseudoElements') || []
	//     : []
	//   const customPseudoClasses = config ? config('customPseudoClasses') || [] : []

	//   if (!Array.isArray(customPseudoElements)) {
	//     throw new Error('`customElements` must be an array of string.')
	//   }

	//   if (!Array.isArray(customPseudoClasses)) {
	//     throw new Error('`customClasses` must be an array of string.')
	//   }

	//   const mergedPseudoElements = Array.from(
	//     new Set(pseudoElements.concat(customPseudoElements))
	//   )
	//   const mergedPseudoClasses = Array.from(
	//     new Set(pseudoClasses.concat(customPseudoClasses))
	//   )

	pseudo.elements.forEach((pseudoElement) => {
		addVariant(pseudoElement, ({ modifySelectors, separator }) => {
			modifySelectors(({ className }) => {
				return `.${e(`${pseudoElement}${separator}${className}`)}::${pseudoElement}`;
			});
		});
	});

	pseudo.classes.forEach((pseudoClass) => {
		addVariant(pseudoClass, ({ modifySelectors, separator }) => {
			modifySelectors(({ className }) => {
				return `.${e(`${pseudoClass}${separator}${className}`)}:${pseudoClass}`;
			});
		});
	});

};

module.exports = pseudoPlugin;