const globals = require("globals");
const pluginReact = require("eslint-plugin-react");
const pluginNext = require("eslint-plugin-next");
const babelParser = require("@babel/eslint-parser");

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parser: babelParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
        requireConfigFile: false,
      },
    },
    plugins: {
      react: pluginReact,
      next: pluginNext,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Disable 'React must be in scope' rule
      "react/prop-types": "off", // Disable Prop-Types validation
      "react/no-unescaped-entities": "off", // Allow unescaped characters
    },
  },
  pluginReact.configs.flat.recommended,
  pluginNext.configs.coreWebVitals,
];
