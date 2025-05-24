import React, { useState } from 'react';

export default function GroceryListApp({ darkMode }) {
  const [item, setItem] = useState('');
  const [groceryList, setGroceryList] = useState([]);

  const handleAdd = () => {
    if (item.trim() === '') return;
    setGroceryList([...groceryList, item.trim()]);
    setItem('');
  };

  const handleDelete = (index) => {
    const updatedList = groceryList.filter((_, i) => i !== index);
    setGroceryList(updatedList);
  };

  const handleClear = () => {
    setGroceryList([]);
  };

  return (
    <>
      <h2>Grocery List App</h2>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter grocery item"
        className={darkMode ? 'dark-select' : ''}
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleClear}>Clear All</button>

      <ul>
        {groceryList.map((grocery, index) => (
          <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {grocery}
            <button
              onClick={() => handleDelete(index)}
              style={{
                marginLeft: '1rem',
                padding: '0.3rem 0.6rem',
                fontSize: '0.85rem',
                background: '#ff4d4d',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
