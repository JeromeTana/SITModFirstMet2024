// src/App.js
import React from 'react';
import './styles/App.css';
import RandomCharacterGenerator from './RandomCharacterGenerator';
import FallingObjectBackground from './FallingObjectBackground';
import { Analytics } from "@vercel/analytics/react";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <body>
        <FallingObjectBackground image={'/images/ant.png'}>
          <RandomCharacterGenerator />
        </FallingObjectBackground>
        <Analytics/>
        </body>
      </header>
    </div>
  );
}

export default App;
