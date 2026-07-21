import royal from "../assets/royal.png";
import voting from "../assets/online-voting.jpeg";

import portfolio from "../assets/portfolio.png";
import solar from "../assets/solar.jpeg";
import electrical from "../assets/electrical.jpeg";
import installation from "../assets/installation.mp4";

const projects = [
    {
        id: "royal",
        title: "Royal Higher Life Ministries",
        image: royal,
        description:
            "A full-stack church management system with user authentication, donations, event management, sermons, gallery, and an administrative dashboard.",
        technologies:
            "React • Node.js • Express.js • MongoDB • JWT",
        github: "https://github.com/yourusername/royal",
        demo: "https://royal.vercel.app",
    },

    {
        id: "voting",
        title: "Online Voting System",
        image: voting,
        description:
            "A secure online voting platform featuring role-based authentication, election management, vote tracking, and an administrator dashboard.",
        technologies:
            "React • Express.js • MongoDB",
        github: "https://github.com/yourusername/voting",
        demo: "https://voting.vercel.app",
    },

    {
        id: "portfolio",
        title: "Personal Portfolio",
        image: portfolio,
        description:
            "A modern responsive portfolio showcasing my skills, projects, engineering experience, and professional services.",
        technologies:
            "React • JavaScript • CSS",
        github: "https://github.com/yourusername/portfolio",
        demo: "https://portfolio.vercel.app",
    },

    {
        id: "solar",
        title: "Solar Power Installation",
        image: solar,
        description:
            "Designed and installed residential and commercial solar power systems including solar panels, inverters, batteries, charge controllers, and electrical protection devices.",
        technologies:
            "Solar PV • Inverters • Batteries • Electrical Wiring",
        github: "",
        demo: "",
    },

    {
        id: "electrical",
        title: "Electrical Installation",
        image: electrical,
        description:
            "Completed electrical wiring for residential and commercial buildings, including lighting systems, sockets, distribution boards, and electrical maintenance.",
        technologies:
            "Electrical Wiring • Distribution Boards • Lighting Systems",
        github: "",
        demo: "",
    },

    {
        id: "maintenance",
        title: "Electrical Maintenance & Troubleshooting",
        video: installation,
        description:
            "Performed fault diagnosis, preventive maintenance, equipment servicing, and repairs on electrical systems.",
        technologies:
            "Maintenance • Troubleshooting • Electrical Safety",
        github: "",
        demo: "",
    },
];

export default projects;