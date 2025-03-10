import React, { useState, useContext } from 'react';
import { TravelContext } from '../context/TravelContext';
import StyledButton from './StyledButton';

const Bookings = () => {
  const { addBooking } = useContext(TravelContext);
  const [name, setName] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const booking = { name, destination, date };
    addBooking(booking);
    alert(`Booking for ${name} to ${destination} on ${date} submitted!`);
    setName('');
    setDestination('');
    setDate('');
  };

  return (
    <div>
      <h2>Book Your Trip</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="destination">Destination:</label>
          <input
            id="destination"
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <StyledButton type="submit">Submit</StyledButton>
      </form>
    </div>
  );
};

export default Bookings;