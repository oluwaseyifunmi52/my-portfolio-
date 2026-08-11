import "../styles/experience.css";

const experiences = [
    {
        role: "Full-Stack Web Developer (Project-Based)",
        company: "Self-Directed / Freelance",
        duration: "2025 — Present",
        location: "Ibadan, Nigeria (Remote)",
        description: [
            "Built and deployed 4+ full-stack MERN applications with authentication, role-based access, and production deployments on Vercel/Render.",
            "Designed REST APIs with Express.js, MongoDB/Mongoose, and PostgreSQL — including pagination, search, and JWT/refresh-token authentication.",
            "Implemented RBAC systems for multi-user platforms (students, teachers, parents, admins; patients, doctors, admins).",
            "Debugged and resolved CORS issues, deployment environment mismatches, and API integration challenges.",
            "Applied MVC architecture, middleware patterns, and error-handling strategies across backend services.",
        ],
        technologies: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "PostgreSQL", "JWT", "Vercel", "Render"],
    },
    {
        role: "Full-Stack Web Developer Certificate",
        company: "ClaspTek Coaching Limited",
        duration: "2025 — 2026",
        location: "Nigeria",
        description: [
            "Completed intensive full-stack web development training covering HTML5, CSS3, JavaScript (ES6+), React, Node.js, Express.js, MongoDB, Git, and GitHub.",
            "Built multiple capstone projects including REST APIs, authenticated applications, and deployed full-stack solutions.",
            "Learned modern development practices: component-based architecture, state management, API design, database modeling, and deployment workflows.",
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Git", "GitHub"],
    },
    {
        role: "BSc Computer Science (In Progress)",
        company: "University of the People",
        duration: "2026 — Present",
        location: "Online (Remote)",
        description: [
            "Studying software engineering, web development, database systems, networking, operating systems, data structures, algorithms, and modern programming concepts.",
            "Applying academic concepts directly to real-world project development.",
        ],
        technologies: ["Data Structures", "Algorithms", "Database Systems", "Networking", "Operating Systems"],
    },
    {
        role: "Electrical & Electronics Technician",
        company: "Independent / Contract Projects",
        duration: "2016 — 2024",
        location: "Ibadan, Nigeria",
        description: [
            "Installed, maintained, and repaired residential and commercial electrical systems — wiring, distribution boards, lighting, fault diagnosis, preventive maintenance, and safety compliance.",
            "Developed systematic troubleshooting methodology: isolate variables, trace root causes, implement fixes, verify results — directly transferable to software debugging.",
            "Managed client communication, project planning, and on-site delivery for electrical installations.",
        ],
        technologies: ["Electrical Systems", "Fault Diagnosis", "Preventive Maintenance", "Safety Compliance", "Client Management"],
    },
    {
        role: "Solar Installation Specialist",
        company: "Renewable Energy Projects",
        duration: "2016 — 2024",
        location: "Ibadan, Nigeria",
        description: [
            "Designed and installed solar PV systems, inverters, lithium battery banks, charge controllers, and backup power solutions for homes and businesses.",
            "Performed system testing, troubleshooting, maintenance, and energy optimization.",
            "Applied precision, safety standards, and quality workmanship — habits that now inform code quality and deployment reliability.",
        ],
        technologies: ["Solar PV", "Inverters", "Battery Systems", "Energy Optimization", "System Testing"],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="experience">
            <div className="container">

                <div className="section-title">
                    <h5>EXPERIENCE</h5>
                    <h2>Professional Journey</h2>
                    <p>
                        My experience combines hands-on full-stack development with 8+ years of technical field work.
                        The discipline, troubleshooting mindset, and client-facing experience from electrical and solar
                        engineering directly strengthen how I build software today.
                    </p>
                </div>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-dot"></div>

                            <div className="timeline-content">
                                <span className="duration">{exp.duration}</span>

                                <h3>{exp.role}</h3>

                                <h4>
                                    {exp.company}
                                    {exp.location && <span className="location"> • {exp.location}</span>}
                                </h4>

                                <ul className="experience-details">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>

                                <div className="experience-tech">
                                    {exp.technologies.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}