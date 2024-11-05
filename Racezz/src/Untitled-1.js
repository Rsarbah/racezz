// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreateCrewMate from './pages/CreateCrewmate';
import CrewMateGallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/create">Create a Crew Mate</Link> | 
          <Link to="/gallery">Crew Mate Gallery</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateCrewMate />} />
          <Route path="/gallery" element={<CrewMateGallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
