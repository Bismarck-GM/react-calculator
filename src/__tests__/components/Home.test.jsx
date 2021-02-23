/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../components/Home';

describe('Home Component', () => {
  it('Displays the correct h1 header text.', () => {
    render(<Home />);
    expect(screen.getByText(/Welcome to our page!/i));
  });
  it('Contains two <p> tags with same mock-up text.', () => {
    render(<Home />);
    expect(screen.getAllByText(/Lorem ipsum/i).length).toBe(2);
  });
});
