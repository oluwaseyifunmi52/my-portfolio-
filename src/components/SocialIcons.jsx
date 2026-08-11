import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaWhatsapp,
} from "react-icons/fa";

export default function SocialIcons() {
    return (
        <div className="social-icons">

            <a
                href="https://github.com/oluwaseyifunmi52"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
            >
                <FaGithub />
            </a>

            <a
                href="https://linkedin.com/in/oluwaseyi-abayomi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
            >
                <FaLinkedin />
            </a>

            <a
                href="mailto:oluwaseyifunmioluwadami@gmail.com"
                aria-label="Email"
            >
                <FaEnvelope />
            </a>

            <a
                href="https://wa.me/2347084640014"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
            >
                <FaWhatsapp />
            </a>

        </div>
    );
}