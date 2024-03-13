import pluginImport from 'eslint-plugin-import';
import { ExportableConfigAtom } from '../types/index.ts';
import { allJsExtensions, supportedFileTypes } from './constants.ts';

const importHandPickedRules = {};

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
          typescript: {
            alwaysTryTypes: true,
          },
          node: true,
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
