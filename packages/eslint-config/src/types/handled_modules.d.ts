declare module '@regru/eslint-plugin-prefer-early-return';
declare module 'eslint-plugin-unicorn';
declare module 'eslint-plugin-import';

declare module 'eslint-plugin-sonarjs' {
  import type { TSESLint } from '@typescript-eslint/utils';

  declare const configs: {
    recommended: TSESLint.FlatConfig.Config & {
      plugins: string[];
    };
  };
}
