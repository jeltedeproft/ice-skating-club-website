import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-800/90 backdrop-blur-md shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold text-white drop-shadow-md">Ice Diamonds Antwerp</Link>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <ul className={`md:flex md:space-x-6 ${isOpen ? 'block' : 'hidden'} md:flex-row flex-col absolute md:static bg-blue-800/95 md:bg-transparent top-16 right-4 p-4 md:p-0 rounded-lg md:rounded-none shadow-md md:shadow-none`}>
          <li><Link to="/" className="block text-white hover:text-blue-200 transition duration-200 py-2 md:py-0">Home</Link></li>
          <li><Link to="/figure-skating" className="block text-white hover:text-blue-200 transition duration-200 py-2 md:py-0">Kunstschaatsen</Link></li>
          <li><Link to="/synchronized-skating" className="block text-white hover:text-blue-200 transition duration-200 py-2 md:py-0">Synchroonschaatsen</Link></li>
          <li><Link to="/short-track" className="block text-white hover:text-blue-200 transition duration-200 py-2 md:py-0">Shorttrack</Link></li>
          <li><Link to="/schedule" className="block text-white hover:text-blue-200 transition duration-200 py-2 md:py-0">Weekrooster</Link></li>
          <li><Link to="/calendar" className="block text-white hover:text-blue-200 transition duration-200 py-2 md:py-0">Kalender</Link></li>
          <li><Link to="/news" className="block text-white hover:text-blue-200 transition duration-200 py-2 md:py-0">Clubnieuws</Link></li>
          <li><Link to="/initiations" className="block text-white hover:text-blue-200 transition duration-200 py-2 md:py-0">Initiaties</Link></li>
          <li><Link to="/contact" className="block text-white hover:text-blue-200 transition duration-200 py-2 md:py-0">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;