import Calculate from '../../logic/calculate';

const someData = {
  total: 9,
  next: 3,
  operation: '+',
};

const emptyData = {
  total: null,
  next: null,
  operation: null,
};

describe('Calculate Methods', () => {
  it('PlusMinus (+/-) functionality returns opposite given sign', () => {
    const result = Calculate(someData, '+/-');
    expect(Math.sign(result.total)).toBe(-1);
  });

  it('Mod (%) functionality returns total into percentage', () => {
    const result = Calculate(someData, '%');
    expect(result.total).toBe('0.09');
  });
});
