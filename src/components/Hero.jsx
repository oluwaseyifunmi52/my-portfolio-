import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaDownload,
    FaExternalLinkAlt,
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

                <h1 className="display">
                    Oluwaseyi <span>Abayomi Emmanuel</span>
                </h1>

                <h2>
                    Junior Full-Stack Web Developer
                    <span className="divider" aria-hidden="true">|</span>
                    React.js • Next.js • TypeScript • Node.js
                </h2>

                <p className="hero-description">
                    I build practical web applications with React.js and Next.js, alongside full-stack development
                    using Node.js, Express, and MongoDB.
                    Currently pursuing a BSc in Computer Science (University of the People) with a Full-Stack Web Developer
                    certificate from ClaspTek Coaching Limited. Open to remote and Ibadan-based opportunities.
                </p>

                <div className="hero-badges" aria-label="Key focus areas">
                    <span className="badge">Junior Full-Stack Developer</span>
                    <span className="badge">MERN Stack</span>
                    <span className="badge">Open to Work</span>
                </div>

                <div className="hero-buttons">
                    <a
                        href="#projects"
                        className="btn btn-primary"
                    >
                        View My Projects
                        <FaExternalLinkAlt aria-hidden="true" />
                    </a>

                    <a
                        href="https://github.com/oluwaseyifunmi52"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                    >
                        <FaGithub aria-hidden="true" /> GitHub
                    </a>

                    <a
                        href="#contact"
                        className="btn btn-secondary"
                    >
                        Contact Me
                    </a>

                    <a
                        href="/Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                    >
                        <FaDownload aria-hidden="true" /> Download CV
                    </a>
                </div>

                <div className="hero-socials" role="list" aria-label="Social links">
                    <a
                        href="https://github.com/oluwaseyifunmi52"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        role="listitem"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://linkedin.com/in/oluwaseyi-abayomi"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        role="listitem"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="mailto:oluwaseyifunmioluwadami@gmail.com"
                        aria-label="Email"
                        role="listitem"
                    >
                        <FaEnvelope />
                    </a>
                </div>

            </div>

            <div className="hero-image" aria-hidden="true">
                <img
                    src={profile}
                    alt=""
                />
            </div>
        </section>
    );
}
