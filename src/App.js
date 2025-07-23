import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WallList from './pages/WallList';
import RouteList from './pages/RouteList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WallList />} />
        <Route path="/walls/:id" element={<RouteList />} />
      </Routes>
    </Router>
  );
}

export default App;
