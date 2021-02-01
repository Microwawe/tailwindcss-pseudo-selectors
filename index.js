const pseudo = require('./pseudo.json');

const pseudoPlugin = ({addVariant, e}) => {
	pseudo.elements.forEach(pseudoElement => {
		addVariant(pseudoElement, ({modifySelectors, separator}) => {
			modifySelectors(({className}) => {
				return `.${e(`${pseudoElement}${separator}${className}`)}::${pseudoElement}`;
			});
		});
	});

	pseudo.classes.forEach(pseudoClass => {
		addVariant(pseudoClass, ({modifySelectors, separator}) => {
			modifySelectors(({className}) => {
				return `.${e(`${pseudoClass}${separator}${className}`)}:${pseudoClass}`;
			});
		});
	});
};

module.exports = pseudoPlugin;
