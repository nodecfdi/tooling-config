import unicorn from 'eslint-plugin-unicorn';
import { type ExportableConfigAtom, type Rules } from '../types/flat_config.js';
import { allFilesSupported } from './constants.js';

const unicornHandPickedRules: Rules = {
  'unicorn/consistent-destructuring': 'error',
  'unicorn/consistent-function-scoping': ['error', { checkArrowFunctions: false }],
  'unicorn/filename-case': [
    'error',
    {
      case: 'snakeCase',
    },
  ],
  'unicorn/no-null': 'off',
  // Enable usage for helpers classes
  'unicorn/no-static-only-class': 'off',
  // Dificult read a number
  'unicorn/numeric-separators-style': 'off',
  // Disable dom-node-because-usage with nodejs not its completed
  'unicorn/prefer-dom-node-append': 'off',
  'unicorn/prefer-dom-node-dataset': 'off',
  'unicorn/prefer-dom-node-remove': 'off',
  'unicorn/prefer-dom-node-text-content': 'off',
  'unicorn/prefer-modern-dom-apis': 'off',
  'unicorn/prefer-export-from': ['error', { ignoreUsedVariables: true }],
  // Disable because ssr not completed query selector
  'unicorn/prefer-query-selector': 'off',
  'unicorn/prefer-switch': ['error', { emptyDefaultCase: 'do-nothing-comment' }],
  // Disable prevent-abbrevations, its necessary in frameworks
  'unicorn/prevent-abbreviations': 'off',
};

export const getUnicornConfig = (): ExportableConfigAtom => {
  return {
    files: [allFilesSupported],
    plugins: { unicorn },
    rules: {
      ...unicorn.configs['flat/recommended'].rules,
      ...unicornHandPickedRules,
    },
  };
};
