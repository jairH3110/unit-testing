import { fact } from './fact';

describe('getCurrencies', () => {
  it('should return the fact of the numbers', () => {
    const result = fact(-2);
    expect(result).toBe(0);
  });
});

describe('getCurrencies', () => {
  it('should return the fact of the numbers', () => {
    const result = fact(0);
    expect(result).toBe(1);
  });
});

describe('getCurrencies', () => {
  it('should return the fact of the numbers', () => {
    const result = fact(3);
    expect(result).toBe(6);
  });
});

describe('getCurrencies', () => {
  it('should return the fact of the numbers', () => {
    const result = getFact(4);
    expect(result).toBe(24);
  });
});

describe('getCurrencies', () => {
  it('should return the fact of the numbers', () => {
    const result = getFact(5);
    expect(result).toBe(120);
  });
});

describe('getCurrencies', () => {
  it('should return the fact of the numbers', () => {
    const result = getFact(17);
    expect(result).toBe(0);
  });
});