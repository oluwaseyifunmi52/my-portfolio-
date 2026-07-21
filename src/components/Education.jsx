import "../styles/education.css";

const education = [

    
    {
        degree: "Bachelor of Science in Computer Science",
        school: "University of the People",
        duration: "2026 - Present",
        description:
            "Currently studying software engineering, web development, database systems, networking, operating systems, data structures, algorithms, and modern programming concepts.",
    },
    {
        degree: "Certificate in Full-Stack Web Development",
        school: "Clasptek Coaching Limited",
        duration: "2025 - 2026",
        description:
            "Successfully completed professional training in Full-Stack Web Development, gaining hands-on experience building responsive and scalable web applications using HTML5, CSS3, JavaScript (ES6+), React, Node.js, Express.js, MongoDB, Git, and GitHub. Developed practical projects covering frontend, backend, REST APIs, authentication, and modern web development best practices.",
    },

        {
            degree: "Bachelor of Engineering",
            school: "Lagos State University of Science and Technology (LASUSTECH)",
            duration: "2021 - 2024",
            description:
                "Studied electrical and electronics engineering with a focus on electrical systems, electronics, power engineering, control systems, digital electronics, telecommunications, and engineering project design.",
        },

        {
            degree: "National Technical Certificate (NTC) in Electrical Engineering",
            school: "Government Technical Science College, Ijebu-Ode, Ogun State",
            duration: "2016 - 2019",
            description:
                "Completed technical training in Electrical Engineering, gaining practical knowledge in electrical installation, wiring, electronics, electrical machines, industrial safety, and maintenance of electrical systems.",
        },
];


export default function Education() {
    return (
        <section id="education" className="education">
            <div className="container">

                <div className="section-title">
                    

                    <h2>Education & Learning</h2>

                    <p>
                        My academic background and continuous learning
                        journey in software development.
                    </p>
                </div>

                <div className="education-grid">

                    {education.map((item, index) => (
                        <div
                            className="education-card"
                            key={index}
                        >
                            <span className="education-year">
                                {item.duration}
                            </span>

                            <h3>{item.degree}</h3>

                            <h4>{item.school}</h4>

                            <p>{item.description}</p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}