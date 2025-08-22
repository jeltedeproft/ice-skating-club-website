import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDisciplinesOpen, setIsDisciplinesOpen] = useState(false);
    const location = useLocation();
    const disciplinesButtonRef = useRef(null);
    const submenuRef = useRef(null);

    useEffect(() => {
        const handleDocumentClick = (e) => {
            if (disciplinesButtonRef.current && !disciplinesButtonRef.current.contains(e.target) && submenuRef.current && !submenuRef.current.contains(e.target)) {
                setIsDisciplinesOpen(false);
            }
        };
        document.addEventListener('mousedown', handleDocumentClick);
        return () => {
            document.removeEventListener('mousedown', handleDocumentClick);
        };
    }, []);

    const handleDisciplinesToggle = () => {
        setIsDisciplinesOpen(!isDisciplinesOpen);
    };

    useEffect(() => {
        setIsDisciplinesOpen(false);
        setIsOpen(false);
    }, [location.pathname]);

    const submenu = createPortal(
        <AnimatePresence>
            {isDisciplinesOpen && (
                <motion.ul
                    ref={submenuRef}
                    className="fixed w-48 bg-blue-800 rounded-lg shadow-lg overflow-hidden"
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
                        <Link
                            to="/figure-skating"
                            className="block px-4 py-2 text-white hover:text-blue-200 hover:bg-blue-700/50 transition duration-200"
                        >
                            Kunstschaatsen
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/synchronized-skating"
                            className="block px-4 py-2 text-white hover:text-blue-200 hover:bg-blue-700/50 transition duration-200"
                        >
                            Synchroonschaatsen
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/short-track"
                            className="block px-4 py-2 text-white hover:text-blue-200 hover:bg-blue-700/50 transition duration-200"
                        >
                            Shorttrack
                        </Link>
                    </li>
                </motion.ul>
            )}
        </AnimatePresence>,
        document.body
    );


    return (
        <nav className="bg-blue-800/90 backdrop-blur-md shadow-lg z-50 relative">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* 🔹 Logo + Club Name */}
                <Link to="/" className="flex items-center space-x-2">
                    <img
                        src="/IDALogo.jpg"
                        alt="Ice Diamonds Logo"
                        className="h-10 w-auto rounded-lg shadow-md"
                    />
                    <span className="text-2xl font-extrabold text-white drop-shadow-md">
                        Ice Diamonds Antwerp
                    </span>
                </Link>

                {/* 🔹 Mobile menu button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                <ul className={`md:flex md:space-x-6 ${isOpen ? 'block' : 'hidden'} md:flex-row flex-col absolute md:static bg-blue-800/95 md:bg-transparent top-16 right-4 p-4 md:p-0 rounded-lg md:rounded-none shadow-md md:shadow-none z-40`}>
                    <li><Link to="/" className="block text-white hover:text-blue-200 transition duration-200 py-2 md:py-0">Home</Link></li>
                    <li className="relative">
                        <button ref={disciplinesButtonRef} onClick={handleDisciplinesToggle} className="block text-white hover:text-blue-200 transition duration-200 py-2 md:py-0 focus:outline-none">
                            Disciplines
                            <svg className={`w-4 h-4 inline ml-1 transform ${isDisciplinesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </li>
                    <li><Link to="/schedule" className="block text-white hover:text-blue-200 transition duration-200 py-2 md:py-0">Weekrooster</Link></li>
                    <li><Link to="/calendar" className="block text-white hover:text-blue-200 transition duration-200 py-2 md:py-0">Kalender</Link></li>
                    <li><Link to="/news" className="block text-white hover:text-blue-200 transition duration-200 py-2 md:py-0">Clubnieuws</Link></li>
                    <li><Link to="/initiations" className="block text-white hover:text-blue-200 transition duration-200 py-2 md:py-0">Initiaties</Link></li>
                    <li><Link to="/contact" className="block text-white hover:text-blue-200 transition duration-200 py-2 md:py-0">Contact</Link></li>
                    <li><Link to="/policies" className="block text-white hover:text-blue-200 transition duration-200 py-2 md:py-0">Beleid</Link></li>
                    <li><Link to="/info" className="block text-white hover:text-blue-200 transition duration-200 py-2 md:py-0">Info</Link></li>
                </ul>
            </div>
            {submenu}
        </nav>
    );
}

export default Navbar;