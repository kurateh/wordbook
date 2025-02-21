import path from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import kurateh from "@kurateh/eslint-plugin";
import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

/** @type {import("eslint").Linter.Config[]}  */
export default [
  {
    ignores: [
      ".expo/",
      "android/",
      "ios/",
      "app-example/",
      "node_modules/",
      "**/*.json",
      ".storybook/storybook.requires.ts",
      "expo-env.d.ts",
    ],
  },
  ...compat.extends(),
  ...kurateh.configs.react,
  {
    settings: {
      "import/ignore": ["react-native"],
    },
    rules: {
      "@kurateh/import-path": 1,

      "import/order": [
        1,
        {
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },

          "newlines-between": "always",
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
          ],

          pathGroups: [
            {
              pattern: "~*/**",
              group: "internal",
            },
            {
              pattern: "@*/**",
              group: "internal",
            },
          ],
        },
      ],

      "import/no-extraneous-dependencies": [
        1,
        {
          devDependencies: [
            ".storybook/**",
            "**/*.config.*",
            "scripts/**",
            "**/*.stories.ts*",
            "**/*.test.ts*",
            "**/__tests__/**/*.ts*",
          ],
        },
      ],

      "prettier/prettier": [
        1,
        {},
        {
          usePrettierrc: true,
        },
      ],

      "no-console": 1,
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "react-native",
              importNames: ["Text", "TextProps"],
              message: 'Use from "~/shared/ui" instead.',
            },
            {
              name: "react-native",
              importNames: ["StyleSheet"],
              message: 'Use from "react-native-unistyles" instead.',
            },
          ],
        },
      ],

      "@typescript-eslint/no-require-imports": [
        "error",
        { allow: ["^@/assets/"] },
      ],

      "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
      "no-fallthrough": 0,
    },
  },
  {
    files: ["src/app/**/*.ts*"],

    rules: {
      "react/function-component-definition": [
        2,
        {
          namedComponents: "function-declaration",
        },
      ],
    },
  },
  {
    files: ["**/*.test.ts*", "**/__tests__/**/*.ts*"],

    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
  {
    files: ["**/*.config.*"],

    rules: {
      "import/no-anonymous-default-export": 0,
    },
  },
];
