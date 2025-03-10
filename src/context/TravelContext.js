import React, { createContext, useState } from 'react';

export const TravelContext = createContext();

export const TravelProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [user, setUser] = useState(null);

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  return (
    <TravelContext.Provider value={{ bookings, user, addBooking, setUser }}>
      {children}
    </TravelContext.Provider>
  );
};