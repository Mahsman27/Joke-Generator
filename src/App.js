import React, {useState, useEffect} from 'react';
import './index.css';

const apiURL = 'https://api.icndb.com/jokes/random';

function App() {
  const [joke, setJoke] = useState('');

  const generateJoke = () => {
    fetch(apiURL)
    .then(res => res.json())
    .then(data => setJoke(data.value.joke));
  }

  useEffect(() => {
    generateJoke();
  }, [])


  return (
    <div className="box">
      <h1>Joke Generator</h1>
      <p dangerouslySetInnerHTML={{__html: joke}} />
      <button onClick={generateJoke}>Get new joke</button>
    </div>
  );
}
export default App;
