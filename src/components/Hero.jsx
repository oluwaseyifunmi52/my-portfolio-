import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaDownload,
} from "react-icons/fa";

import "../styles/hero.css";
import profile from "../assets/dammy.jpeg";

export default function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-content">

                <p className="hero-greeting">
                    Hello, I'm
                </p>

                <h1>
                    Oluwaseyi <span>Abayomi Emmanuel</span>
                </h1>

                <h2>
                    Junior Full-Stack Web Developer <span className="divider">|</span> JavaScript / MERN Stack
                </h2>

                <p className="hero-description">
                    I build practical, full-stack web applications using React, Node.js, Express, and MongoDB.
                    Currently pursuing a BSc in Computer Science (University of the People) with a Full-Stack Web Developer
                    certificate from ClaspTek Coaching Limited. Open to remote and Ibadan-based opportunities.
                </p>

                <div className="hero-badges">
                    <span className="badge">Junior Full-Stack Developer</span>
                    <span className="badge">MERN Stack</span>
                    <span className="badge">React & Node.js</span>
                    <span className="badge">Open to Work</span>
                </div>

                <div className="hero-buttons">
                    <a
                        href="#projects"
                        className="btn-primary"
                    >
                        View My Projects
                    </a>

                    <a
                        href="https://github.com/oluwaseyifunmi52"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                    >
                        <FaGithub /> GitHub
                    </a>

                    <a
                        href="#contact"
                        className="btn-secondary"
                    >
                        Contact Me
                    </a>

                    <a
                        href="/Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                    >
                        <FaDownload /> Download CV
                    </a>
                </div>

                <div className="hero-socials">
                    <a
                        href="https://github.com/oluwaseyifunmi52"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://X (Twitter): @oluwaseyif41193"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>

                    <a href="mailto:oluwaseyifunmioluwadami@gmail.com" aria-label="Email">
                        <FaEnvelope />
                    </a>
                </div>

            </div>

            <div className="hero-image">
                <img
                    src={profile}
                    alt="Oluwaseyi Abayomi Emmanuel"
                />
            </div>
        </section>
    );
}