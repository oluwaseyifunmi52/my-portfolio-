import {
    FaLaptopCode,
    FaServer,
    FaMobileAlt,
    FaDatabase,
    FaCloud,
    FaTools,
    FaBolt,
    FaSolarPanel,
} from "react-icons/fa";

import "../styles/services.css";

const services = [
    {
        icon: <FaLaptopCode />,
        title: "Frontend Development",
        description:
            "Building modern, responsive, and interactive user interfaces using React, HTML5, CSS3, JavaScript, and Bootstrap to deliver exceptional user experiences.",
    },

    {
        icon: <FaServer />,
        title: "Backend Development",
        description:
            "Developing secure and scalable server-side applications with Node.js, Express.js, REST APIs, authentication, authorization, and business logic.",
    },

    {
        icon: <FaDatabase />,
        title: "Database Design",
        description:
            "Designing, managing, and optimizing MongoDB databases with efficient schemas, validation, indexing, and secure data management.",
    },

    {
        icon: <FaMobileAlt />,
        title: "Responsive Web Design",
        description:
            "Creating fast, responsive websites that provide seamless experiences across desktops, tablets, and mobile devices.",
    },

    {
        icon: <FaCloud />,
        title: "Deployment & Hosting",
        description:
            "Deploying and maintaining applications using Vercel, Render, MongoDB Atlas, GitHub, and secure production environments.",
    },

    {
        icon: <FaBolt />,
        title: "Electrical Installation",
        description:
            "Professional residential and commercial electrical installation, house wiring, fault diagnosis, electrical maintenance, and power distribution systems.",
    },

    {
        icon: <FaSolarPanel />,
        title: "Solar Energy Solutions",
        description:
            "Installation of solar panels, inverters, lithium battery systems, charge controllers, system maintenance, troubleshooting, and renewable energy solutions.",
    },

    {
        icon: <FaTools />,
        title: "Technical Support & Maintenance",
        description:
            "Providing software maintenance, debugging, performance optimization, electrical system servicing, and ongoing technical support for web and engineering projects.",
    },
];

export default function Services() {
    return (
        <section id="services" className="services">
            <div className="container">

                <div className="section-title">
                    <h2>MY SERVICES</h2>
                    <p>
                        I provide professional full-stack web development,
                        electrical engineering, and solar energy solutions.
                        From building modern web applications to delivering
                        reliable electrical installations and renewable energy
                        systems, I help individuals and businesses transform
                        ideas into dependable, high-quality solutions.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            className="service-card"
                            key={index}
                        >
                            <div className="service-icon">
                                {service.icon}
                            </div>

                            <h3>{service.title}</h3>

                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}