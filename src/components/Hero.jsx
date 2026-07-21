import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaEnvelope,
} from "react-icons/fa";

import "../styles/hero.css";
import profile from "../assets/dammy.jpeg";

export default function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-content">

                <p className="hero-greeting">
                    👋 Hello, I'm
                </p>

                <h1>
                    Abayomi <span>Oluwaseyi</span>
                </h1>

                <h2>
                    Full Stack Developer | Electrical & Electronics Engineer | Solar Installation Specialist
                </h2>

                
                    <p className="hero-description">
                        I design and develop modern, responsive, and scalable web
                        applications using React, Node.js, Express.js, MongoDB, and
                        JavaScript. Beyond software development, I specialize in
                        electrical engineering and solar energy solutions, combining
                        technology and innovation to build reliable digital and
                        real-world systems that solve everyday challenges.
                    </p>
                

                <div className="hero-buttons">
                    <a
                        href="#contact"
                        className="btn-primary"
                    >
                        Hire Me
                    </a>

                    <a
                        href="/Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                    >
                        View Software CV
                    </a>

                    <a
                        href="/Resume solar.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                    >
                        View Electrical & Solar CV
                    </a>
                </div>

                <div className="hero-socials">
                    <a
                        href="https://github.com/oluwaseyifunmi52"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub />
                    </a>

                    {/* <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin />
                    </a> */}

                    {/* <a
                        href="https://instagram.com/yourusername"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaInstagram />
                    </a> */}

                    <a href="mailto:oluwaseyifunmioluwadami@gmail.com">
                        <FaEnvelope />
                    </a>
                </div>

            </div>

            <div className="hero-image">
                <img
                    src={profile}
                    alt="Oluwaseyi Abayomi"
                />
            </div>
        </section>
    );
}