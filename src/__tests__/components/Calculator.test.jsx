/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../../components/Calculator';

describe('Calculator Component', () => {
  it('Displays the correct h1 header text.', () => {
    render(<Calculator />);
    expect(screen.getByText(/Let's do some Math!/i));
  });

  it('Displays the correct amount of buttons in Calculator.', () => {
    render(<Calculator />);
    expect(screen.getAllByRole('button').length).toBe(19);
  });

  it('Initiates display with the number 0.', () => {
    render(<Calculator />);
    expect(screen.getByTestId('calculator-display').textContent).toEqual('0');
  });

  it('Pass the pressed button and displays it.', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    expect(screen.getByTestId('calculator-display')).toHaveTextContent('1');
  });

  it('Displays the correct result of a calculation.', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByTestId('calculator-display')).toHaveTextContent('3');
  });
});
