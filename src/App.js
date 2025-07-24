import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';       // Your main page component
import WallList from './pages/WallList';
import RouteList from './pages/RouteList';

// Dummy components for Profile, Random pages
function Profile() {
  return <h2 className="mt-4 text-center">Profile Page (Coming soon)</h2>;
}

function Random() {
  return <h2 className="mt-4 text-center">Random Page (Coming soon)</h2>;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/walls" element={<WallList />} />
        <Route path="/walls/:id" element={<RouteList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </Router>
  );
}

export default App;
