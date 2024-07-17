import React, { useState } from 'react';
import './FlipCard.css'; // Import the CSS file for styling
import RefreshIcon from './RefreshIcon'; // Import the RefreshIcon component

const RandomCharacterGenerator = () => {
  const [character, setCharacter] = useState('');
  const [flipped, setFlipped] = useState(false);

  const generateRandomCharacter = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomChar = chars.charAt(Math.floor(Math.random() * chars.length));
    setFlipped(false);
    setTimeout(() => {
      setFlipped(true);
      setCharacter(randomChar);
    }, 300);
  };

  useState(() => {
    generateRandomCharacter();
  }, []);

  const handleRefresh = () => {
    generateRandomCharacter();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-sm rounded overflow-hidden">
        <div className="flip-card">
          <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
            <div className="flip-card-front">
              <div className="flex justify-center items-center h-full rounded-lg">
                {/* <span className="text-[3rem] font-bold">แรกพบ SIT น้อย </span> */}
                <img src='/images/carnival-back-upsized-noborder.svg' alt=''/>
              </div>
            </div>
            
            <div className="flip-card-back">
              <div className="flip-card-border">
                <div className="flex justify-center items-center h-full">
                  <span className="text-[8rem] font-bold">{character}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button className="button" onClick={handleRefresh}>
            <RefreshIcon className="refresh-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RandomCharacterGenerator;
