import tsdoc from 'eslint-plugin-tsdoc';
import { supportedFileTypes } from './constants.ts';

export const getTsdocConfig = () => {
  return {
    files: [supportedFileTypes],
    plugins: {
      tsdoc,
    },
    rules: {
      'tsdoc/syntax': 'error',
    },
  };
};
