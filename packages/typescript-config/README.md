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

Para libs de NodeCfdi, deberás de extender del archivo `tsconfig.package.json`:

```json
{
  "extends": "@nodecfdi/tsconfig/tsconfig.package.json"
}
```

Si tu estás creando un proyecto NodeCfdi web backend, deberás de extender del archivo `tsconfig.app.json`:

```json
{
  "extends": "@nodecfdi/tsconfig/tsconfig.app.json"
}
```

Si estás creando un proyecto NodeCfdi web frontend o con algún bundler resolver, deberás de extender del archivo `tsconfig.client.json`:

```json
{
  "extends": "@nodecfdi/tsconfig/tsconfig.client.json"
}
