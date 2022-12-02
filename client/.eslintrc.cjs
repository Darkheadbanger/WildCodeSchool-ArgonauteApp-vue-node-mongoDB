/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
    "plugin:node/recommended",
    "@vue/prettier",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  rules: {
    // "prettier/prettier": ["error", { endOfLine: "off" }],
    "prettier/prettier": ["error"],
    'vue/multi-word-component-names': 'off',
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["prettier"],
  env: {
    node: true,
  },
};
