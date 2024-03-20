export type Plugins =
  | Record<
      string,
      | {
          files?: string[];
          rules?: unknown;
          configs?: unknown;
        }
      | undefined
    >
  | null
  | undefined;

export type ExportableConfigAtom = {
  rules?: Record<string, unknown>;
  plugins?: Plugins;
  files?: string[];
  languageOptions?: Record<string, unknown>;
  settings?: Record<string, unknown>;
  ignores?: string[];
  linterOptions?: {
    noInlineConfig?: boolean;
    reportUnusedDisableDirectives?: 'error' | 'warn' | 'off';
  };
};
