import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h2>Welcome to Travel Helper</h2>
        <p>Your ultimate travel companion.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;