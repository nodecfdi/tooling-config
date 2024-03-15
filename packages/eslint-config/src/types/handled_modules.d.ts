declare module '@regru/eslint-plugin-prefer-early-return';
declare module 'eslint-plugin-canonical';
declare module 'eslint-plugin-unicorn';
declare module 'eslint-plugin-import';
declare module 'eslint-plugin-simple-import-sort';
declare module 'eslint-plugin-regexp' {
  import type { TSESLint } from '@typescript-eslint/utils';

  declare const configs: {
    'flat/recommended': TSESLint.FlatConfig.Config;
  };
}

declare module 'eslint-plugin-sonarjs' {
  import type { TSESLint } from '@typescript-eslint/utils';

  declare const configs: {
    recommended: TSESLint.FlatConfig.Config & {
      plugins: string[];
    };
  };
}
