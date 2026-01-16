import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from "../hooks/useTranslation";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDisciplinesOpen, setIsDisciplinesOpen] = useState(false);
    // We need state to store position so it updates if the window resizes
    const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
    
    const location = useLocation();
    const disciplinesButtonRef = useRef(null);
    const submenuRef = useRef(null);
    const t = useTranslation();

    // Helper to update position
    const updatePosition = () => {
        if (disciplinesButtonRef.current) {
            const rect = disciplinesButtonRef.current.getBoundingClientRect();
            setMenuPosition({
                top: rect.bottom, // No scrollY needed for fixed elements
                left: rect.left   // No scrollX needed for fixed elements
            });
        }
    };

    // Update position when opening
    useEffect(() => {
        if (isDisciplinesOpen) {
            updatePosition();
            // Optional: Close menu on scroll/resize to prevent misalignment
            window.addEventListener('resize', updatePosition);
            window.addEventListener('scroll', updatePosition); 
        }
        
        return () => {
            window.removeEventListener('resize', updatePosition);
            window.removeEventListener('scroll', updatePosition);
        };
    }, [isDisciplinesOpen]);

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

    const handleDisciplinesToggle = () => {
        // Calculate position *before* setting open state to avoid jump
        updatePosition();
        setIsDisciplinesOpen(!isDisciplinesOpen);
    };

    const submenu = createPortal(
        <AnimatePresence>
            {isDisciplinesOpen && (
                <motion.ul
                    ref={submenuRef}
                    className="fixed w-48 bg-white/90 backdrop-blur-md rounded-xl shadow-xl overflow-hidden border border-blue-200"
                    style={{
                        // Use the state-based position
                        top: menuPosition.top,
                        left: menuPosition.left,
                        zIndex: 9999,
                    }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                >
                    <li>
                        <Link to="/figure-skating" className="block px-4 py-2 text-blue-900 hover:bg-blue-100 transition rounded-md">{t("nav_fs")}</Link>
                    </li>
                    <li>
                        <Link to="/short-track" className="block px-4 py-2 text-blue-900 hover:bg-blue-100 transition rounded-md">{t("nav_st")}</Link>
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
                <Link
                    to="/"
                    className="flex items-center space-x-3 flex-shrink-0"
                >
                    <img
                        src={`${import.meta.env.BASE_URL}IDALogo.jpg`}
                        alt="Ice Diamonds Logo"
                        className="h-10 w-auto rounded-md shadow-md"
                    />
                    <span className="text-xl md:text-2xl font-bold text-white drop-shadow-md whitespace-nowrap">
                        Ice Diamonds Antwerp
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6 w-full max-w-[1300px] justify-end">

                    {/* MENU */}
                    <ul className="flex items-center text-white min-w-0 justify-end whitespace-nowrap flex-nowrap gap-3 xl:gap-4">
                        <li><Link to="/" className="hover:text-blue-200 transition">{t("nav_home")}</Link></li>

                        <li className="relative">
                            <button
                                ref={disciplinesButtonRef}
                                onClick={handleDisciplinesToggle}
                                className="hover:text-blue-200 transition flex items-center gap-1 whitespace-nowrap"
                            >
                                {t("nav_disciplines")}
                                <svg
                                    className={`w-4 h-4 transform ${isDisciplinesOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </li>

                        <li><Link to="/schedule" className="hover:text-blue-200 transition whitespace-nowrap">{t("nav_schedule")}</Link></li>
                        <li><Link to="/calendar" className="hover:text-blue-200 transition whitespace-nowrap">{t("nav_calendar")}</Link></li>
                        <li><Link to="/news" className="hover:text-blue-200 transition whitespace-nowrap">{t("nav_news")}</Link></li>
                        <li><Link to="/initiations" className="hover:text-blue-200 transition whitespace-nowrap">{t("nav_initiations")}</Link></li>
                        <li><Link to="/team" className="hover:text-blue-200 transition whitespace-nowrap">{t("nav_team")}</Link></li>
                        <li><Link to="/contact" className="hover:text-blue-200 transition whitespace-nowrap">{t("nav_contact")}</Link></li>
                        <li><Link to="/policies" className="hover:text-blue-200 transition whitespace-nowrap">{t("nav_policies")}</Link></li>
                        <li><Link to="/info" className="hover:text-blue-200 transition whitespace-nowrap">{t("nav_info")}</Link></li>
                    </ul>

                    {/* LANGUAGES */}
                    <div className="flex-shrink-0 ml-4">
                        <LanguageSwitcher />
                    </div>
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
                            <Link to="/short-track" className="block text-white py-1 hover:bg-blue-700/50 rounded-md transition">Shorttrack</Link>
                        </div>
                    )}
                    <Link to="/schedule" className="block text-white py-2 rounded-md hover:bg-blue-700/50 transition">{t("nav_schedule")}</Link>
                    <Link to="/calendar" className="block text-white py-2 rounded-md hover:bg-blue-700/50 transition">{t("nav_calendar")}</Link>
                    <Link to="/news" className="block text-white py-2 rounded-md hover:bg-blue-700/50 transition">{t("nav_news")}</Link>
                    <Link to="/initiations" className="block text-white py-2 rounded-md hover:bg-blue-700/50 transition">{t("nav_initiations")}</Link>
                    <Link to="/team" className="hover:text-blue-200 transition">{t("nav_team")}</Link>
                    <Link to="/contact" className="block text-white py-2 rounded-md hover:bg-blue-700/50 transition">{t("nav_contact")}</Link>
                    <Link to="/policies" className="block text-white py-2 rounded-md hover:bg-blue-700/50 transition">{t("nav_policies")}</Link>
                    <Link to="/info" className="block text-white py-2 rounded-md hover:bg-blue-700/50 transition">{t("nav_info")}</Link>
                    <LanguageSwitcher />
                </div>
            )}

            {submenu}
        </nav>
    );
}

export default Navbar;