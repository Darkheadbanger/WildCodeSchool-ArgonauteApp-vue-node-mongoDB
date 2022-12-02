/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "plugin:prettier/recommended",
    "plugin:node/recommended",
    "@vue/prettier",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  rules: {
    // "prettier/prettier": ["error", { endOfLine: "off" }],
    "prettier/prettier": ["error"],
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
