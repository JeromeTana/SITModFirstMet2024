// src/App.js
import React from 'react';
import './styles/App.css';
import RandomCharacterGenerator from './RandomCharacterGenerator';
import FallingObjectBackground from './FallingObjectBackground';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FallingObjectBackground image={'/images/ant.png'}>
          <RandomCharacterGenerator />
        </FallingObjectBackground>
      </header>
    </div>
  );
}

export default App;
