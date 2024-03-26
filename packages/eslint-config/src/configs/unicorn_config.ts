import unicorn from 'eslint-plugin-unicorn';
import { type ExportableConfigAtom, type Rules } from '../types/flat_config.js';
import { allFilesSupported } from './constants.js';

const unicornHandPickedRules: Rules = {
  'unicorn/better-regex': 'error',
  'unicorn/catch-error-name': 'error',
  'unicorn/consistent-destructuring': 'error',
  'unicorn/consistent-function-scoping': ['error', { checkArrowFunctions: false }],
  'unicorn/explicit-length-check': 'error',
  'unicorn/filename-case': [
    'error',
    {
      case: 'snakeCase',
    },
  ],
  'unicorn/no-array-push-push': 'error',
  'unicorn/no-array-reduce': 'error',
  'unicorn/no-await-expression-member': 'error',
  'unicorn/no-for-loop': 'error',
  'unicorn/no-instanceof-array': 'error',
  'unicorn/no-new-array': 'error',
  'unicorn/no-new-buffer': 'error',
  'unicorn/no-useless-fallback-in-spread': 'error',
  'unicorn/no-useless-length-check': 'error',
  'unicorn/no-useless-spread': 'error',
  'unicorn/prefer-array-find': 'error',
  'unicorn/prefer-array-flat': 'error',
  'unicorn/prefer-array-flat-map': 'error',
  'unicorn/prefer-array-index-of': 'error',
  'unicorn/prefer-array-some': 'error',
  'unicorn/prefer-date-now': 'error',
  'unicorn/prefer-default-parameters': 'error',
  'unicorn/prefer-event-target': 'error',
  'unicorn/prefer-export-from': ['error', { ignoreUsedVariables: true }],
  'unicorn/prefer-includes': 'error',
  'unicorn/prefer-logical-operator-over-ternary': 'error',
  'unicorn/prefer-native-coercion-functions': 'error',
  'unicorn/prefer-object-from-entries': 'error',
  'unicorn/prefer-prototype-methods': 'error',
  'unicorn/prefer-query-selector': 'error',
  'unicorn/prefer-set-size': 'error',
  'unicorn/prefer-spread': 'error',
  'unicorn/prefer-string-replace-all': 'error',
  'unicorn/prefer-string-slice': 'error',
  'unicorn/prefer-switch': ['error', { emptyDefaultCase: 'do-nothing-comment' }],
  'unicorn/prefer-top-level-await': 'error',
  'unicorn/prefer-type-error': 'error',
  'unicorn/switch-case-braces': 'error',
  'unicorn/throw-new-error': 'error',
};

export const getUnicornConfig = (): ExportableConfigAtom => {
  return {
    files: [allFilesSupported],
    plugins: { unicorn },
    rules: unicornHandPickedRules,
  };
};
