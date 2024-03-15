# @nodecfdi/tsconfig

> La libreria `@nodecfdi/tsconfig` exporta la configuración base para Typescript usada en los proyectos de NodeCfdi.

:us: The documentation of this project is in spanish as this is the natural language for intended audience.

:mexico: La documentación del proyecto está en español porque ese es el lenguaje principal de los usuarios.

## Instalación

### NPM

```shell
npm i -D typescript @nodecfdi/tsconfig
```

### Yarn

```shell
yarn add -D typescript @nodecfdi/tsconfig
```

### PNPM

```shell
pnpm add -D typescript @nodecfdi/tsconfig
```

## Uso básico

Si tu estás creando un proyecto NodeCfdi, deberás de extender del archivo `tsconfig.base.json`:

```json
{
  "extends": "@nodecfdi/tsconfig/tsconfig.base.json"
}
```
