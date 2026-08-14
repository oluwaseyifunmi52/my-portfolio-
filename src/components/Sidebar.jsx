import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaFilePdf } from "react-icons/fa";
import "../styles/Sidebar.css";

export default function Sidebar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const closeMenu = () => setMenuOpen(false);

    useEffect(() => {
        const handleCloseMenus = () => closeMenu();
        window.addEventListener("close-mobile-menus", handleCloseMenus);
        return () => window.removeEventListener("close-mobile-menus", handleCloseMenus);
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
            closeMenu();
        }
    };

    useEffect(() => {
        if (menuOpen) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
            document.body.classList.add("sidebar-open");
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
            document.body.classList.remove("sidebar-open");
        };
    }, [menuOpen]);

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#what-i-can-build", label: "What I Can Build" },
        { href: "#projects", label: "Projects" },
        { href: "#development-approach", label: "Development Approach" },
        { href: "#experience", label: "Experience" },
        { href: "#education", label: "Education" },
        { href: "#github", label: "GitHub" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <>
            {/* Desktop Sidebar - always visible on desktop */}
            <aside className="sidebar desktop-sidebar" role="navigation" aria-label="Main navigation">
                <div className="logo">
                    <a href="#home" onClick={closeMenu}>
                        Oluwaseyi
                    </a>
                </div>

                <nav className="sidebar-nav">
                    <ul className="sidebar-nav-list">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} onClick={closeMenu}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="sidebar-bottom">
                    <a
                        href="/Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-btn"
                        onClick={closeMenu}
                    >
                        <FaFilePdf />
                        Open CV
                    </a>
                </div>
            </aside>

            {/* Mobile hamburger button - only visible on mobile */}
            <button
                type="button"
                className="mobile-hamburger"
                onClick={toggleMenu}
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-sidebar"
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile sidebar drawer - always rendered, controlled by CSS class */}
            <div
                className={`sidebar-overlay ${menuOpen ? "active" : ""}`}
                onClick={closeMenu}
                aria-hidden="true"
            />
            <aside
                id="mobile-sidebar"
                className={`sidebar mobile-sidebar ${menuOpen ? "open" : ""}`}
                role="navigation"
                aria-label="Mobile navigation"
            >
                <div className="logo">
                    <a href="#home" onClick={closeMenu}>
                        Oluwaseyi
                    </a>
                </div>

                <nav className="sidebar-nav">
                    <ul className="sidebar-nav-list">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} onClick={closeMenu}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="sidebar-bottom">
                    <a
                        href="/Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-btn"
                        onClick={closeMenu}
                    >
                        <FaFilePdf />
                        Open CV
                    </a>
                </div>
            </aside>
        </>
    );
}