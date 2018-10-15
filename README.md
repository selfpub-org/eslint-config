# @selfpub/eslint-config

[![NpmLicense](https://img.shields.io/npm/l/@selfpub/eslint-config.svg)][npm-url]
[![NPM version](https://img.shields.io/npm/v/@selfpub/eslint-config/latest.svg)][npm-url]

Selfpub’s config for eslint.

## Install

Install this package, as well as the parts of Babel you wish to use:

**With Yarn**

```bash
$ yarn add  --dev --exact eslint @selfpub/eslint-config
```

**With npm**

```bash
npm install eslint @selfpub/eslint-config --save-dev --save-exact
```

## Usage

### Via .eslintrc (Recommended)

Then, in your Eslint configuration, extend your eslint config you’d like:

```
{
  "extends": "@selfpub/eslint-config"
}
```

A few ESLint plugins are supported as well:

- [eslint-plugin-flowtype]
- [eslint-plugin-react]
- [eslint-plugin-standard]
- [eslint-plugin-unicorn]

Add extra exclusions for the plugins you use like so:

```json
{
  "extends": [
    "@selfpub/eslint-config",
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard",
    "prettier/unicorn"
  ]
}
```

[npm-url]: https://www.npmjs.com/package/@selfpub/eslint-config

