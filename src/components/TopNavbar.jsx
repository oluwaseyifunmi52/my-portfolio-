import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/TopNavbar.css";

export default function TopNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <header className="top-navbar">
                <div className="navbar-container">
                    <div className="navbar-brand">
                        <a href="#home" onClick={closeMenu}>Oluwaseyi</a>
                    </div>

                    <div className="navbar-actions">
                        <button
                            className="mobile-menu-toggle"
                            onClick={toggleMenu}
                            aria-expanded={menuOpen}
                            aria-controls="main-navigation"
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                        >
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </header>

            <div className="mobile-menu-overlay" onClick={closeMenu} aria-hidden="true" />
        </>
    );
}