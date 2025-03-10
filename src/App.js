import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Destinations from './components/Destinations';
import Bookings from './components/Bookings';
import Contact from './components/Contact';
import BookingList from './components/BookingList';
import { TravelProvider } from './context/TravelContext';

function App() {
  return (
    <TravelProvider>
      <Router>
        <div className="App">
          <Header />
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<h2>Welcome to Travel Helper</h2>} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/my-bookings" element={<BookingList />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </TravelProvider>
  );
}

export default App;