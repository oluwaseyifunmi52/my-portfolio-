import "../styles/experience.css";


    const experiences = [
    {
        role: "Full Stack Developer",
        company: "Royal Higher Life Ministries",
        duration: "2026 - Present",
        description:
            "Designed and developed a full-stack church management platform using React, Node.js, Express.js, and MongoDB. Implemented secure authentication, online donations, event management, sermon uploads, Cloudinary integration, email notifications, and an administrative dashboard with role-based access control.",
    },

    {
        role: "MERN Stack Developer",
        company: "Online Voting System",
        duration: "2026",
        description:
            "Developed a secure online voting application with React, Express.js, MongoDB Atlas, and JWT authentication. Built election management features, vote tracking, candidate management, and an intuitive administrative dashboard.",
    },

    {
        role: "Frontend Developer",
        company: "Personal Portfolio Website",
        duration: "2026",
        description:
            "Designed and built a modern portfolio website showcasing my software engineering projects, technical skills, education, and professional experience using React, JavaScript, CSS, and responsive design principles.",
    },

    {
        role: "Electrical & Electronics Technician",
        company: "Independent / Contract Projects",
        duration: "2016 - Present",
        description:
            "Installed, maintained, and repaired residential and commercial electrical systems, including electrical wiring, distribution boards, lighting systems, fault diagnosis, preventive maintenance, and electrical safety compliance.",
    },

    {
        role: "Solar Installation Specialist",
        company: "Renewable Energy Projects",
        duration: "2018 - Present",
        description:
            "Designed and installed solar power systems, inverters, lithium battery banks, charge controllers, and backup power solutions for homes and businesses. Performed system testing, troubleshooting, maintenance, and energy optimization.",
    },
];


export default function Experience() {
    return (
        <section id="experience" className="experience">
            <div className="container">

              
                <div className="section-title">
                    <h5>EXPERIENCE</h5>

                    <h2>Professional Experience</h2>

                    <p>
                        My experience combines software engineering, electrical engineering,
                        and renewable energy solutions. Through hands-on projects and
                        continuous learning, I have developed the technical expertise to
                        build modern web applications, reliable electrical systems, and
                        efficient solar power solutions that solve real-world problems.
                    </p>
                </div>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-dot"></div>

                            <div className="timeline-content">
                                <span className="duration">{exp.duration}</span>

                                <h3>{exp.role}</h3>

                                <h4>{exp.company}</h4>

                                <p>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

              
                <div className="section-title" style={{ marginTop: "80px" }}>
                    
                    <h2>Challenges & Lessons Learned</h2>

                    <p>
                        Every project has been an opportunity to learn, improve,
                        and become a better developer. The challenges I've faced
                        have strengthened my technical skills, problem-solving
                        abilities, and confidence in building modern web
                        applications.
                    </p>
                </div>

                <div className="journey-grid">

                    <div className="journey-card">
                        <h3>💻 Frontend & Backend Integration</h3>
                        <p>
                            Successfully connected React applications with
                            Express.js APIs while managing authentication,
                            routing, state management, and data flow between
                            frontend and backend.
                        </p>
                    </div>

                    <div className="journey-card">
                        <h3>🗄️ Database & API Development</h3>
                        <p>
                            Built RESTful APIs, integrated MongoDB Atlas,
                            implemented JWT authentication, and learned how to
                            design secure and scalable backend systems.
                        </p>
                    </div>

                    <div className="journey-card">
                        <h3>🚀 Deployment & DevOps</h3>
                        <p>
                            Deployed applications using Vercel and Render while
                            solving CORS issues, configuring environment
                            variables, and optimizing production builds.
                        </p>
                    </div>

                    <div className="journey-card">
                        <h3>📚 Continuous Learning</h3>
                        <p>
                            Continuously improving my skills by learning modern
                            technologies, exploring best practices, and building
                            real-world projects that strengthen my experience as
                            a Full Stack Developer.
                        </p>
                    </div>

                    <div className="journey-card">
                           <h3>⚡ Electrical & Solar Projects</h3>

                         <p>
                             Working on electrical installations and solar energy systems
                              strengthened my practical problem-solving skills, attention to
                              detail, safety awareness, and ability to deliver dependable
                             engineering solutions for residential and commercial clients.
                         </p>
                    </div>
                    
                    <div className="journey-card">
                       <h3>🤝 Client Communication</h3>

                        <p>
                       Collaborating with clients and understanding their requirements
                       has improved my communication, project planning, and ability to
                       deliver solutions that meet both technical and business needs.
                       </p>
                    </div>
                </div>

                <div className="lessons">
                    <h2>Key Lessons Learned</h2>

                    <ul>
                        <li>✔ Continuous learning is the foundation of success in software development, electrical engineering, and renewable energy.</li>

                        <li>✔ Writing clean, maintainable, and scalable code leads to reliable software solutions and easier long-term maintenance.</li>

                        <li>✔ Effective debugging and analytical thinking are essential for solving complex software bugs as well as electrical and solar system faults.</li>

                        <li>✔ Security, performance, and reliability should be prioritized when developing web applications and designing electrical systems.</li>

                        <li>✔ Safety standards, precision, and quality workmanship are critical in every electrical installation and solar energy project.</li>

                        <li>✔ Understanding client requirements and maintaining clear communication helps deliver successful software, electrical, and renewable energy solutions.</li>

                        <li>✔ Teamwork, collaboration, and continuous improvement are key to delivering projects efficiently and professionally.</li>

                        <li>✔ Combining software engineering with electrical and solar expertise creates innovative solutions that solve real-world challenges.</li>

                        <li>✔ Every project—whether a web application, electrical installation, or solar power system—is an opportunity to learn, grow, and improve professionally.</li>
                    </ul>
                </div>
               

            </div>
        </section>
    );
}