import React, { useState, useContext } from 'react';
import { TravelContext } from '../context/TravelContext';

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
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Destination:</label>
          <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} required />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Bookings;