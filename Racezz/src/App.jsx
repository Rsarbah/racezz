import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreateCrewMate from './pages/CreateCrewmate';
import CrewMateGallery from './pages/Gallery';
import CrewMateInfo from './pages/CrewMateInfo';
import './App.css';

function App() {
  return (
    <Router>
      <div className="dashboard">
        <nav className="sidebar">
          <h2>Racezz</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/create-crewmate">Create a Crewmate</Link></li>
            <li><Link to="/gallery">Crewmate Gallery</Link></li>
          </ul>
        </nav>
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-crewmate" element={<CreateCrewMate />} />
            <Route path="/gallery" element={<CrewMateGallery />} />
            <Route path="/crewmate/:id" element={<CrewMateInfo />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;