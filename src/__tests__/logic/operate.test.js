import Operate from '../../logic/operate';

const numberOne = 2;
const numberTwo = 2;
const plus = '+';
const minus = '-';
const times = 'x';
const divide = '÷';

describe('Operate Methods', () => {
  it('Plus function returns the sum of two numbers as a String', () => {
    const result = Operate(numberOne, numberTwo, plus);
    expect(result).toBe('4');
  });
  it('Minus function returns the rest of two numbers as a String', () => {
    const result = Operate(numberOne, numberTwo, minus);
    expect(result).toBe('0');
  });
  it('Times function returns the multiplication of two numbers as a String', () => {
    const result = Operate(numberOne, numberTwo, times);
    expect(result).toBe('4');
  });
  it('Division function returns the division of two numbers as a String', () => {
    const result = Operate(numberOne, numberTwo, divide);
    expect(result).toBe('1');
  });
  it('Division function returns ERROR as a String if the second argument is equal to 0', () => {
    const result = Operate(numberOne, 0, divide);
    expect(result).toBe('Can\'t divide by 0!');
  });
});
