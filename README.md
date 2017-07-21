# webpack-blocks-bows

[![Generated with nod](https://img.shields.io/badge/generator-nod-2196F3.svg?style=flat-square)](https://github.com/diegohaz/nod)
[![NPM version](https://img.shields.io/npm/v/webpack-blocks-bows.svg?style=flat-square)](https://npmjs.org/package/webpack-blocks-bows)
[![Build Status](https://img.shields.io/travis/omt-tech/webpack-blocks-bows/master.svg?style=flat-square)](https://travis-ci.org/omt-tech/webpack-blocks-bows) [![Coverage Status](https://img.shields.io/codecov/c/github/omt-tech/webpack-blocks-bows/master.svg?style=flat-square)](https://codecov.io/gh/omt-tech/webpack-blocks-bows/branch/master)

A webpack block that injects [bows](https://www.npmjs.com/package/bows) (a console.log replacement) into source files.

This package uses [bows-loader](https://github.com/arrayjam/bows-loader) under the hood.

## Install

    $ yarn add -D webpack-blocks-bows

Or with npm:

    $ npm install --save-dev webpack-blocks-bows

## Usage

```js
const { createConfig } = require('@webpack-blocks/webpack2')
const babel = require('@webpack-blocks/babel6')
const bows = require('webpack-blocks-bows)

const config = createConfig([
  babel(),
  bows(),
])
```

Then, you can use the global `log(...)` in place of `console.log(...)`.

Checkout the bows [documentation](https://www.npmjs.com/package/bows) for more details.

### .eslintrc changes

> Since you'll be using a new global in your source, eslint should complain about this. Either add `log` as a global, or use [eslint-config-bows-loader](https://www.npmjs.com/package/eslint-config-bows-loader).

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### bows

Returns a webpack block that splits vendor javascript bundle.

**Parameters**

-   `options` **[Options](#options)** 

Returns **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** 

### Exclude

Type: ([string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) \| [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)>)

### Options

Type: {exclude: [Exclude](#exclude)?}

**Properties**

-   `exclude` **[Exclude](#exclude)?** 

## License

MIT © [Orther Mulelid-Tynes Technologies, Inc.](http://omt.tech)