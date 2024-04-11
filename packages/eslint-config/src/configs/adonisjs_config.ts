import adonisJsPlugin from '@adonisjs/eslint-plugin';
import { supportedFileTypes } from '../constants.js';
import { defineConfig } from '../define_config.js';

export const adonisjsConfig = defineConfig([
  {
    files: [supportedFileTypes],
    plugins: {
      '@adonisjs': adonisJsPlugin,
    },
    rules: {
      '@adonisjs/prefer-lazy-controller-import': 'error',
      '@adonisjs/prefer-lazy-listener-import': 'error',
    },
  },
  {
    files: [
      '**/database/migrations/*.ts',
      '**/database/factories/*.ts',
      '**/bin/*.ts',
      '**/commands/*.ts',
      '**/app/middleware/*.ts',
    ],
    rules: {
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      'unicorn/no-anonymous-default-export': 'off',
    },
  },
  {
    files: ['**/types.ts', '**/types/**/*.ts', '**/config/*.ts', '**/src/extensions/**/*.ts'],
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-shadow': 'off',
      '@typescript-eslint/method-signature-style': 'off',
    },
  },
  {
    files: ['**/bin/*.ts'],
    rules: {
      '@typescript-eslint/no-misused-promises': 'off',
      'unicorn/prefer-top-level-await': 'off',
    },
  },
  {
    files: ['**/mixins/**/*.ts'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'unicorn/no-anonymous-default-export': 'off',
    },
  },
  {
    files: ['**/services/**/*.ts'],
    rules: {
      'import-x/no-mutable-exports': 'off',
    },
  },
  {
    files: ['**/define_config.ts'],
    rules: {
      '@typescript-eslint/require-await': 'off',
    },
  },
  {
    files: ['**/tests/**/*.ts'],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
]);
