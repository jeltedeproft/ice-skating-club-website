import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Ice Diamonds Antwerp</Link>
        <ul className="flex space-x-4 md:space-x-6 flex-wrap">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/figure-skating" className="hover:underline">Kunstschaatsen</Link></li>
          <li><Link to="/synchronized-skating" className="hover:underline">Synchroonschaatsen</Link></li>
          <li><Link to="/short-track" className="hover:underline">Shorttrack</Link></li>
          <li><Link to="/schedule" className="hover:underline">Weekrooster</Link></li>
          <li><Link to="/calendar" className="hover:underline">Kalender</Link></li>
          <li><Link to="/news" className="hover:underline">Clubnieuws</Link></li>
          <li><Link to="/initiations" className="hover:underline">Initiaties</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;