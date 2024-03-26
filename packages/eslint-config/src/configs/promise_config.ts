import promisePlugin from 'eslint-plugin-promise';
import { type ExportableConfigAtom, type Rules } from '../types/flat_config.js';
import { allFilesSupported } from './constants.js';

const promiseHandPickedRules: Rules = {
  'promise/param-names': 'error',
  'promise/prefer-await-to-callbacks': 'off',
  'promise/prefer-await-to-then': 'error',
  'promise/valid-params': 'error',
};

export const getPromiseConfig = (): ExportableConfigAtom => {
  return {
    files: [allFilesSupported],
    plugins: {
      promise: promisePlugin,
    },
    rules: promiseHandPickedRules,
  };
};
