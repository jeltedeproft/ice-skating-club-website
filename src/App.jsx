import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FigureSkating from './pages/FigureSkating';
import SynchronizedSkating from './pages/SynchronizedSkating';
import ShortTrack from './pages/ShortTrack';
import Schedule from './pages/Schedule';
import Calendar from './pages/Calendar';
import News from './pages/News';
import Initiations from './pages/Initiations';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-white animate-gradient text-gray-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/figure-skating" element={<FigureSkating />} />
        <Route path="/synchronized-skating" element={<SynchronizedSkating />} />
        <Route path="/short-track" element={<ShortTrack />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/news" element={<News />} />
        <Route path="/initiations" element={<Initiations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;