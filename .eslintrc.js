module.exports = {
  root: true,

  env: {
    node: true
  },

  parserOptions: {
    parser: "babel-eslint"
  },

  extends: ["plugin:vue/essential", "standard", "@vue/prettier"],

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off", // 非开发环境下禁止使用console
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off", // 非开发环境下禁止使用debugger
    "no-alert": process.env.NODE_ENV === "production" ? "error" : "off", // 非开发环境下禁止使用alert
    "block-spacing": ["error", "always"],
    "comma-spacing": ["error", { before: false, after: true }],
    curly: ["error", "multi-line"],
    "dot-location": ["error", "property"],
    "eol-last": "error",
    "key-spacing": ["error", { beforeColon: false, afterColon: true }],
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
    "no-trailing-spaces": "error",
    "no-whitespace-before-property": "error",
    "object-property-newline": [
      "error",
      { allowMultiplePropertiesPerLine: true }
    ],
    "operator-linebreak": [
      "error",
      "after",
      { overrides: { "?": "before", ":": "before" } }
    ],
    semi: ["error", "always"]
  }
};
