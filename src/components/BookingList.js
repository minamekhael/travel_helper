import React, { useContext } from 'react';
import { TravelContext } from '../context/TravelContext';

const BookingList = () => {
  const { bookings } = useContext(TravelContext);

  return (
    <div>
      <h2>My Bookings</h2>
      <ul>
        {bookings.map((booking, index) => (
          <li key={index}>
            {booking.name} - {booking.destination} on {booking.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;