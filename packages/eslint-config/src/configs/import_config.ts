import pluginImport from 'eslint-plugin-import';
import { type ExportableConfigAtom } from '../types/index.ts';
import { allJsExtensions, supportedFileTypes } from './constants.ts';

const importHandPickedRules = {
  'import/named': 'off',
  'import/namespace': 'off',
  'import/default': 'off',
  'import/no-named-as-default-member': 'off',
  'import/no-unresolved': ['error', { commonjs: true, caseSensitiveStrict: true }],
  'import/first': 'error',
  'import/order': 'off',
  'import/no-default-export': 'error',
  'import/no-named-as-default': 'error',
  'import/no-duplicates': ['error', { 'prefer-inline': true }],
  'import/newline-after-import': ['error', { considerComments: true }],
  'import/no-useless-path-segments': 'error',
};

export const getImportConfig = (): ExportableConfigAtom[] => {
  return [
    {
      files: [supportedFileTypes],
      plugins: { import: pluginImport },
      rules: importHandPickedRules,
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          node: true,
          typescript: {
            alwaysTryTypes: true,
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
      files: [supportedFileTypes],
      linterOptions: {
        reportUnusedDisableDirectives: 'error',
      },
    },
  ];
};
