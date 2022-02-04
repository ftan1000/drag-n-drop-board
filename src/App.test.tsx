import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders c', () => {
  render(<App />);
  const headline = screen.getByText(/Board/i);
  expect(headline).toBeInTheDocument();
});
