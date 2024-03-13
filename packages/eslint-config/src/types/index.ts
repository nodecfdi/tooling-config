export interface NodecfdiSettings {
  /**
   * Vitest support.
   */
  vitest?: boolean;
  /**
   * This parameter allows you to override the paths for some Nodecfdi settings.
   */
  pathsOveriddes?: {
    /**
     * With this setting, if you have multiple tsconfig.json files in your project (like tsconfig.json, tsconfig.eslint.json, tsconfig.node.json, etc...) you can specify which config Sheriff will pickup. You can also specify a list of paths, see: https://typescript-eslint.io/linting/typed-linting/monorepos/#one-tsconfigjson-per-package-and-an-optional-one-in-the-root.
     */
    tsconfigLocation?: string | string[];
    /**
     * This setting overrides the default Nodecfdi filepaths for test files. It accepts an array of filepaths, dictaced by minimatch syntax. Nodecfdi will apply Vitest rules only on these files.
     */
    tests?: string[];
  };
  /**
   * This setting apply some ignore patterns to the whole config.
   */
  ignores?: {
    /**
     * Some commonly ignored folders.
     */
    recommended?: boolean;
    /**
     * With this setting, Nodecfdi will ignore all the files that are currently ignored by git. Chances are that if you are ignoring a file in git, you don't want to lint it, which usually is the case with temporary and autogenerated files.
     */
    inheritedFromGitignore?: boolean;
  };
  /**
   * This setting accepts an array of filepaths, dictaced by minimatch syntax. Only the matching files found in this array will be linted. All other files will be ignored. This is useful if you want to lint only a subset of your project.
   */
  files?: string[];
}

export type Plugins =
  | {
      [key: string]:
        | {
            files?: string[];
            rules?: unknown;
            configs?: unknown;
          }
        | undefined;
    }
  | null
  | undefined;

export interface ExportableConfigAtom {
  rules?: Record<string, unknown>;
  plugins?: Plugins;
  files?: string[];
  languageOptions?: Record<string, unknown>;
  settings?: Record<string, unknown>;
  ignores?: string[];
  linterOptions?: { noInlineConfig?: boolean; reportUnusedDisableDirectives?: 'error' | 'warn' | 'off' };
}
