import "../styles/about.css";
import profile from "../assets/dammy2.jpeg";
import { FaDownload, FaGithub, FaEnvelope } from "react-icons/fa";

export default function About() {
    return (
        <section id="about" className="about">
            <div className="about-container">

                <div className="about-image">
                    <img
                        src={profile}
                        alt="Oluwaseyi Abayomi Emmanuel"
                    />
                </div>

                <div className="about-content">

                    <h5>ABOUT ME</h5>

                    <h2>
                        Junior Full-Stack Developer Building Real Applications
                    </h2>

                    <p>
                        I'm <strong>Oluwaseyi Abayomi Emmanuel</strong>, a junior full-stack web developer based in
                        Ibadan, Nigeria. I build practical web applications using the MERN stack — React, Node.js,
                        Express, and MongoDB — with a focus on clean code, secure authentication, and deployable
                        solutions.
                    </p>

                    <p>
                        My path to software development wasn't traditional. Before writing code full-time, I spent
                        <strong>8+ years</strong> as an electrical and solar installation technician — wiring homes,
                        installing solar PV systems, diagnosing faults, and maintaining power systems for residential
                        and commercial clients.
                    </p>

                    <p>
                        That experience taught me how to <strong>troubleshoot under pressure</strong>, follow
                        <strong>technical procedures precisely</strong>, diagnose root causes systematically, and
                        deliver <strong>reliable results that people depend on daily</strong>. Those same habits —
                        attention to detail, logical problem-solving, safety-first thinking — now drive how I
                        approach software: write tests, handle errors gracefully, secure data, and ship code that
                        works in production.
                    </p>

                    <p>
                        Since transitioning to development, I've completed a <strong>Full-Stack Web Developer
                        certificate at ClaspTek Coaching Limited</strong> and am currently pursuing a <strong>BSc
                        in Computer Science at the University of the People</strong>. I've built and deployed
                        multiple full-stack applications including a school management platform, a hospital
                        management system, a voting application, and several backend APIs — all live and
                        accessible.
                    </p>

                    <p>
                        I'm <strong>open to junior full-stack, frontend, and backend roles</strong> (remote or
                        Ibadan-based), graduate programs, and freelance projects. I learn fast, communicate
                        clearly, and take ownership of the problems I solve.
                    </p>

                    <div className="about-info">

                        <div>
                            <span>Name</span>
                            <p>Oluwaseyi Abayomi Emmanuel</p>
                        </div>

                        <div>
                            <span>Email</span>
                            <p>oluwaseyifunmioluwadami@gmail.com</p>
                        </div>

                        <div>
                            <span>Location</span>
                            <p>Ibadan, Oyo State, Nigeria</p>
                        </div>

                        <div>
                            <span>Focus</span>
                            <p>MERN Stack • React • Node.js • MongoDB</p>
                        </div>

                        <div>
                            <span>Education</span>
                            <p>BSc Computer Science (in progress)</p>
                        </div>

                        <div>
                            <span>Certification</span>
                            <p>Full-Stack Web Developer — ClaspTek</p>
                        </div>

                    </div>

                    <div className="about-buttons">
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
                            href="/Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline"
                        >
                            <FaDownload /> Download CV
                        </a>

                        <a
                            href="mailto:oluwaseyifunmioluwadami@gmail.com"
                            className="btn-outline"
                        >
                            <FaEnvelope /> Hire Me
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
}