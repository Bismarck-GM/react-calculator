import Calculate from '../../logic/calculate';

const someData = {
  total: 9,
  next: 3,
  operation: '+',
};

const someDataNoOperation = {
  total: 9,
  next: 3,
  operation: null,
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

  it('AC functionality returns data with all its fields = null', () => {
    const result = Calculate(someData, 'AC');
    expect(result).toEqual(emptyData);
  });

  it('Decimal functionality returns a decimal if there isn\'t any.', () => {
    const result = Calculate(someData, '.');
    expect(result.next).toBe('3.');
  });

  it('Decimal functionality returns \'0.\' if there isn\'t any and data is null.', () => {
    const result = Calculate(emptyData, '.');
    expect(result.next).toBe('0.');
  });

  it('Equal functionality returns as total the result of the object operation.', () => {
    const result = Calculate(someData, '=');
    expect(result.total).toBe('12');
  });

  it('Equal functionality returns same object if no operation is given', () => {
    const result = Calculate(someDataNoOperation, '=');
    expect(result).toEqual(someDataNoOperation);
  });

  it('Zero functionality should\'t add 0 to display if there\'s only a 0 & data is null', () => {
    const result = Calculate(emptyData, '0');
    expect(result.next).toBe('0');
  });

  it('Numbers functionality should add numbers to object.next', () => {
    const result = Calculate(someData, '9');
    expect(result.next).toBe('39');
  });
});
