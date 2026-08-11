import {
    FaEnvelope,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

import ContactForm from "./ContactForm";
import "../styles/contact.css";

export default function Contact() {
    return (
        <section id="contact" className="contact">

            <div className="container">

                <div className="section-title">

                    <h5>CONTACT</h5>

                    <h2>Let's Work Together</h2>

                    <p>
                        Open to junior developer roles, graduate opportunities, freelance projects, and collaborations.
                        Based in Ibadan, Nigeria — available for remote work worldwide.
                    </p>

                </div>

                <div className="contact-container">

                    <div className="contact-info">

                        <div className="info-box">

                            <FaEnvelope />

                            <div>
                                <h4>Email</h4>
                                <p>oluwaseyifunmioluwadami@gmail.com</p>
                            </div>

                        </div>

                        <div className="info-box">

                            <FaMapMarkerAlt />

                            <div>
                                <h4>Location</h4>
                                <p>Ibadan, Oyo State, Nigeria</p>
                            </div>

                        </div>

                        <div className="info-box">

                            <FaGithub />

                            <div>
                                <h4>GitHub</h4>
                                <p>github.com/oluwaseyifunmi52</p>
                            </div>

                        </div>

                        <div className="info-box">

                            <FaLinkedin />

                            <div>
                                <h4>X</h4>
                                <p>X (Twitter): @oluwaseyif41193</p>
                            </div>

                        </div>

                    </div>

                    <ContactForm />

                </div>

            </div>

        </section>
    );
}