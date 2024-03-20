import * as regexpPlugin from 'eslint-plugin-regexp';
import { type ExportableConfigAtom } from '../types/flat_config.js';
import { supportedFileTypes } from './constants.js';

export const getRegexpConfig = (): ExportableConfigAtom => {
  return {
    files: [supportedFileTypes],
    plugins: {
      regexp: regexpPlugin,
    },
    rules: regexpPlugin.configs['flat/recommended'].rules,
  };
};
