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

