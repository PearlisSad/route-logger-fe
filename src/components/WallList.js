import React, { useEffect, useState } from 'react';

function WallList() {
  const [walls, setWalls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/walls/')
      .then(res => res.json())
      .then(data => {
        setWalls(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading walls...</p>;

  return (
    <div>
      <h2>Walls</h2>
      <ul>
        {walls.map(wall => (
          <li key={wall.id}>
            {wall.name} – {wall.open ? 'Open' : 'Closed'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WallList;
