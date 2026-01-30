import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from "../hooks/useTranslation";

function Navbar() {
    // STATE 1: Mobile Hamburger Menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    // STATE 2: Desktop Popup Menu (Floating)
    const [desktopDisciplinesOpen, setDesktopDisciplinesOpen] = useState(false);
    
    // STATE 3: Mobile Accordion Menu (Inline)
    const [mobileDisciplinesOpen, setMobileDisciplinesOpen] = useState(false);

    const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
    
    const location = useLocation();
    
    // Refs for Desktop interactions only
    const desktopButtonRef = useRef(null);
    const submenuRef = useRef(null);
    
    const t = useTranslation();

    // Calculate position only for Desktop
    const updateDesktopPosition = () => {
        if (desktopButtonRef.current) {
            const rect = desktopButtonRef.current.getBoundingClientRect();
            setMenuPosition({
                top: rect.bottom, 
                left: rect.left
            });
        }
    };

    // Desktop: Handle resize/scroll for the floating popup
    useEffect(() => {
        if (desktopDisciplinesOpen) {
            updateDesktopPosition();
            window.addEventListener('resize', updateDesktopPosition);
            window.addEventListener('scroll', updateDesktopPosition); 
        }
        return () => {
            window.removeEventListener('resize', updateDesktopPosition);
            window.removeEventListener('scroll', updateDesktopPosition);
        };
    }, [desktopDisciplinesOpen]);

    // Desktop: Click outside to close
    useEffect(() => {
        const handleDocumentClick = (e) => {
            if (desktopButtonRef.current && !desktopButtonRef.current.contains(e.target) &&
                submenuRef.current && !submenuRef.current.contains(e.target)) {
                setDesktopDisciplinesOpen(false);
            }
        };
        document.addEventListener('mousedown', handleDocumentClick);
        return () => document.removeEventListener('mousedown', handleDocumentClick);
    }, []);

    // Reset all menus on route change
    useEffect(() => {
        setDesktopDisciplinesOpen(false);
        setMobileDisciplinesOpen(false);
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const handleDesktopToggle = () => {
        updateDesktopPosition();
        setDesktopDisciplinesOpen(!desktopDisciplinesOpen);
    };

    // This is the Desktop Popup Portal
    const desktopSubmenu = createPortal(
        <AnimatePresence>
            {desktopDisciplinesOpen && (
                <motion.ul
                    ref={submenuRef}
                    className="fixed w-48 bg-white/90 backdrop-blur-md rounded-xl shadow-xl overflow-hidden border border-blue-200"
                    style={{
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
            {/* CHANGED: Added 'gap-4' here. This forces space between Logo and Menu Button */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center gap-4">
                
                {/* Logo + Title */}
                <Link
                    to="/"
                    className="flex items-center space-x-3 flex-1 md:flex-none min-w-0"
                >
                    <img
                        src={`${import.meta.env.BASE_URL}IDALogo.jpg`}
                        alt="Ice Diamonds Logo"
                        className="h-12 md:h-16 w-auto rounded-md shadow-md flex-shrink-0"
                    />
                    <span className="text-lg md:text-2xl font-bold text-white drop-shadow-md whitespace-normal md:whitespace-nowrap leading-tight">
                        Ice Diamonds Antwerp
                    </span>
                </Link>

                {/* Desktop Menu (Hidden on Mobile) */}
                <div className="hidden md:flex items-center gap-6 w-full max-w-[1300px] justify-end">
                    <ul className="flex items-center text-white min-w-0 justify-end whitespace-nowrap flex-nowrap gap-3 xl:gap-4">
                        <li className="relative">
                            <button
                                ref={desktopButtonRef}
                                onClick={handleDesktopToggle}
                                className="hover:text-blue-200 transition flex items-center gap-1 whitespace-nowrap"
                            >
                                {t("nav_disciplines")}
                                <svg
                                    className={`w-4 h-4 transform ${desktopDisciplinesOpen ? 'rotate-180' : ''}`}
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
                        {/* <li><Link to="/news" className="hover:text-blue-200 transition whitespace-nowrap">{t("nav_news")}</Link></li> */}
                        <li><Link to="/initiations" className="hover:text-blue-200 transition whitespace-nowrap">{t("nav_initiations")}</Link></li>
                        <li><Link to="/team" className="hover:text-blue-200 transition whitespace-nowrap">{t("nav_team")}</Link></li>
                        <li><Link to="/contact" className="hover:text-blue-200 transition whitespace-nowrap">{t("nav_contact")}</Link></li>
                        <li><Link to="/policies" className="hover:text-blue-200 transition whitespace-nowrap">{t("nav_policies")}</Link></li>
                        <li><Link to="/info" className="hover:text-blue-200 transition whitespace-nowrap">{t("nav_info")}</Link></li>
                    </ul>

                    <div className="flex-shrink-0 ml-4">
                        <LanguageSwitcher />
                    </div>
                </div>

                {/* Mobile Menu Button (Hamburger) */}
                {/* CHANGED: Removed 'ml-2' because 'gap-4' on the parent handles the spacing now */}
                <div className="md:hidden flex-shrink-0">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2 rounded-md hover:bg-blue-700/40 transition">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-blue-800/95 backdrop-blur-md shadow-lg p-4 space-y-3 max-h-[80vh] overflow-y-auto">
                    {/* Mobile Disciplines Toggle (Inline Accordion) */}
                    <button 
                        onClick={() => setMobileDisciplinesOpen(!mobileDisciplinesOpen)} 
                        className="w-full text-left text-white py-2 rounded-md hover:bg-blue-700/50 transition flex justify-between items-center"
                    >
                        {t("nav_disciplines")} 
                        <svg className={`w-4 h-4 transform ${mobileDisciplinesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    
                    {/* Inline Submenu */}
                    {mobileDisciplinesOpen && (
                        <div className="pl-4 space-y-1 border-l-2 border-blue-400/30 ml-2">
                            <Link to="/figure-skating" className="block text-white py-2 px-2 hover:bg-blue-700/50 rounded-md transition">{t("nav_fs")}</Link>
                            <Link to="/short-track" className="block text-white py-2 px-2 hover:bg-blue-700/50 rounded-md transition">{t("nav_st")}</Link>
                        </div>
                    )}

                    <Link to="/schedule" className="block text-white py-2 rounded-md hover:bg-blue-700/50 transition">{t("nav_schedule")}</Link>
                    <Link to="/calendar" className="block text-white py-2 rounded-md hover:bg-blue-700/50 transition">{t("nav_calendar")}</Link>
                    {/* <Link to="/news" className="block text-white py-2 rounded-md hover:bg-blue-700/50 transition">{t("nav_news")}</Link> */}
                    <Link to="/initiations" className="block text-white py-2 rounded-md hover:bg-blue-700/50 transition">{t("nav_initiations")}</Link>
                    <Link to="/team" className="block text-white py-2 rounded-md hover:bg-blue-700/50 transition">{t("nav_team")}</Link>
                    <Link to="/contact" className="block text-white py-2 rounded-md hover:bg-blue-700/50 transition">{t("nav_contact")}</Link>
                    <Link to="/policies" className="block text-white py-2 rounded-md hover:bg-blue-700/50 transition">{t("nav_policies")}</Link>
                    <Link to="/info" className="block text-white py-2 rounded-md hover:bg-blue-700/50 transition">{t("nav_info")}</Link>
                    
                    <div className="pt-2 border-t border-blue-700">
                        <LanguageSwitcher />
                    </div>
                </div>
            )}

            {/* Render the Desktop Portal only */}
            {desktopSubmenu}
        </nav>
    );
}

export default Navbar;