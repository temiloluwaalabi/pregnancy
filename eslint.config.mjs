import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { defineConfig } from 'eslint/config';
import expoConfig from 'eslint-config-expo'; // The mobile replacement for Next.js vitals
import prettier from 'eslint-config-prettier/flat';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';

export default defineConfig([
  {
    ignores: [
      '**/node_modules/**',
      '**/.expo/**',
      '**/dist/**',
      '**/build/**',
      '**/.next/**',
      'components/ui/**', // Keeps your Shadcn-like exclusion
    ],
  },

  // 1. Use Expo's specialized mobile config
  ...fixupConfigRules(expoConfig),
  prettier,

  {
    plugins: {
      'react-hooks': fixupPluginRules(reactHooks),
      import: fixupPluginRules(importPlugin),
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
      // 2. Mobile-specific quality rules
      ...reactHooks.configs.recommended.rules,
      'react-native/no-inline-styles': 'off', // We use NativeWind/Tailwind

      // 3. Your "Clean Code" Import Ordering
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'index',
            'object',
          ],
          'newlines-between': 'always',
          pathGroups: [
            {
              pattern: '@leomother/**', // Matches your new app brand
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
]);
