import {
    FaGithub,
     FaLinkedin,
     FaInstagram,
    FaFacebook,
    FaEnvelope,   
    FaWhatsapp,   
} from "react-icons/fa";

export default function SocialIcons() {
    return (
        <div className="social-icons">

            <a
                href="https://github.com/oluwaseyifunmi52"
                target="_blank"
                rel="noreferrer"
            >
                <FaGithub />
            </a>

              <a
        href="mailto:oluwaseyifunmioluwadami@gmail.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Email"
    >
        <FaEnvelope />
    </a>

    <a
        href="https://wa.me/2347064840014"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
    >
        <FaWhatsapp />
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

            {/* <a
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noreferrer"
            >
                <FaFacebook />
            </a> */}

        </div>
    );
}