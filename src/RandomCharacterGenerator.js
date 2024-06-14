// src/RandomCharacterGenerator.js
import React, { useState, useEffect } from 'react';

const RandomCharacterGenerator = () => {
  const [character, setCharacter] = useState('');

  const generateRandomCharacter = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomChar = chars.charAt(Math.floor(Math.random() * chars.length));
    setCharacter(randomChar);
  };

  useEffect(() => {
    generateRandomCharacter();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <div className="flex items-center justify-center w-48 h-48 mb-8 text-6xl font-bold text-green-500 border-4 border-green-500 rounded-lg bg-white">
        {character}
      </div>
      <button 
        className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
        onClick={generateRandomCharacter}
      >
        Generate Character
      </button>
    </div>
  );
};

export default RandomCharacterGenerator;
