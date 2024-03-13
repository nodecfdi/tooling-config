import unicorn from 'eslint-plugin-unicorn';
import { supportedFileTypes } from './constants.ts';

const unicornHandPickedRules = {
  'unicorn/better-regex': 'error',
  'unicorn/explicit-length-check': 'error',
  'unicorn/consistent-function-scoping': 'error',
  'unicorn/prefer-default-parameters': 'error',
  'unicorn/no-array-push-push': 'error',
  'unicorn/prefer-array-index-of': 'error',
  'unicorn/prefer-array-flat-map': 'error',
  'unicorn/prefer-array-some': 'error',
  'unicorn/prefer-array-find': 'error',
  'unicorn/prefer-array-flat': 'error',
  'unicorn/prefer-includes': 'error',
  'unicorn/prefer-top-level-await': 'error',
  'unicorn/prefer-spread': 'error',
  'unicorn/no-useless-spread': 'error',
  'unicorn/no-useless-fallback-in-spread': 'error',
  'unicorn/no-for-loop': 'error',
  'unicorn/prefer-set-size': 'error',
  'unicorn/prefer-type-error': 'error',
  'unicorn/prefer-object-from-entries': 'error',
  'unicorn/no-instanceof-array': 'error',
  'unicorn/prefer-native-coercion-functions': 'error',
  'unicorn/prefer-logical-operator-over-ternary': 'error',
  'unicorn/prefer-event-target': 'error',
  'unicorn/no-await-expression-member': 'error',
  'unicorn/no-new-array': 'error',
  'unicorn/throw-new-error': 'error',
  'unicorn/no-array-reduce': 'error',
  'unicorn/no-useless-length-check': 'error',
  'unicorn/prefer-prototype-methods': 'error',
  'unicorn/prefer-date-now': 'error',
  'unicorn/prefer-export-from': ['error', { ignoreUsedVariables: true }],
  'unicorn/no-new-buffer': 'error',
  'unicorn/prefer-query-selector': 'error',
  'unicorn/prefer-string-replace-all': 'error',
  'unicorn/prefer-switch': ['error', { emptyDefaultCase: 'do-nothing-comment' }],
  'unicorn/switch-case-braces': 'error',
  'unicorn/catch-error-name': 'error',
  'unicorn/consistent-destructuring': 'error',
  'unicorn/prefer-string-slice': 'error',
};

export const getUnicornConfig = () => {
  return {
    files: [supportedFileTypes],
    plugins: { unicorn },
    rules: unicornHandPickedRules,
  };
};
