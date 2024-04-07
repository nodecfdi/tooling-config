import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { allFilesSupported } from '../constants.js';
import { defineConfig } from '../define_config.js';

export const simpleImportSortConfig = defineConfig({
  files: [allFilesSupported],
  plugins: { 'simple-import-sort': simpleImportSort },
  rules: {
    'simple-import-sort/imports': [
      'error',
      { groups: [['^\\u0000', '^node:', '^@?\\w', '^', '^\\.']] },
    ],
    'simple-import-sort/exports': 'error',
  },
});
