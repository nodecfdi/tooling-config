import { type TSESLint } from '@typescript-eslint/utils';

export type Rules = TSESLint.FlatConfig.Rules;

export type Plugins = Record<string, unknown> | null | undefined;

export type ExportableConfigAtom = Omit<
  TSESLint.FlatConfig.Config,
  'plugins' | 'languageOptions'
> & {
  plugins?: Plugins;
  languageOptions?: Record<string, unknown>;
};
