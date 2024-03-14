import tsdocPlugin from 'eslint-plugin-tsdoc';
import { supportedFileTypes } from './constants.ts';
import { type ExportableConfigAtom } from '../types/index.ts';

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
