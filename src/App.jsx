import { useState, useEffect } from 'react';
import GroceryListApp from './projects/GroceryListApp';
import LoginStatusToggle from './projects/LoginStatusToggle';
import AgeIncreaserCard from './projects/AgeIncreaserCard';
import LiveCharCounter from './projects/LiveCharCounter';
import FavoriteFruitSelector from './projects/FavoriteFruitSelector';
import './App.css';

function App() {
  const [selectedProject, setSelectedProject] = useState('Grocery List App');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const renderProject = () => {
    switch (selectedProject) {
      case 'Grocery List App':
        return <GroceryListApp darkMode={darkMode} />;
      case 'Login Status Toggle':
        return <LoginStatusToggle darkMode={darkMode} />;
      case 'Age Increaser Card':
        return <AgeIncreaserCard name="Alex" darkMode={darkMode} />;
      case 'Live Character Counter':
        return <LiveCharCounter darkMode={darkMode} />;
      case 'Favorite Fruit Selector':
        return <FavoriteFruitSelector darkMode={darkMode} />;
      default:
        return null;
    }
  };

  return (
    <div className={`app-container`}>
      <h1>🎯 ReactJS Weekly Projects Showcase</h1>
      <div className="controls">
        <select className={`dropdown ${darkMode ? 'dark-select' : ''}`} value={selectedProject} onChange={(e) => setSelectedProject(e.target.value)}>
          <option>Grocery List App</option>
          <option>Login Status Toggle</option>
          <option>Age Increaser Card</option>
          <option>Live Character Counter</option>
          <option>Favorite Fruit Selector</option>
        </select>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
      <div className="project-box">{renderProject()}</div>
    </div>
  );
}

export default App;
