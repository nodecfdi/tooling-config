import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { type ExportableConfigAtom } from '../types/flat_config.js';
import { allFilesSupported } from './constants.js';

export const getSimpleImportSortConfig = (): ExportableConfigAtom => {
  return {
    files: [allFilesSupported],
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
