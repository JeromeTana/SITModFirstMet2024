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
    <div>
      <h1>{character}</h1>
    </div>
  );
};

export default RandomCharacterGenerator;
