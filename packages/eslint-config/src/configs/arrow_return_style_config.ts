import arrowReturnStyle from 'eslint-plugin-arrow-return-style';
import { supportedFileTypes } from './constants.ts';
import { type ExportableConfigAtom } from '../types/index.ts';

export const getArrowReturnStyleConfig = (): ExportableConfigAtom => {
  return {
    files: [supportedFileTypes],
    plugins: { 'arrow-return-style': arrowReturnStyle },
    rules: {
      'arrow-return-style/arrow-return-style': [
        'error',
        { namedExportsAlwaysUseExplicitReturn: false },
      ],
      'arrow-return-style/no-export-default-arrow': 'error',
    },
  };
};
