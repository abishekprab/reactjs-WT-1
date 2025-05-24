import { useState, Fragment } from 'react';
import '../App.css';

function LiveCharCounter() {
  const [text, setText] = useState('');

  return (
    <Fragment>
      <h2>Character Counter</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={() => setText('')}>Clear</button>
      <p>Character Count: {text.length}</p>
    </Fragment>
  );
}

export default LiveCharCounter;
