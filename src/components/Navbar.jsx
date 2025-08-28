import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from './LanguageSwitcher';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDisciplinesOpen, setIsDisciplinesOpen] = useState(false);
    const location = useLocation();
    const disciplinesButtonRef = useRef(null);
    const submenuRef = useRef(null);

    useEffect(() => {
        const handleDocumentClick = (e) => {
            if (disciplinesButtonRef.current && !disciplinesButtonRef.current.contains(e.target) &&
                submenuRef.current && !submenuRef.current.contains(e.target)) {
                setIsDisciplinesOpen(false);
            }
        };
        document.addEventListener('mousedown', handleDocumentClick);
        return () => document.removeEventListener('mousedown', handleDocumentClick);
    }, []);

    useEffect(() => {
        setIsDisciplinesOpen(false);
        setIsOpen(false);
    }, [location.pathname]);

    const handleDisciplinesToggle = () => setIsDisciplinesOpen(!isDisciplinesOpen);

    const submenu = createPortal(
        <AnimatePresence>
            {isDisciplinesOpen && (
                <motion.ul
                    ref={submenuRef}
                    className="fixed w-48 bg-white/90 backdrop-blur-md rounded-xl shadow-xl overflow-hidden border border-blue-200"
                    style={{
                        top: disciplinesButtonRef.current
                            ? disciplinesButtonRef.current.getBoundingClientRect().bottom + window.scrollY
                            : 0,
                        left: disciplinesButtonRef.current
                            ? disciplinesButtonRef.current.getBoundingClientRect().left + window.scrollX
                            : 0,
                        zIndex: 9999,
                    }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                >
                    <li>
                        <Link to="/figure-skating" className="block px-4 py-2 text-blue-900 hover:bg-blue-100 transition rounded-md">Kunstschaatsen</Link>
                    </li>
                    <li>
                        <Link to="/synchronized-skating" className="block px-4 py-2 text-blue-900 hover:bg-blue-100 transition rounded-md">Synchroonschaatsen</Link>
                    </li>
                    <li>
                        <Link to="/short-track" className="block px-4 py-2 text-blue-900 hover:bg-blue-100 transition rounded-md">Shorttrack</Link>
                    </li>
                </motion.ul>
            )}
        </AnimatePresence>,
        document.body
    );

    return (
        <nav className="bg-blue-800/90 backdrop-blur-md shadow-lg fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
                {/* Logo + Title */}
                <Link to="/" className="flex items-center space-x-3">
                    <img src="/IDALogo.jpg" alt="Ice Diamonds Logo" className="h-10 w-auto rounded-md shadow-md" />
                    <span className="text-xl md:text-2xl font-bold text-white drop-shadow-md">Ice Diamonds Antwerp</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    <ul className="flex space-x-4 items-center text-white">
                        <li><Link to="/" className="hover:text-blue-200 transition">Home</Link></li>
                        <li className="relative">
                            <button ref={disciplinesButtonRef} onClick={handleDisciplinesToggle} className="hover:text-blue-200 transition flex items-center gap-1">
                                Disciplines <svg className={`w-4 h-4 transform ${isDisciplinesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </button>
                        </li>
                        <li><Link to="/schedule" className="hover:text-blue-200 transition">Weekrooster</Link></li>
                        <li><Link to="/calendar" className="hover:text-blue-200 transition">Kalender</Link></li>
                        <li><Link to="/news" className="hover:text-blue-200 transition">Clubnieuws</Link></li>
                        <li><Link to="/initiations" className="hover:text-blue-200 transition">Initiaties</Link></li>
                        <li><Link to="/team" className="hover:text-blue-200 transition">Team</Link></li>
                        <li><Link to="/contact" className="hover:text-blue-200 transition">Contact</Link></li>
                        <li><Link to="/policies" className="hover:text-blue-200 transition">Beleid</Link></li>
                        <li><Link to="/info" className="hover:text-blue-200 transition">Info</Link></li>
                    </ul>
                    <LanguageSwitcher />
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 rounded-md hover:bg-blue-700/40 transition">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-blue-800/95 backdrop-blur-md shadow-lg p-4 space-y-3">
                    <Link to="/" className="block text-white py-2 rounded-md hover:bg-blue-700/50 transition">Home</Link>
                    <button onClick={handleDisciplinesToggle} className="w-full text-left text-white py-2 rounded-md hover:bg-blue-700/50 transition flex justify-between items-center">Disciplines <svg className={`w-4 h-4 transform ${isDisciplinesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg></button>
                    {isDisciplinesOpen && (
                        <div className="pl-4 space-y-1">
                            <Link to="/figure-skating" className="block text-white py-1 hover:bg-blue-700/50 rounded-md transition">Kunstschaatsen</Link>
                            <Link to="/synchronized-skating" className="block text-white py-1 hover:bg-blue-700/50 rounded-md transition">Synchroonschaatsen</Link>
                            <Link to="/short-track" className="block text-white py-1 hover:bg-blue-700/50 rounded-md transition">Shorttrack</Link>
                        </div>
                    )}
                    <Link to="/schedule" className="block text-white py-2 rounded-md hover:bg-blue-700/50 transition">Weekrooster</Link>
                    <Link to="/calendar" className="block text-white py-2 rounded-md hover:bg-blue-700/50 transition">Kalender</Link>
                    <Link to="/news" className="block text-white py-2 rounded-md hover:bg-blue-700/50 transition">Clubnieuws</Link>
                    <Link to="/initiations" className="block text-white py-2 rounded-md hover:bg-blue-700/50 transition">Initiaties</Link>
                    <Link to="/contact" className="block text-white py-2 rounded-md hover:bg-blue-700/50 transition">Contact</Link>
                    <Link to="/policies" className="block text-white py-2 rounded-md hover:bg-blue-700/50 transition">Beleid</Link>
                    <Link to="/info" className="block text-white py-2 rounded-md hover:bg-blue-700/50 transition">Info</Link>
                    <LanguageSwitcher />
                </div>
            )}

            {submenu}
        </nav>
    );
}

export default Navbar;
