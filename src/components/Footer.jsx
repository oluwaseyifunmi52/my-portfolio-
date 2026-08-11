import SocialIcons from "./SocialIcons";
import "../styles/footer.css";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">

            <div className="container">

                <div className="footer-main">

                    <div className="footer-brand">
                        <h2>Oluwaseyi Abayomi Emmanuel</h2>
                        <p>
                            Junior Full-Stack Web Developer • MERN Stack • Building practical, deployable applications.
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-link-group">
                            <h4>Navigation</h4>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#experience">Experience</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-link-group">
                            <h4>Resources</h4>
                            <ul>
                                <li><a href="https://github.com/oluwaseyifunmi52" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                                <li><a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Download CV</a></li>
                                <li><a href="mailto:oluwaseyifunmioluwadami@gmail.com">Email Me</a></li>
                            </ul>
                        </div>

                        <div className="footer-link-group">
                            <h4>Featured Projects</h4>
                            <ul>
                                <li><a href="https://royal-higherlife-schools-v2-rgmd.vercel.app" target="_blank" rel="noopener noreferrer">Royal Higher Life Schools</a></li>
                                <li><a href="https://hospital-management-system-514x.vercel.app" target="_blank" rel="noopener noreferrer">Hospital Management System</a></li>
                                <li><a href="https://royal-higher-life-ag25.vercel.app" target="_blank" rel="noopener noreferrer">Royal Higher Life Ministries</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="footer-bottom">
                    <SocialIcons />
                    <p className="copyright">
                        &copy; {year} Oluwaseyi Abayomi Emmanuel. All Rights Reserved.
                    </p>
                </div>

            </div>

        </footer>
    );
}