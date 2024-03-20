import vitest from 'eslint-plugin-vitest';
import { type ExportableConfigAtom } from '../types/flat_config.js';
import { allJsExtensions } from './constants.js';

const vitestHandPickedRules = {
  ...vitest.configs.recommended.rules,
  'vitest/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'test' }],
  'vitest/no-conditional-expect': 'error',
  'vitest/no-conditional-tests': 'error',
  'vitest/no-disabled-tests': 'error',
  'vitest/no-done-callback': 'error',
  'vitest/no-duplicate-hooks': 'error',
  'vitest/no-focused-tests': 'error',
  'vitest/no-standalone-expect': 'error',
  'vitest/no-test-prefixes': 'error',
  'vitest/no-test-return-statement': 'error',
  'vitest/prefer-comparison-matcher': 'error',
  'vitest/prefer-each': 'error',
  'vitest/prefer-equality-matcher': 'error',
  'vitest/prefer-expect-resolves': 'error',
  'vitest/prefer-hooks-in-order': 'error',
  'vitest/prefer-hooks-on-top': 'error',
  'vitest/prefer-lowercase-title': 'error',
  'vitest/prefer-mock-promise-shorthand': 'error',
  'vitest/prefer-spy-on': 'error',
  'vitest/prefer-strict-equal': 'error',
  'vitest/prefer-to-be': 'error',
  'vitest/prefer-to-be-falsy': 'error',
  'vitest/prefer-to-be-object': 'error',
  'vitest/prefer-to-be-truthy': 'error',
  'vitest/prefer-to-contain': 'error',
  'vitest/prefer-to-have-length': 'error',
  'vitest/prefer-todo': 'error',
  'vitest/require-hook': 'error',
  'vitest/require-to-throw-message': 'error',
  'vitest/require-top-level-describe': 'error',
};

export const getVitestConfig = (pathsOverrides?: string[]): ExportableConfigAtom => {
  return {
    files: pathsOverrides ?? [
      `**/*.{test,spec}.{${allJsExtensions}}`,
      `**/tests/**/*.{${allJsExtensions}}`,
      `**/__tests__/**/*.{${allJsExtensions}}`,
    ],
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
      },
    },
    plugins: {
      vitest,
    },
    rules: vitestHandPickedRules,
  };
};
