import arrowReturnStyle from 'eslint-plugin-arrow-return-style';
import { type ExportableConfigAtom } from '../types/flat_config.js';
import { allFilesSupported } from './constants.js';

export const getArrowReturnStyleConfig = (): ExportableConfigAtom => {
  return {
    files: [allFilesSupported],
    plugins: { 'arrow-return-style': arrowReturnStyle },
    rules: {
      'arrow-return-style/arrow-return-style': 'off',
      'arrow-return-style/no-export-default-arrow': 'error',
    },
  };
};
