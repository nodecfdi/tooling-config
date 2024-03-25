declare module '@adonisjs/eslint-plugin';
declare module '@eslint-community/eslint-plugin-eslint-comments';
declare module '@regru/eslint-plugin-prefer-early-return';
declare module 'eslint-plugin-canonical';
declare module 'eslint-plugin-promise';
declare module 'eslint-plugin-unicorn';
declare module 'eslint-plugin-import';
declare module 'eslint-plugin-simple-import-sort';
declare module 'eslint-plugin-security';

declare module 'eslint-plugin-regexp' {
  import { type TSESLint } from '@typescript-eslint/utils';

  declare const configs: {
    'flat/recommended': TSESLint.FlatConfig.Config;
  };
}

declare module 'eslint-plugin-sonarjs' {
  import { type TSESLint } from '@typescript-eslint/utils';

  declare const configs: {
    recommended: TSESLint.FlatConfig.Config & {
      plugins: string[];
    };
  };
}

declare module 'eslint-plugin-vue' {
  import { type TSESLint } from '@typescript-eslint/utils';

  declare const configs: {
    'flat/recommended': TSESLint.FlatConfig.Config[];
  };
}
