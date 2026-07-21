import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Sidebar.css";

export default function Sidebar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <aside className={menuOpen ? "sidebar active" : "sidebar"}>

                <div className="logo">
                    <a href="#home">Oluwaseyi</a>
                </div>

                <nav className="nav-links">
                    <a href="#home" onClick={closeMenu}>Home</a>
                    <a href="#about" onClick={closeMenu}>About</a>
                    <a href="#skills" onClick={closeMenu}>Skills</a>
                    <a href="#services" onClick={closeMenu}>Services</a>
                    <a href="#projects" onClick={closeMenu}>Projects</a>
                    <a href="#experience" onClick={closeMenu}>Experience</a>
                    <a href="#education" onClick={closeMenu}>Education</a>
                    <a href="#contact" onClick={closeMenu}>Contact</a>

                    <a
                        href="/Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-btn"
                        onClick={closeMenu}
                    >
                        View Software CV
                    </a>

                    <a
                        href="/Resume solar.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-btn"
                        onClick={closeMenu}
                    >
                        View Electrical & Solar CV
                    </a>
                </nav>

            </aside>

            <div className="menu-icon" onClick={toggleMenu}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
        </>
    );
}