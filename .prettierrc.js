module.exports = {
	useTabs: true,
	tabWidth: 4,
	semi: true,
	singleQuote: true,
	quoteProps: 'preserve',
	printWidth: 100,
	bracketSpacing: false,
	arrowParens: 'avoid',
	overrides: [
		{
			'files': ['*.yml', '*.md'],
			'options': {
				'tabWidth': 2,
				'useTabs': false,
			},
		},
	],
};
