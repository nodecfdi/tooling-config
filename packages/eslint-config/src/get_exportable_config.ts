import getGitignorePatterns from 'eslint-config-flat-gitignore';
import { getArrowReturnStyleConfig } from './configs/arrow_return_style_config.ts';
import { getCanonicalConfig } from './configs/canonical_config.ts';
import { getCommentsConfig } from './configs/comments_config.ts';
import { ignores } from './configs/constants.ts';
import { getEarlyReturnConfig } from './configs/early_return_config.ts';
import { getEslintBaseConfig } from './configs/eslint_base_config.ts';
import { getImportConfig } from './configs/import_config.ts';
import { getPrettierConfig } from './configs/prettier_config.ts';
import { getPromiseConfig } from './configs/promise_config.ts';
import { getRegexpConfig } from './configs/regexp_config.ts';
import { getSimpleImportSortConfig } from './configs/simple_import_sort_config.ts';
import { getSonarjsConfig } from './configs/sonarjs_config.ts';
import { getStylisticConfig } from './configs/stylistic_config.ts';
import { getTsdocConfig } from './configs/tsdoc_config.ts';
import { getTypescriptConfig } from './configs/typescript_config.ts';
import { getUnicornConfig } from './configs/unicorn_config.ts';
import { getVitestConfig } from './configs/vitest_config.ts';
import { type ExportableConfigAtom, type NodecfdiSettings } from './types/index.ts';

export const getExportableConfig = (
  userConfigPrefers?: NodecfdiSettings,
): ExportableConfigAtom[] => {
  const userConfigChoices = userConfigPrefers ?? {
    vitest: true,
  };

  const exportableConfig: ExportableConfigAtom[] = [
    ...getTypescriptConfig(userConfigChoices),
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
