import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';        // Your Home.js component
import WallList from './pages/WallList';
import RouteList from './pages/RouteList';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />            {/* Home page */}
        <Route path="/walls" element={<WallList />} />   {/* Walls list */}
        <Route path="/walls/:id" element={<RouteList />} />
        {/* Other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
