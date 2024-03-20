import preferEarlyReturn from '@regru/eslint-plugin-prefer-early-return';
import { type ExportableConfigAtom } from '../types/flat_config.js';
import { supportedFileTypes } from './constants.js';

export const getEarlyReturnConfig = (): ExportableConfigAtom => {
  return {
    files: [supportedFileTypes],
    plugins: { '@regru/prefer-early-return': preferEarlyReturn },
    rules: {
      '@regru/prefer-early-return/prefer-early-return': [
        'error',
        {
          maximumStatements: 1,
        },
      ],
    },
  };
};
