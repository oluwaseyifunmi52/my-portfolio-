import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaDatabase,
    FaCode,
    FaLock,
    FaNetworkWired,
    FaBug,
    FaMobileAlt,
    FaCogs,
    FaCloud,
    FaTerminal,
} from "react-icons/fa";

import {
    SiExpress,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiPostman,
    SiCloudinary,
    SiJsonwebtokens,
    SiTypescript,
    SiVite,
    SiTailwindcss,
    SiRender,
    SiVercel,
    SiLinux,
    SiNpm,
} from "react-icons/si";

import "../styles/skills.css";

const skills = [
    {
        title: "Frontend Development",
        items: [
            { icon: <FaHtml5 />, name: "HTML5" },
            { icon: <FaCss3Alt />, name: "CSS3" },
            { icon: <FaJs />, name: "JavaScript" },
            { icon: <SiTypescript />, name: "TypeScript" },
            { icon: <FaReact />, name: "React" },
            { icon: <SiVite />, name: "Vite" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        ],
    },
    {
        title: "Backend Development",
        items: [
            { icon: <FaNodeJs />, name: "Node.js" },
            { icon: <SiExpress />, name: "Express.js" },
            { icon: <FaNetworkWired />, name: "REST APIs" },
        ],
    },
    {
        title: "Database",
        items: [
            { icon: <SiMongodb />, name: "MongoDB" },
            { icon: <SiMongodb />, name: "Mongoose" },
            { icon: <SiPostgresql />, name: "PostgreSQL" },
            { icon: <SiMysql />, name: "MySQL" },
        ],
    },
    {
        title: "Authentication & Security",
        items: [
            { icon: <SiJsonwebtokens />, name: "JWT Authentication" },
            { icon: <FaLock />, name: "Refresh Tokens" },
            { icon: <FaLock />, name: "Role-Based Access Control" },
            { icon: <FaLock />, name: "Protected Routes" },
            { icon: <FaLock />, name: "API Security" },
        ],
    },
    {
        title: "Tools & Deployment",
        items: [
            { icon: <FaGitAlt />, name: "Git" },
            { icon: <FaGithub />, name: "GitHub" },
            { icon: <FaCode />, name: "VS Code" },
            { icon: <SiPostman />, name: "Postman" },
            { icon: <SiNpm />, name: "npm" },
            { icon: <SiLinux />, name: "Linux CLI" },
            { icon: <SiVercel />, name: "Vercel" },
            { icon: <SiRender />, name: "Render" },
            { icon: <SiCloudinary />, name: "Cloudinary" },
        ],
    },
    {
        title: "Development Concepts",
        items: [
            { icon: <FaCogs />, name: "MVC Architecture" },
            { icon: <FaNetworkWired />, name: "REST API Design" },
            { icon: <FaDatabase />, name: "Pagination & Search" },
            { icon: <FaMobileAlt />, name: "Responsive / Mobile-First" },
            { icon: <FaBug />, name: "Debugging & Troubleshooting" },
            { icon: <FaCogs />, name: "CORS Configuration" },
            { icon: <FaTerminal />, name: "Environment Configuration" },
            { icon: <FaCloud />, name: "Continuous Learning" },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="container">

                <div className="section-title">
                    <h5>TECHNICAL SKILLS</h5>
                    <h2>Technologies I Work With</h2>
                    <p>
                        I build responsive, secure, and deployable full-stack applications using modern JavaScript
                        technologies. Skills are grouped by domain — I use these daily in real projects.
                    </p>
                </div>

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