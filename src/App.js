import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [walls, setWalls] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/walls/')
      .then(res => setWalls(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Walls</h1>
      <ul>
        {walls.map(wall => (
          <li key={wall.id}>{wall.name} - {wall.open ? 'Open' : 'Closed'}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
