import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FigureSkating from './pages/FigureSkating';
import SynchronizedSkating from './pages/SynchronizedSkating';
import ShortTrack from './pages/ShortTrack';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/figure-skating" element={<FigureSkating />} />
        <Route path="/synchronized-skating" element={<SynchronizedSkating />} />
        <Route path="/short-track" element={<ShortTrack />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;