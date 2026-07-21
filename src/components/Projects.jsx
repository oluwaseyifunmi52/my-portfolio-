import "../styles/projects.css";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <section id="projects" className="projects">

            <div className="container">

                <h5>MY PROJECTS</h5>

                <h2>Recent Work</h2>

                <div className="projects-grid">

                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}
