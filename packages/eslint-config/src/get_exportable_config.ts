import getGitignorePatterns from 'eslint-config-flat-gitignore';
import { type FlatESLintConfig } from 'eslint-define-config';
import { parser as tsParser } from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';
import { adonisjsConfig } from './configs/adonisjs_config.js';
import { arrowReturnStyleConfig } from './configs/arrow_return_style_config.js';
import { canonicalConfig } from './configs/canonical_config.js';
import { commentsConfig } from './configs/comments_config.js';
import { earlyReturnConfig } from './configs/early_return_config.js';
import { eslintBaseConfig } from './configs/eslint_base_config.js';
import { importConfig } from './configs/import_config.js';
import { prettierConfig } from './configs/prettier_config.js';
import { promiseConfig } from './configs/promise_config.js';
import { regexpConfig } from './configs/regexp_config.js';
import { securityConfig } from './configs/security_config.js';
import { simpleImportSortConfig } from './configs/simple_import_sort_config.js';
import { sonarjsConfig } from './configs/sonarjs_config.js';
import { stylisticConfig } from './configs/stylistic_config.js';
import { tsdocConfig } from './configs/tsdoc_config.js';
import { typescriptConfig } from './configs/typescript_config.js';
import { unicornConfig } from './configs/unicorn_config.js';
import { vitestConfig } from './configs/vitest_config.js';
import { vueAccessibilityConfig } from './configs/vue_accessibility_config.js';
import { vueConfig } from './configs/vue_config.js';
import { ignores } from './constants.js';
import { type NodecfdiSettings } from './types.js';

const getLanguageOptionsTypescript = <T = NodeCfdiFlatAtomConfig['languageOptions']>(
  userChosenTsConfig?: string | string[],
  vueSupport = false,
): T => {
  return {
    parser: vueSupport ? vueParser : tsParser,
    parserOptions: {
      parser: vueSupport ? tsParser : undefined,
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: userChosenTsConfig || true,
      extraFileExtensions: vueSupport ? ['.vue'] : undefined,
    },
  } as T;
};

export const getExportableConfig = (userConfigPrefers?: NodecfdiSettings): FlatESLintConfig[] => {
  const userConfigChoices = userConfigPrefers ?? {
    vitest: true,
    adonisjs: false,
    vue: false,
  };

  const exportableConfig: NodeCfdiFlatConfig = [
    {
      languageOptions: getLanguageOptionsTypescript(
        userConfigChoices.pathsOverrides?.tsconfigLocation,
        userConfigChoices.vue,
      ),
    },
    ...typescriptConfig,
    canonicalConfig,
    tsdocConfig,
    eslintBaseConfig,
    unicornConfig,
    simpleImportSortConfig,
    regexpConfig,
    stylisticConfig,
    earlyReturnConfig,
    sonarjsConfig,
    arrowReturnStyleConfig,
    ...importConfig,
    commentsConfig,
    promiseConfig,
    securityConfig,
  ];

  if (userConfigChoices.vitest) {
    exportableConfig.push(vitestConfig(userConfigChoices));
  }

  if (userConfigChoices.adonisjs) {
    exportableConfig.push(...adonisjsConfig);
  }

  if (userConfigChoices.vue) {
    exportableConfig.push(...vueConfig, ...vueAccessibilityConfig);
  }

  exportableConfig.push(...prettierConfig);

  const hasIgnoresRecommended =
    userConfigChoices.ignores?.recommended === undefined
      ? true
      : userConfigChoices.ignores.recommended;

  const hasIgnoresInheritedFromGitIgnore =
    userConfigChoices.ignores?.inheritedFromGitignore === undefined
      ? true
      : userConfigChoices.ignores.inheritedFromGitignore;

  exportableConfig.push({
    ignores: [
      ...(hasIgnoresRecommended ? ignores : []),
      ...(hasIgnoresInheritedFromGitIgnore ? getGitignorePatterns({ strict: false }).ignores : []),
      ...(userConfigChoices.ignores?.additional ?? []),
    ],
  });

  return exportableConfig;
};
