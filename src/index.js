// @flow
import type { Options } from './types';

const postHook = context => context.bows || {};
/**
 * Returns a webpack block that injects bows global `log(...)` function.
 */
const bows = (options: Options): Function => {
  const { exclude = /\/node_modules\// } = options || {};

  const bowsFunction = context => {
    context.bows = {
      module: {
        loaders: [
          {
            test: context.fileType('application/javascript'),
            exclude: Array.isArray(exclude) ? exclude : [exclude],
            loaders: ['bows-loader'],
          },
        ],
      },
    };

    return {};
  };

  return Object.assign(bowsFunction, { post: postHook });
};

module.exports = bows;
