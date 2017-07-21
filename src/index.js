// @flow
import type { Options } from './types';

/**
 * Returns a webpack block that splits vendor javascript bundle.
 */
const bows = (options: Options): Function => {
  const { exclude = /\/node_modules\// } = options || {};

  return context => ({
    module: {
      loaders: [
        {
          test: context.fileType('application/javascript'),
          exclude: Array.isArray(exclude) ? exclude : [exclude],
          loaders: ['bows-loader'],
        },
      ],
    },
  });
};

module.exports = bows;
