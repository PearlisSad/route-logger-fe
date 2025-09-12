import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.component';
import Home from './pages/home.page';
import WallList from './pages/wall-list.page';
import RouteList from './pages/route-list.page';
import Profile from './pages/profile.page';
import WallView from './pages/wall-view.page.js';

function Random() {
  return <h2 className="mt-4 text-center">Random Page (Coming soon)</h2>;
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/walls" element={<WallList />} />
        <Route path="/walls/:id" element={<RouteList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/random" element={<Random />} />
        <Route path="/view-wall/:id" element={<WallView />} />
      </Routes>
    </Router>
  );
}
