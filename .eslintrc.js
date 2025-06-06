/** @type {import('eslint').ESLint.ConfigData} */
module.exports ={
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"],
      },
    },
  },

  plugins: ["@typescript-eslint"],
  extends: [
    "next/core-web-vitals",
    "next/typescript",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "prettier",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:sonarjs/recommended",
    "plugin:security/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: [
    "lint-staged.config.js",
    "**/node_modules",
    ".eslintrc.js",
    "prettier.config.js",
    "next.config.js",
    "tailwind.config.js",
    "tsconfig.json",
    "postcss.config.js",
    "lint-staged.config.js",
    "build/",
    "bin/",
    "obj/",
    "out/",
    ".next/s",
  ],
  rules: {
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
    "no-use-before-define": ["error", { variables: false }],
    "sonarjs/prefer-single-boolean-return": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "react/react-in-jsx-scope": "off",
    "react/function-component-definition": "off",
    "react/require-default-props": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "no-nested-ternary": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "playwright/**",
          "scripts/**",
          "**/*.test.ts",
          "**/*.test.tsx",
        ],
        packageDir: ["./", "../../../"],
      },
    ],
    "security/detect-object-injection": "off",
  },
}
