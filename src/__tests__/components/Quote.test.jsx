import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from '../../components/Quote';

describe('Quote', () => {
  it('Renders correctly', () => {
    render(<Quote />);

    expect(screen.queryByTestId('header')).toBeTruthy();
    expect(screen.queryByTestId('header-wrapper')).toBeTruthy();
  });
});
