/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Display from '../../components/Display';

const fakeProps1 = {
  result: '0',
};
const fakeProps2 = {
  result: '5',
};

describe('Display', () => {
  it('Displays the correct passed prop', () => {
    const { getByText } = render(<Display {...fakeProps1} />);

    expect(getByText(/0/i));
  });
  it('Displays the correct passed prop.', () => {
    const { getByText } = render(<Display {...fakeProps2} />);

    expect(getByText(/5/i));
  });
});
