module.exports = {
	tabWidth: 2,
	useTabs: true,
	singleQuote: true,
	trailingComma: 'all',
	semi: true,
	endOfLine: 'auto',
	importOrder: [
		// library names
		'^(?!\.+\/)[^.]+$',

		// relative paths without extensions
		'^[.\/]+[^.]+$',

		// any JS/TS/JSX/TSX extensions
		'\w.*\.([jt]sx?)$',

		// any other extension
		'\\.[a-z]+$',
	],
	importOrderSeparation: true,
	importOrderParserPlugins: ['jsx', 'typescript'],
	plugins: [
		'@trivago/prettier-plugin-sort-imports',
		'prettier-plugin-packagejson',
	],
};
