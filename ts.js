const mergeOptions = require('merge-options')

const config = require('.')

module.exports = mergeOptions({}, config, {
	extends: [
		'airbnb',
		'xo',
		'xo-react',
		'prettier',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	plugins: ['prettier', '@typescript-eslint', 'prefer-arrow', 'unused-imports'],
	rules: {
		'no-useless-constructor': 'off',
		'import/extensions': 'off',
		'import/prefer-default-export': 'off',
		'prettier/prettier': [
			'error',
			{
				semi: false,
				trailingComma: 'all',
				singleQuote: true,
				parser: 'typescript',
				useTabs: true,
			},
		],
		'@typescript-eslint/no-parameter-properties': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		useJSXTextNode: true,
		project: './tsconfig.json',
		tsconfigRootDir: './',
	},
})
