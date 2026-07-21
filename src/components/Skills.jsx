import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaBootstrap,
} from "react-icons/fa";

import {
    SiExpress,
    SiMongodb,
    SiMysql,
    SiPostman,
    SiCloudinary,
    SiJsonwebtokens,
} from "react-icons/si";

import "../styles/skills.css";

const skills = [
    {
        title: "Frontend",
        items: [
            { icon: <FaHtml5 />, name: "HTML5" },
            { icon: <FaCss3Alt />, name: "CSS3" },
            { icon: <FaJs />, name: "JavaScript" },
            { icon: <FaReact />, name: "React.js" },
            { icon: <FaBootstrap />, name: "Bootstrap" },
        ],
    },
    {
        title: "Backend",
        items: [
            { icon: <FaNodeJs />, name: "Node.js" },
            { icon: <SiExpress />, name: "Express.js" },
            { icon: <SiJsonwebtokens />, name: "JWT" },
        ],
    },
    {
        title: "Database",
        items: [
            { icon: <SiMongodb />, name: "MongoDB" },
            { icon: <SiMysql />, name: "MySQL" },
        ],
    },
    {
        title: "Tools",
        items: [
            { icon: <FaGitAlt />, name: "Git" },
            { icon: <FaGithub />, name: "GitHub" },
            { icon: <SiPostman />, name: "Postman" },
            { icon: <SiCloudinary />, name: "Cloudinary" },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="container">

                <h5>MY SKILLS</h5>

                <h2>Technologies I Work With</h2>

                <p>
                    I build responsive, scalable, and secure web
                    applications using modern frontend and backend
                    technologies.
                </p>

                <div className="skills-grid">

                    {skills.map((category, index) => (
                        <div
                            className="skill-card"
                            key={index}
                        >
                            <h3>{category.title}</h3>

                            <div className="skill-items">

                                {category.items.map((skill, i) => (
                                    <div
                                        className="skill-item"
                                        key={i}
                                    >
                                        <span className="icon">
                                            {skill.icon}
                                        </span>

                                        <p>{skill.name}</p>
                                    </div>
                                ))}

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}