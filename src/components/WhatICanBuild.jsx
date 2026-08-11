import "../styles/whatICanBuild.css";

const capabilities = [
    {
        title: "Full-Stack MERN Applications",
        description: "End-to-end web applications with React frontend, Node.js/Express backend, and MongoDB database. Includes authentication, role-based access, and production deployment.",
        icon: "🏗️",
        examples: ["School management platforms", "Hospital management systems", "Voting applications", "E-commerce frontends"],
    },
    {
        title: "REST API Development",
        description: "Secure, well-structured REST APIs with Express.js, proper HTTP semantics, pagination, search, validation, and error handling. Supports MongoDB and PostgreSQL.",
        icon: "🔌",
        examples: ["Task Manager API", "Blog API with PostgreSQL", "URL Shortener with analytics", "Authentication services"],
    },
    {
        title: "Authentication & Authorization Systems",
        description: "JWT-based authentication with refresh-token rotation, httpOnly cookies, protected routes, middleware, and role-based access control (RBAC) for multi-user platforms.",
        icon: "🔐",
        examples: ["JWT + refresh token flows", "RBAC for 4+ user roles", "Protected API routes", "Secure cookie storage"],
    },
    {
        title: "Database Design & Modeling",
        description: "Schema design for MongoDB (Mongoose) and PostgreSQL — relationships, indexing, validation, virtual populations, and efficient query patterns for real-world data.",
        icon: "🗄️",
        examples: ["Academic term/assessment schemas", "Healthcare patient/doctor models", "E-commerce product/category relations", "Blog post/comment hierarchies"],
    },
    {
        title: "Responsive Frontend Development",
        description: "Mobile-first React interfaces with Vite, React Router, Tailwind CSS or vanilla CSS. Component-driven architecture, accessible markup, and cross-browser compatibility.",
        icon: "📱",
        examples: ["Admin dashboards with RBAC", "Public marketing pages", "Interactive quizzes/forms", "Data visualization components"],
    },
    {
        title: "Deployment & DevOps Basics",
        description: "Production deployment on Vercel (frontend) and Render (backend) with environment configuration, CORS handling, MongoDB Atlas, and build optimization.",
        icon: "🚀",
        examples: ["Vercel + Render deployments", "Environment variable management", "CORS debugging", "MongoDB Atlas integration"],
    },
];

export default function WhatICanBuild() {
    return (
        <section id="what-i-can-build" className="what-i-can-build">
            <div className="container">

                <div className="section-title">
                    <h5>WHAT I CAN BUILD</h5>
                    <h2>Core Capabilities</h2>
                    <p>
                        These are the types of projects and systems I can deliver from concept to production.
                        Each capability is backed by live, deployed projects in my portfolio.
                    </p>
                </div>

                <div className="capabilities-grid">
                    {capabilities.map((cap, index) => (
                        <div className="capability-card" key={index}>
                            <div className="capability-icon">{cap.icon}</div>
                            <h3>{cap.title}</h3>
                            <p>{cap.description}</p>
                            <ul className="capability-examples">
                                {cap.examples.map((ex, i) => (
                                    <li key={i}>{ex}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}