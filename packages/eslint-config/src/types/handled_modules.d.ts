type FlatRecommendedConfigs<T> = {
  'flat/recommended': T;
};

declare module '@adonisjs/eslint-plugin';
declare module '@eslint-community/eslint-plugin-eslint-comments';
declare module '@regru/eslint-plugin-prefer-early-return';
declare module 'eslint-plugin-canonical';
declare module 'eslint-plugin-promise';
declare module 'eslint-plugin-vuejs-accessibility';
declare module 'eslint-plugin-import';
declare module 'eslint-plugin-simple-import-sort';
declare module 'eslint-plugin-security';

declare module 'eslint-plugin-regexp' {
  import { type TSESLint } from '@typescript-eslint/utils';

  declare const configs: FlatRecommendedConfigs<TSESLint.FlatConfig.Config>;
}

declare module 'eslint-plugin-unicorn' {
  import { type TSESLint } from '@typescript-eslint/utils';

  declare const configs: FlatRecommendedConfigs<TSESLint.FlatConfig.Config>;
}

declare module 'eslint-plugin-sonarjs' {
  import { type TSESLint } from '@typescript-eslint/utils';

  declare const configs: {
    recommended: TSESLint.FlatConfig.Config;
  };
}

declare module 'eslint-plugin-vue' {
  import { type TSESLint } from '@typescript-eslint/utils';

  declare const configs: FlatRecommendedConfigs<TSESLint.FlatConfig.Config[]>;
}
