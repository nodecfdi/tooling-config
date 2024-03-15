import tsdocPlugin from 'eslint-plugin-tsdoc';
import { type ExportableConfigAtom } from '../types/index.ts';
import { supportedFileTypes } from './constants.ts';

export const getTsdocConfig = (): ExportableConfigAtom => {
  return {
    files: [supportedFileTypes],
    plugins: {
      tsdoc: tsdocPlugin,
    },
    rules: {
      'tsdoc/syntax': 'error',
    },
  };
};
