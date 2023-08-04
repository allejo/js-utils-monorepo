module.exports = {
	tabWidth: 2,
	useTabs: true,
	singleQuote: true,
	trailingComma: 'all',
	semi: true,
	endOfLine: 'auto',
	importOrder: [
		'^(?!\\.+\\/).*(?<!\\.(s?css))$',
		'^[./]+[^.]+$',
		'^\\w.*\\.[a-z]+$',
		'\\.[a-z]+$',
	],
	importOrderSeparation: true,
	importOrderParserPlugins: ['jsx', 'typescript'],
	plugins: [
		'@trivago/prettier-plugin-sort-imports',
		'prettier-plugin-packagejson',
	],
};
