import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders welcome message', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/Welcome to Travel Helper/i);
  expect(linkElement).toBeInTheDocument();
});