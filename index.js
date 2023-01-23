module.exports = {
	extends: ['airbnb', 'xo', 'xo-react', 'prettier', 'plugin:react/recommended'],
	plugins: ['prettier', 'prefer-arrow', 'unused-imports'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				semi: false,
				trailingComma: 'all',
				singleQuote: true,
				useTabs: true,
			},
		],
		'react/jsx-uses-vars': 'error',
		'no-console': 'off',
		'jsx-a11y/anchor-is-valid': 'off',
		'jsx-a11y/label-has-for': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'no-constant-condition': 'off',
		'no-await-in-loop': 'off',
		'global-require': 'off',
		'no-useless-constructor': 'error',
		'no-underscore-dangle': 'off',
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'test/**',
					'tests/**',
					'spec/**',
					'**/__tests__/**',
					'**/__mocks__/**',
					'test.{js,jsx}',
					'test-*.{js,jsx}',
					'**/*{.,_}{test,spec}.{js,jsx}',
					'**/*.config.js',
					'**/*.config.*.js',
					'**/wallaby.js',
					'**/gulpfile.js',
					'**/gulpfile.*.js',
					'**/Gruntfile{,.js}',
					'**/protractor.conf.js',
					'**/protractor.conf.*.js',
				],
				optionalDependencies: false,
			},
		],
		'no-empty-function': [
			'error',
			{
				allow: ['constructors', 'arrowFunctions'],
			},
		],
		'no-restricted-syntax': [
			'error',
			{
				selector: 'ForInStatement',
				message:
					'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
			},
			{
				selector: 'LabeledStatement',
				message:
					'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
			},
			{
				selector: 'WithStatement',
				message:
					'`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
			},
		],
		'react/jsx-one-expression-per-line': 'off',
		'react/destructuring-assignment': 'off',
		'no-inner-declarations': 'off',
		'no-cond-assign': ['error', 'except-parens'],
		curly: ['error', 'all'],
		'react/jsx-indent': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-noninteractive-element-interactions': 'off',
		'no-param-reassign': 'off',
		'import/no-cycle': 'off',
		'react/self-closing-comp': 'error',
		'jsx-a11y/media-has-caption': 'off',
		'react/display-name': 'off',
		'arrow-body-style': ['error', 'as-needed'],
		'prefer-arrow/prefer-arrow-functions': 'off',
		'react/jsx-props-no-spreading': ['off'],
		'react/jsx-filename-extension': [
			'error',
			{ allow: 'as-needed', extensions: ['.jsx', '.tsx'] },
		],
		'import/extensions': ['off'],
		'no-unused-vars': 'off',
		'unused-imports/no-unused-imports': 'warn',
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
		'react/no-unknown-property': 'off',
	},
	env: {
		node: true,
		browser: true,
		jest: true,
	},
	parserOptions: {
		ecmaVersion: 'latest',
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
	},
}
