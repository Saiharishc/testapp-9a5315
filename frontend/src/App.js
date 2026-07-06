import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch('/')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGreetClick = () => {
    if (name) {
      fetch(`/hello/${name}`)
        .then(res => res.json())
        .then(data => setGreeting(data.message));
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
        <div>
          <input type="text" value={name} onChange={handleNameChange} placeholder="Enter your name" />
          <button onClick={handleGreetClick}>Greet</button>
        </div>
        {greeting && <p>{greeting}</p>}
      </header>
    </div>
  );
}

export default App;
