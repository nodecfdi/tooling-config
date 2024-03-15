import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { type ExportableConfigAtom } from '../types/index.ts';
import { supportedFileTypes } from './constants.ts';

export const getSimpleImportSortConfig = (): ExportableConfigAtom => {
  return {
    files: [supportedFileTypes],
    plugins: { 'simple-import-sort': simpleImportSort },
    rules: {
      'simple-import-sort/imports': [
        'error',
        { groups: [['^\\u0000', '^node:', '^@?\\w', '^', '^\\.']] },
      ],
      'simple-import-sort/exports': 'error',
    },
  };
};
