# GraphAwareTest

This is my submission to GraphAware's test. It was made with Typescript, Vue3, EasyDataTable and Plinia.

Following the docs I tried to make it as generic as possible, so after analyzing the data structure provided I realized that data could be nested virtually infinitely but it would follow the pattern of having a kids attribute in which the nested data would linger, that made me chose to make a recursive component which handles the data received as props, process it in order to make it compatible with the EasyDataTable library chosen to display data and finally calling this component recursively in order to display their nested data.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
