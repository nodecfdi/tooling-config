import * as regexpPlugin from 'eslint-plugin-regexp';
import { type ExportableConfigAtom } from '../types/index.ts';
import { supportedFileTypes } from './constants.ts';

export const getRegexpConfig = (): ExportableConfigAtom => {
  return {
    files: [supportedFileTypes],
    plugins: {
      regexp: regexpPlugin,
    },
    rules: regexpPlugin.configs['flat/recommended'].rules,
  };
};
