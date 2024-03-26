import pluginImport from 'eslint-plugin-import';
import { type ExportableConfigAtom, type Rules } from '../types/flat_config.js';
import { allFilesSupported, allJsExtensions, typescriptExtensions } from './constants.js';

const importHandPickedRules: Rules = {
  'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
  'import/default': 'error',
  'import/dynamic-import-chunkname': 'off',
  'import/export': 'error',
  'import/exports-last': 'off',
  'import/extensions': [
    'error',
    'never',
    {
      ignorePackages: true,
      pattern: {
        graphql: 'always',
        json: 'always',
        svg: 'always',
      },
    },
  ],
  'import/first': 'error',
  'import/group-exports': 'off',
  'import/max-dependencies': 'off',
  'import/named': 'off',
  'import/namespace': 'off',
  'import/newline-after-import': 'error',
  'import/no-absolute-path': 'error',
  'import/no-amd': 'error',
  'import/no-anonymous-default-export': 'off',
  'import/no-commonjs': 'off',
  'import/no-cycle': 'error',
  'import/no-default-export': 'off',
  'import/no-deprecated': 'warn',
  'import/no-duplicates': ['error', { 'prefer-inline': true }],
  'import/no-extraneous-dependencies': [
    'error',
    { devDependencies: true, optionalDependencies: true, peerDependencies: true },
  ],
  'import/no-import-module-exports': 'off',
  'import/no-internal-modules': 'off',
  'import/no-mutable-exports': 'error',
  'import/no-named-as-default': 'error',
  'import/no-named-as-default-member': 'error',
  'import/no-named-default': 'error',
  'import/no-named-export': 'off',
  'import/no-namespace': 'off',
  'import/no-nodejs-modules': 'off',
  'import/no-relative-packages': 'off',
  'import/no-relative-parent-imports': 'off',
  'import/no-restricted-paths': 'off',
  'import/no-self-import': 'error',
  'import/no-unassigned-import': ['error', { allow: ['**/*.{css,sass,scss}', 'reflect-metadata'] }],
  'import/no-unresolved': 'off',
  'import/no-unused-modules': 'off',
  'import/no-useless-path-segments': [
    'error',
    {
      noUselessIndex: true,
    },
  ],
  'import/no-webpack-loader-syntax': 'error',
  'import/order': 'off',
  'import/prefer-default-export': 'off',
  'import/unambiguous': 'off',
  'import/no-dynamic-require': 'off',
};

export const getImportConfig = (): ExportableConfigAtom[] => {
  return [
    {
      files: [allFilesSupported],
      plugins: { import: pluginImport },
      rules: importHandPickedRules,
      settings: {
        'import/extensions': [...typescriptExtensions, '.vue'],
        'import/external-module-folders': ['node_modules', 'node_modules/@types'],
        'import/parsers': {
          'espree': ['.js', '.cjs', '.mjs', '.jxs'],
          '@typescript-eslint/parser': ['.ts', '.tsx'],
          'vue-eslint-parser': ['.vue'],
        },
        'import/resolver': {
          node: true,
          typescript: {
            alwaysTryTypes: true,
            extensions: typescriptExtensions,
          },
        },
      },
    },
    {
      files: [`**/*.config.{${allJsExtensions}}`],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: [allFilesSupported],
      linterOptions: {
        reportUnusedDisableDirectives: 'error',
      },
    },
  ];
};
