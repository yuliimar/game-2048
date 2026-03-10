module.exports = {
  extends: "@mate-academy/eslint-config",
  overrides: [
    {
      files: ["src/scripts/main.js"],
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
      },
    },
  ],
};
