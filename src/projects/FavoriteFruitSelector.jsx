import React, { useState } from 'react';

const fruitImages = {
  Apple: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg',
  Banana: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg',
  Orange: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg',
  Mango: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg',
  Strawberry: 'https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg',
};

export default function FavoriteFruitSelector({ darkMode }) {
  const [selectedFruit, setSelectedFruit] = useState('');

  const handleChange = (e) => {
    setSelectedFruit(e.target.value);
  };

  const handleClear = () => {
    setSelectedFruit('');
  };

  return (
    <>
      <h2>Favorite Fruit Selector</h2>
      <select
        value={selectedFruit}
        onChange={handleChange}
        className={darkMode ? 'dark-select' : ''}
        aria-label="Select your favorite fruit"
      >
        <option value="">-- Select a fruit --</option>
        {Object.keys(fruitImages).map((fruit) => (
          <option key={fruit} value={fruit}>
            {fruit}
          </option>
        ))}
      </select>

      {selectedFruit && (
        <div style={{ marginTop: '1rem' }}>
          <p>
            Your favorite fruit is: <strong>{selectedFruit}</strong>
          </p>
          <img
            src={fruitImages[selectedFruit]}
            alt={selectedFruit}
            style={{
              width: '150px',
              height: '150px',
              objectFit: 'cover',
              borderRadius: '15px',
              boxShadow: '0 4px 12px rgba(92, 39, 254, 0.4)',
              transition: 'transform 0.3s ease',
            }}
          />
        </div>
      )}

      <div style={{ marginTop: '1rem' }}>
        <button onClick={handleClear}>Clear</button>
      </div>
    </>
  );
}
