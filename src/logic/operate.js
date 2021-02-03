import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const mNumberOne = Big(numberOne || '0');
  const mNumberTwo = Big(numberTwo || '0');
  switch (operation) {
    case '+':
      return mNumberOne.plus(mNumberTwo).toString();
    case '-':
      return mNumberOne.minus(mNumberTwo).toString();
    case 'X':
      return mNumberOne.times(mNumberTwo).toString();
    case '/':
      if (mNumberTwo === '0') {
        return 'Error. No div by 0.';
      }
      return mNumberOne.div(mNumberTwo).toString();

    default:
      throw new Error('Invalid Operation');
  }
}
