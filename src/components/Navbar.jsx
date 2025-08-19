import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-6 justify-center text-white">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/about" className="hover:underline">About</Link></li>
        <li><Link to="/schedule" className="hover:underline">Schedule</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;