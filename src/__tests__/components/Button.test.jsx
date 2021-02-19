/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../../components/Button';

const props = {
  name: '6',
  clickHandler: jest.fn(),
  color: '#F5913E',
  wide: '25%',
};

describe('Button', () => {
  it('Renders correctly', () => {
    const { getByText } = render(<Button {...props} />);

    const number = getByText(props.name);

    expect(number).toBeDefined();
  });

  it('Triggers clickHandler when clicked', () => {
    const { getByText } = render(<Button {...props} />);
    fireEvent.click(getByText('6'));
    expect(props.clickHandler).toHaveBeenCalled();
  });
});
