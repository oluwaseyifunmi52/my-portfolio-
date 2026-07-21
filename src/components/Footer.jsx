import SocialIcons from "./SocialIcons";
import "../styles/footer.css";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">

            <div className="container">

                <h2>Oluwaseyi Abayomi</h2>

                <p>
                    Full Stack Developer specializing in React, Node.js, Express.js, MongoDB,
                    alongside Electrical Engineering and Solar Energy Solutions.
                </p>

                <SocialIcons />

                <p className="copyright">
                    &copy; {year} Oluwaseyi Abayomi. All Rights Reserved.
                </p>

            </div>

        </footer>
    );
}
