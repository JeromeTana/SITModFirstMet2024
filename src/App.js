// src/App.js
import React from 'react';
import './styles/App.css';
import RandomCharacterGenerator from './RandomCharacterGenerator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RandomCharacterGenerator />
      </header>
    </div>
  );
}

export default App;
