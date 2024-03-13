import arrowReturnStyle from 'eslint-plugin-arrow-return-style';
import { supportedFileTypes } from "./constants.ts";

export const getArrowReturnStyleConfig = () => {
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
