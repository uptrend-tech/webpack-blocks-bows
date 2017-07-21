import bows from '../src';

describe('bows', () => {
  const context = {
    fileType: () => '*.js',
  };

  it('returns webpack block with passed string exclude', () => {
    const block = bows({ exclude: 'foo' })(context);
    expect(block.module.loaders[0].exclude).toEqual(['foo']);
  });

  it('returns webpack block with passed regex exclude', () => {
    const block = bows({ exclude: [/bar/] })(context);
    expect(block.module.loaders[0].exclude).toEqual([/bar/]);
  });

  it('returns webpack block with passed array of strings exclude', () => {
    const block = bows({ exclude: ['foo', 'bar'] })(context);
    expect(block.module.loaders[0].exclude).toEqual(['foo', 'bar']);
  });

  it('returns webpack block with passed array of regex exclude', () => {
    const block = bows({ exclude: [/foo/, /bar/] })(context);
    expect(block.module.loaders[0].exclude).toEqual([/foo/, /bar/]);
  });

  it('returns webpack block with passed array of strgin & regex exclude', () => {
    const block = bows({ exclude: [/foo/, 'bar'] })(context);
    expect(block.module.loaders[0].exclude).toEqual([/foo/, 'bar']);
  });

  it('returns webpack block with default exclude', () => {
    const block = bows()(context);
    expect(block.module.loaders[0].exclude).toEqual([/\/node_modules\//]);
  });
});
