import { defineConfig, globalIgnores } from 'eslint/config';
import expoConfig from 'eslint-config-expo/flat.js';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

export default defineConfig([
  // 1. Global Ignores
  globalIgnores([
    '**/node_modules/**',
    '**/.expo/**',
    '**/dist/**',
    '**/build/**',
    '**/.next/**',
    '**/components/ui/**',
  ]),

  // 2. Expo's Official Flat Config (This brings in import and react-hooks plugins)
  expoConfig,

  // 3. Prettier Integration
  prettierRecommended,

  // 4. Custom Rules & Settings
  {
    // REMOVED: plugins: { 'import': ... } <- This was the conflict!
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: ['./tsconfig.json', './apps/*/tsconfig.json'],
        },
      },
    },
    rules: {
      // We can still use the rules because the plugins were loaded by expoConfig
      'react-native/no-inline-styles': 'off',

      // Your Import Sorting Logic
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'index',
          ],
          'newlines-between': 'always',
          pathGroups: [
            {
              pattern: '@brainbox/**',
              group: 'internal',
              position: 'after',
            },
          ],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },

  // 5. Config file specific overrides
  {
    files: ['*.config.js', '*.config.mjs'],
    languageOptions: {
      globals: globals.node,
    },
  },
]);
