// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ReceptionScene from './scenes/ReceptionScene';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ReceptionScene />
      </main>
      <Footer />
    </div>
  );
}

export default App;
