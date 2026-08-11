import { useState } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import "../styles/Sidebar.css";

export default function Sidebar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

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
            <aside className={menuOpen ? "sidebar active" : "sidebar"}>
                <div className="logo">
                    <a href="#home" onClick={closeMenu}>Oluwaseyi</a>
                </div>

                <nav className="sidebar-nav" role="navigation" aria-label="Main navigation">
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
                        <FaDownload /> Download CV
                    </a>
                </div>
            </aside>

            <div className="menu-icon" onClick={toggleMenu}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
        </>
    );
}