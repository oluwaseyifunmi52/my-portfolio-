import royalSchools from "../assets/royal.png";
import hospital from "../assets/portfolio.png";
import rhcm from "../assets/royal.png";
import voting from "../assets/online-voting.jpeg";
import sarahBeauty from "../assets/sarah.png";
import taskManager from "../assets/portfolio.png";
import blogApi from "../assets/portfolio.png";
import urlShortener from "../assets/portfolio.png";

const projects = [
    {
        id: "royal-schools",
        title: "Royal Higher Life Schools Platform",
        image: royalSchools,
        description:
            "A full-stack MERN school management platform with role-based access control for students, teachers, parents, and administrators. Features JWT authentication with refresh tokens, academic term management, assessments, assignments, meetings, learning resources, and admission workflows.",
        problem: "Schools needed a unified digital platform to manage academic operations, communication, and records across multiple user roles with secure access control.",
        solution: "Built a complete MERN stack application with role-based dashboards, JWT/refresh-token authentication, and comprehensive academic management features.",
        keyFeatures: [
            "Role-based access control (Student, Teacher, Parent, Admin)",
            "JWT authentication with refresh-token rotation",
            "Academic term, assessment, and grading structure",
            "Assignments, meetings, and learning resources modules",
            "Admission application and management workflow",
            "MongoDB/Mongoose data modeling for complex relationships",
        ],
        technologies: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "JWT",
            "Refresh Tokens",
            "RBAC",
        ],
        myContribution: "Full-stack development — designed database schema, built REST APIs, implemented authentication/authorization, developed all frontend dashboards, and deployed to production.",
        challenges: [
            "Designing RBAC for four distinct user types with overlapping permissions",
            "Implementing secure refresh-token rotation without UX disruption",
            "Modeling complex academic data relationships in MongoDB",
        ],
        solutions: [
            "Created middleware-based permission system with role hierarchies",
            "Used httpOnly cookies for refresh tokens with automatic silent renewal",
            "Designed Mongoose schemas with references and virtual populations",
        ],
        github: "https://github.com/oluwaseyifunmi52/royal-higherlife-schools",
        demo: "https://royal-higherlife-schools-v2-rgmd.vercel.app",
        featured: true,
    },

    {
        id: "hospital-management",
        title: "Hospital Management System",
        image: hospital,
        description:
            "A full-stack hospital management web application built with the MERN stack. Includes patient management, doctor scheduling, appointment booking, medical records, and administrative dashboards.",
        problem: "Healthcare facilities needed a digital system to manage patient flow, appointments, and medical records efficiently.",
        solution: "Developed a MERN stack application with role-based access for patients, doctors, and administrators, featuring appointment scheduling and record management.",
        keyFeatures: [
            "Patient registration and medical records management",
            "Doctor scheduling and appointment booking system",
            "Role-based dashboards for patients, doctors, and admins",
            "Secure authentication and data protection",
            "MongoDB data modeling for healthcare workflows",
        ],
        technologies: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "JWT Authentication",
        ],
        myContribution: "Full-stack development — API design, database modeling, frontend implementation, authentication, and deployment.",
        challenges: [
            "Managing complex appointment scheduling logic",
            "Ensuring patient data privacy and security",
        ],
        solutions: [
            "Implemented time-slot based scheduling with conflict detection",
            "Used JWT with role-based route protection and data encryption",
        ],
        github: "https://github.com/oluwaseyifunmi52/hospital-management-system",
        demo: "https://hospital-management-system-514x.vercel.app",
        featured: true,
    },

    {
        id: "rhcm",
        title: "Royal Higher Life Christian Ministries",
        image: rhcm,
        description:
            "A React/Vite web application for a Christian ministry organization. Features responsive design, routing for multiple pages, event listings, sermon archives, and ministry information.",
        problem: "The ministry needed a modern web presence to share events, sermons, and connect with their community online.",
        solution: "Built a responsive React SPA with Vite, React Router for navigation, and a clean component architecture.",
        keyFeatures: [
            "Multi-page layout with React Router",
            "Responsive design for all devices",
            "Event and sermon content sections",
            "Ministry information and contact pages",
            "Optimized Vite build for production",
        ],
        technologies: ["React", "Vite", "React Router", "CSS3", "Responsive Design"],
        myContribution: "Frontend development — component architecture, routing, responsive styling, and deployment.",
        challenges: ["Creating a maintainable component structure with vanilla CSS"],
        solutions: ["Organized components by feature, used CSS custom properties for theming"],
        github: "https://github.com/oluwaseyifunmi52/royal-higher-life-ministries",
        demo: "https://royal-higher-life-ag25.vercel.app",
        featured: true,
    },

    {
        id: "online-voting",
        title: "Online Voting Application",
        image: voting,
        description:
            "A MERN-based voting platform with backend API development, authentication/authorization, data modeling, and deployment. Features election management, candidate registration, secure voting, and results tabulation.",
        problem: "Organizations needed a secure, transparent digital voting system for elections and polls.",
        solution: "Built a full-stack voting platform with REST API, JWT authentication, role-based access, and secure vote recording.",
        keyFeatures: [
            "Backend REST API with Express.js and MongoDB",
            "JWT authentication and authorization",
            "Election and candidate management",
            "Secure vote casting and duplicate prevention",
            "Results calculation and display",
            "CORS configuration and deployment troubleshooting",
        ],
        technologies: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "JWT",
        ],
        myContribution: "Full-stack development — API design, authentication system, data modeling, debugging CORS issues, and production deployment.",
        challenges: [
            "CORS configuration for cross-origin API requests",
            "Preventing duplicate votes while maintaining voter privacy",
            "Debugging deployment environment variables",
        ],
        solutions: [
            "Configured Express CORS middleware with proper origins",
            "Implemented vote tracking with hashed identifiers",
            "Resolved environment-specific configuration issues",
        ],
        github: "https://github.com/oluwaseyifunmi52/online-voting-app",
        demo: "https://online-voting-app.vercel.app",
        featured: true,
    },

    {
        id: "sarah-beauty",
        title: "Sarah Beauty Store",
        image: sarahBeauty,
        description:
            "A React e-commerce frontend for a beauty products store. Features product presentation, a skin-type quiz with scoring logic, responsive design, and clean frontend architecture.",
        problem: "Beauty brand needed an engaging product showcase with personalized recommendations based on skin type.",
        solution: "Developed a React e-commerce frontend with interactive skin-type quiz, product catalog, and responsive design.",
        keyFeatures: [
            "Product catalog with category filtering",
            "Interactive skin-type quiz with scoring algorithm",
            "Personalized product recommendations",
            "Responsive design for mobile and desktop",
            "Clean component architecture and state management",
        ],
        technologies: ["React", "JavaScript (ES6+)", "CSS3", "Responsive Design"],
        myContribution: "Frontend development — quiz logic, product components, responsive styling, and deployment.",
        challenges: ["Implementing scoring logic for skin-type quiz", "Managing quiz state across multiple steps"],
        solutions: ["Created reusable quiz hook with reducer pattern", "Used React Context for quiz state management"],
        github: "https://github.com/oluwaseyifunmi52/sarah-beauty-store",
        demo: "https://sarah-beauty-store.vercel.app",
        featured: false,
    },

    {
        id: "task-manager-api",
        title: "Task Manager REST API",
        image: taskManager,
        description:
            "A Node.js/Express REST API for task management with JWT authentication, CRUD operations, pagination, search, and MVC architecture.",
        problem: "Needed a robust backend API for task management applications with proper authentication and data organization.",
        solution: "Built a RESTful API with Express.js, MongoDB, JWT authentication, and clean MVC structure.",
        keyFeatures: [
            "RESTful API design with proper HTTP status codes",
            "JWT authentication with protected routes",
            "Full CRUD operations for tasks",
            "Pagination and search functionality",
            "MVC architecture for maintainability",
            "Input validation and error handling",
        ],
        technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
        myContribution: "Backend development — API design, authentication, database modeling, validation, and documentation.",
        challenges: ["Structuring MVC architecture in Express", "Implementing efficient pagination and search"],
        solutions: ["Organized routes, controllers, models, and middleware separately", "Used Mongoose query helpers for pagination"],
        github: "https://github.com/oluwaseyifunmi52/task-manager-api",
        demo: "",
        featured: false,
    },

    {
        id: "blog-api",
        title: "Blog API",
        image: blogApi,
        description:
            "A REST API for a blogging platform with PostgreSQL, JWT authentication, CRUD operations, pagination, and search functionality.",
        problem: "Needed a backend API for a blog platform with relational data modeling and secure authentication.",
        solution: "Developed a REST API with Express.js, PostgreSQL, and JWT authentication following REST conventions.",
        keyFeatures: [
            "PostgreSQL database with relational schema design",
            "JWT authentication and authorization",
            "CRUD operations for posts, categories, comments",
            "Pagination, filtering, and search",
            "Role-based access control (author, admin)",
        ],
        technologies: ["Node.js", "Express.js", "PostgreSQL", "JWT", "REST API"],
        myContribution: "Backend development — PostgreSQL schema design, API endpoints, authentication, and query optimization.",
        challenges: ["Relational schema design for blog content", "Complex queries with joins for nested comments"],
        solutions: ["Designed normalized tables with foreign keys", "Used parameterized queries for security and performance"],
        github: "https://github.com/oluwaseyifunmi52/blog-api",
        demo: "",
        featured: false,
    },

    {
        id: "url-shortener",
        title: "URL Shortener Service",
        image: urlShortener,
        description:
            "A URL shortener service with click tracking, analytics, and REST API design. Built with Node.js, Express.js, and MongoDB.",
        problem: "Needed a service to create short URLs with tracking capabilities for marketing and analytics.",
        solution: "Built a URL shortening service with unique slug generation, click analytics, and RESTful endpoints.",
        keyFeatures: [
            "Short URL generation with custom slugs",
            "Click tracking and basic analytics",
            "RESTful API design",
            "MongoDB for URL storage and analytics",
            "Redirect handling with proper HTTP codes",
        ],
        technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST API"],
        myContribution: "Backend development — API design, slug generation algorithm, click tracking, and database indexing.",
        challenges: ["Generating collision-resistant short slugs", "Efficient click tracking without performance impact"],
        solutions: ["Used base62 encoding with timestamp entropy", "Asynchronous analytics writes with MongoDB indexes"],
        github: "https://github.com/oluwaseyifunmi52/url-shortener",
        demo: "",
        featured: false,
    },
];

export default projects;