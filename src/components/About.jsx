import "../styles/about.css";
import profile from "../assets/dammy.jpeg";
import {FaDownload} from "react-icons/fa";

export default function About() {
    return (
        <section id="about" className="about">
            <div className="about-container">

                <div className="about-image">
                    <img
                        src={profile}
                        alt="Oluwaseyi Abayomi"
                    />
                </div>

                <div className="about-content">

                    <h5>ABOUT ME</h5>

                    <h2>
                        Full Stack Developer | Electrical & Solar Installation Specialist
                    </h2>
                    <p>
                        I'm <strong>Oluwaseyi Abayomi</strong>, a passionate
                        <strong> Full Stack Developer</strong>,
                        <strong> Electrical & </strong>, and
                        <strong> Solar Installation Specialist</strong> dedicated to creating
                        innovative digital products and reliable engineering solutions. I enjoy
                        transforming ideas into <strong>practical, user-friendly applications</strong>
                        while delivering dependable <strong>electrical</strong> and
                        <strong> renewable energy solutions</strong> that solve real-world problems.
                    </p>

                    <p>
                        My expertise spans the entire <strong>software development lifecycle</strong>—from
                        designing beautiful, responsive user interfaces with
                        <strong> React</strong> to building secure, scalable backend applications using
                        <strong> Node.js</strong>, <strong>Express.js</strong>, and
                        <strong> MongoDB</strong>. Alongside software development, I have hands-on
                        experience in <strong>electrical installations</strong>,
                        <strong> solar energy systems</strong>,
                        <strong> inverter installations</strong>,
                        <strong> maintenance</strong>,
                        <strong> troubleshooting</strong>, and
                        <strong> renewable energy solutions</strong>.
                    </p>

                    <p>
                        I believe <strong>technology and engineering</strong> work best when they
                        improve everyday life. Whether I'm developing a
                        <strong> modern web application</strong>, installing a
                        <strong> solar power system</strong>, or solving
                        <strong> complex technical challenges</strong>, I focus on
                        <strong> quality</strong>,
                        <strong> innovation</strong>,
                        <strong> continuous learning</strong>, and delivering
                        <strong> impactful solutions</strong> for individuals and businesses.
                    </p>

                    <div className="about-info">

                        <div>
                            <span>Name</span>
                            <p>Oluwaseyi Abayomi</p>
                        </div>

                        <div>
                            <span>Email</span>
                            <p>oluwaseyifunmioluwadami@gmail.com</p>
                        </div>

                        <div>
                            <span>Location</span>
                            <p>Nigeria</p>
                        </div>

                        <div>
                            <span>Specialization</span>
                            <p>
                                Full Stack Development, Electrical & Solar Energy
                            </p>
                        </div>

                    </div>

                     <div className="about-buttons">
                        <a href="#contact" className="primary-btn">
                            Hire Me
                        </a>
                       
                
                    </div> 

                </div> 

            </div> 

        </section>
    );
}