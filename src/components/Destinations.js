import React from 'react';

const Destinations = () => {
  const destinations = [
    { name: 'Paris', description: 'City of Light' },
    { name: 'New York', description: 'The Big Apple' },
    { name: 'Tokyo', description: 'Land of the Rising Sun' },
  ];

  return (
    <div>
      <h2>Popular Destinations</h2>
      <ul>
        {destinations.map((destination, index) => (
          <li key={index}>
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Destinations;