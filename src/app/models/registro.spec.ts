import { Registro } from './registro';

describe('Registro', () => {
  it('should create an instance', () => {
    expect(new Registro(0, 0, null, '', '')).toBeTruthy();
  });
});
