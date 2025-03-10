import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Bookings from './Bookings';
import { TravelProvider } from '../context/TravelContext';

test('renders booking form', () => {
  render(
    <TravelProvider>
      <Bookings />
    </TravelProvider>
  );
  expect(screen.getByText(/Book Your Trip/i)).toBeInTheDocument();
});

test('submits booking form', () => {
  // Mock the alert function
  window.alert = jest.fn();

  render(
    <TravelProvider>
      <Bookings />
    </TravelProvider>
  );

  fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText(/Destination:/i), { target: { value: 'Paris' } });
  fireEvent.change(screen.getByLabelText(/Date:/i), { target: { value: '2025-12-25' } });
  fireEvent.click(screen.getByText(/Submit/i));

  // Check if the alert function was called with the correct message
  expect(window.alert).toHaveBeenCalledWith('Booking for John Doe to Paris on 2025-12-25 submitted!');
});