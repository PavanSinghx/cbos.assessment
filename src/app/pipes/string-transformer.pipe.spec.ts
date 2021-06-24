import { StringTransformerPipe } from './string-transformer.pipe';

describe('StringTransformerPipe', () => {
  it('create an instance', () => {
    const pipe = new StringTransformerPipe();
    expect(pipe).toBeTruthy();
  });
});
