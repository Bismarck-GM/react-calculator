/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../../components/Button';

const props = {
  name: '6',
  clickHandler: jest.fn(),
  color: '#F5913E',
  wide: '25%',
};

describe('Button Component', () => {
  it('Renders correctly', () => {
    const { getByText } = render(<Button {...props} />);

    const number = getByText(props.name);

    expect(number).toBeDefined();
  });

  it('Triggers clickHandler when clicked', () => {
    render(<Button {...props} />);
    fireEvent.click(screen.getByText('6'));
    expect(props.clickHandler).toHaveBeenCalled();
  });
});
