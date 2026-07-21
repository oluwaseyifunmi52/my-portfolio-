import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
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
                        Have a project or opportunity? Feel free
                        to contact me.
                    </p>

                </div>

                <div className="contact-container">

                    <div className="contact-info">

                        <div className="info-box">

                            <FaEnvelope />

                            <div>
                                <h4>Email</h4>
                                <p>oluwaseyifunmioluwadami@email.com</p>
                            </div>

                        </div>

                        <div className="info-box">

                            <FaPhoneAlt />

                            <div>
                                <h4>Phone</h4>
                                <p>+234 708 464 0014</p>
                            </div>

                        </div>

                        <div className="info-box">

                            <FaMapMarkerAlt />

                            <div>
                                <h4>Location</h4>
                                <p>Nigeria</p>
                            </div>

                        </div>

                    </div>

                    <ContactForm />

                </div>

            </div>

        </section>
    );
}