import "../styles/projects.css";

export default function ProjectCard({ project }) {
    return (
        <div className="project-card">

            {project.video ? (
                <video
                    className="project-image"
                    controls
                    muted
                    loop
                    playsInline
                >
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                />
            )}
            
            <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <span className="project-tech">
                    {project.technologies}
                </span>

                <div className="project-links">

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

            </div>

        </div>
    );
}