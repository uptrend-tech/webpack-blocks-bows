const { createConfig } = require('@webpack-blocks/webpack2');

import bows from '../src';

describe('bows', () => {
  const getContext = () => ({
    fileType: () => '*.js',
  });

  it('returns webpack block with passed string exclude', () => {
    const context = getContext();
    const block = bows({ exclude: 'foo' });
    expect(block(context)).toEqual({});
    expect(block.post(context).module.loaders[0].exclude).toEqual(['foo']);
  });

  it('returns webpack block with passed regex exclude', () => {
    const context = getContext();
    const block = bows({ exclude: [/bar/] });
    expect(block(context)).toEqual({});
    expect(block.post(context).module.loaders[0].exclude).toEqual([/bar/]);
  });

  it('returns webpack block with passed array of strings exclude', () => {
    const context = getContext();
    const block = bows({ exclude: ['foo', 'bar'] });
    expect(block(context)).toEqual({});
    expect(block.post(context).module.loaders[0].exclude).toEqual([
      'foo',
      'bar',
    ]);
  });

  it('returns webpack block with passed array of regex exclude', () => {
    const context = getContext();
    const block = bows({ exclude: [/foo/, /bar/] });
    expect(block(context)).toEqual({});
    expect(block.post(context).module.loaders[0].exclude).toEqual([
      /foo/,
      /bar/,
    ]);
  });

  it('returns webpack block with passed array of strgin & regex exclude', () => {
    const context = getContext();
    const block = bows({ exclude: [/foo/, 'bar'] });
    expect(block(context)).toEqual({});
    expect(block.post(context).module.loaders[0].exclude).toEqual([
      /foo/,
      'bar',
    ]);
  });

  it('returns webpack block with default exclude', () => {
    const context = getContext();
    const block = bows();
    expect(block(context)).toEqual({});
    expect(block.post(context).module.loaders[0].exclude).toEqual([
      /\/node_modules\//,
    ]);
  });
});

describe('webpack config only has one bows-loader', () => {
  it('set one bows-loader', () => {
    const config = createConfig([bows()]);
    const loadersWithBows = config.module.loaders.filter(
      rule => rule.loaders[0] === 'bows-loader'
    );
    expect(loadersWithBows).toHaveLength(1);
    expect(loadersWithBows[0].loaders).toEqual(['bows-loader']);
  });

  it('set two bows-loader', () => {
    const config = createConfig([bows(), bows()]);
    const loadersWithBows = config.module.loaders.filter(
      rule => rule.loaders[0] === 'bows-loader'
    );
    expect(loadersWithBows).toHaveLength(1);
    expect(loadersWithBows[0].loaders).toEqual(['bows-loader']);
  });

  it('set three bows-loader', () => {
    const config = createConfig([bows(), bows(), bows()]);
    const loadersWithBows = config.module.loaders.filter(
      rule => rule.loaders[0] === 'bows-loader'
    );
    expect(loadersWithBows).toHaveLength(1);
    expect(loadersWithBows[0].loaders).toEqual(['bows-loader']);
  });
});
