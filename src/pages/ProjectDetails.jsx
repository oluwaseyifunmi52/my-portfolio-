import { useParams, Link } from "react-router-dom";
import "../styles/projects.css";
import projects from "../data/projects";

export default function ProjectDetails() {

    const { id } = useParams();

    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="container">

                <h2>Project Not Found</h2>

                <Link to="/">
                    Back Home
                </Link>

            </div>
        );
    }

    return (
        <section className="project-details">

            <div className="container">

                <img
                    src={project.image}
                    alt={project.title}
                />

                <h1>{project.title}</h1>

                <p>{project.description}</p>

                <h3>Technologies</h3>

                <p>{project.technologies}</p>

                <div className="buttons">

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Live Demo
                    </a>

                </div>

                <Link to="/">
                    Back to Portfolio
                </Link>

            </div>

        </section>
    );
}
