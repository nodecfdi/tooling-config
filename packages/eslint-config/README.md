# @nodecfdi/eslint-config

> La libreria `@nodecfdi/eslint-config` exporta la configuración base para eslint usada en los proyectos de NodeCfdi.

:us: The documentation of this project is in spanish as this is the natural language for intended audience.

:mexico: La documentación del proyecto está en español porque ese es el lenguaje principal de los usuarios.

## Instalación

### NPM

```shell
npm i -D eslint @nodecfdi/eslint-config
```

### Yarn

```shell
yarn add eslint -D @nodecfdi/eslint-config
```

### PNPM

```shell
pnpm add eslint -D @nodecfdi/eslint-config
```

## Uso básico

Para habilitar está configuración crea un archivo `eslint.config.js` en el root del proyecto y copia y pega el siguiente contenido:

```js
import { nodecfdiConfig } from '@nodecfdi/eslint-config';
import { defineFlatConfig } from 'eslint-define-config';

export default defineFlatConfig([...nodecfdiConfig()]);
```

Si deseas ajustar algúna regla o habilitar alguna no incluida, puedes extender de está configuración por ejemplo:

```js
import { nodecfdiConfig } from '@nodecfdi/eslint-config';
import { defineFlatConfig } from 'eslint-define-config';
// my other imports...

export default defineFlatConfig([
  ...nodecfdiConfig(),
  // my other configurations
]);
```

## Soporte VSCode

Para que la extensión VSCode ESLint funcione correctamente, necesitaremos habilitar algunas configuraciones. Es recomendable habilitarlos en el nivel del espacio de trabajo, es decir, en la raíz del proyecto en `.vscode/settings.json`

La compatibilidad con ESLint `FlatConfig` actualmente no está habilitada de forma predeterminada. Debe habilitarse manualmente así:

```json
{
  "eslint.experimental.useFlatConfig": true
}
```
