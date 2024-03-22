import getGitignorePatterns from 'eslint-config-flat-gitignore';
import { parser } from 'typescript-eslint';
import { getArrowReturnStyleConfig } from './configs/arrow_return_style_config.js';
import { getCanonicalConfig } from './configs/canonical_config.js';
import { getCommentsConfig } from './configs/comments_config.js';
import { ignores } from './configs/constants.js';
import { getEarlyReturnConfig } from './configs/early_return_config.js';
import { getEslintBaseConfig } from './configs/eslint_base_config.js';
import { getImportConfig } from './configs/import_config.js';
import { getPrettierConfig } from './configs/prettier_config.js';
import { getPromiseConfig } from './configs/promise_config.js';
import { getRegexpConfig } from './configs/regexp_config.js';
import { getSecurityConfig } from './configs/security_config.js';
import { getSimpleImportSortConfig } from './configs/simple_import_sort_config.js';
import { getSonarjsConfig } from './configs/sonarjs_config.js';
import { getStylisticConfig } from './configs/stylistic_config.js';
import { getTsdocConfig } from './configs/tsdoc_config.js';
import { getTypescriptConfig } from './configs/typescript_config.js';
import { getUnicornConfig } from './configs/unicorn_config.js';
import { getVitestConfig } from './configs/vitest_config.js';
import { type ExportableConfigAtom } from './types/flat_config.js';
import type NodecfdiSettings from './types/node_settings.js';

const getLanguageOptionsTypescript = (userChosenTsConfig?: string | string[]) => {
  return {
    parser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: userChosenTsConfig || true,
    },
  };
};

export const getExportableConfig = (
  userConfigPrefers?: NodecfdiSettings,
): ExportableConfigAtom[] => {
  const userConfigChoices = userConfigPrefers ?? {
    vitest: true,
  };

  const exportableConfig: ExportableConfigAtom[] = [
    {
      languageOptions: getLanguageOptionsTypescript(
        userConfigChoices.pathsOveriddes?.tsconfigLocation,
      ),
    },
    ...getTypescriptConfig(),
    getCanonicalConfig(),
    getTsdocConfig(),
    getEslintBaseConfig(),
    getUnicornConfig(),
    getSimpleImportSortConfig(),
    getRegexpConfig(),
    getStylisticConfig(),
    getEarlyReturnConfig(),
    getSonarjsConfig(),
    getArrowReturnStyleConfig(),
    ...getImportConfig(),
    getCommentsConfig(),
    getPromiseConfig(),
    getSecurityConfig(),
  ];

  if (userConfigChoices.vitest) {
    exportableConfig.push(getVitestConfig(userConfigChoices.pathsOveriddes?.tests));
  }

  exportableConfig.push(...getPrettierConfig());

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
