import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const plus = '+';
  const minus = '-';
  const times = 'x';
  const divide = '÷';
  const mNumberOne = Big(numberOne);
  const mNumberTwo = Big(numberTwo);
  let result;
  switch (operation) {
    case plus:
      result = mNumberOne.plus(mNumberTwo);
      break;
    case minus:
      result = mNumberOne.minus(mNumberTwo);
      break;
    case times:
      result = mNumberOne.times(mNumberTwo);
      break;
    case divide:
      result = mNumberTwo.c[0] === 0 ? 'Can\'t divide by 0!' : mNumberOne.div(mNumberTwo);
      break;
    default:
      result = 'ERROR';
  }
  return (result.toString());
}
