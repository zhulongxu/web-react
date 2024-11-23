module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
		"plugin:prettier/recommended"
	],
	ignorePatterns: ["dist", "node_modules", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "react-refresh"],
	rules: {
		"@typescript-eslint/no-explicit-any": ["off"],
		"react-refresh/only-export-components": ["warn", { allowConstantExport: true }]
	}
}
