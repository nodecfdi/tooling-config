import adonisJsPlugin from '@adonisjs/eslint-plugin';
import { type ExportableConfigAtom } from '../types/flat_config.js';
import { supportedFileTypes } from './constants.js';

export const getAdonisJsConfig = (): ExportableConfigAtom[] => {
  return [
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
      },
    },
    {
      files: ['**/config/*.ts'],
      rules: {
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-shadow': 'off',
      },
    },
    {
      files: ['**/bin/*.ts'],
      rules: {
        '@typescript-eslint/no-misused-promises': 'off',
        'unicorn/prefer-top-level-await': 'off',
      },
    },
  ];
};
