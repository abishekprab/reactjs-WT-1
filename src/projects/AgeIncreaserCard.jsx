import { useState, Fragment } from 'react';
import '../App.css';

function AgeIncreaserCard({ name }) {
  const [age, setAge] = useState(20);

  return (
    <Fragment>
      <h2>{name}'s Age Card</h2>
      <p>Age: {age}</p>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
      <button onClick={() => setAge(20)}>Clear</button>
    </Fragment>
  );
}

export default AgeIncreaserCard;