import "../styles/developmentApproach.css";

const approaches = [
    {
        title: "Problem-First Thinking",
        description: "Before writing code, I understand the problem deeply — who it's for, what constraints exist, and what 'done' looks like. This prevents over-engineering and keeps scope focused.",
        icon: "🎯",
    },
    {
        title: "Iterative Development",
        description: "Build in small, testable increments. Get feedback early. Deploy often. This reduces risk, catches bugs sooner, and keeps stakeholders aligned throughout the project.",
        icon: "🔄",
    },
    {
        title: "Security by Default",
        description: "Authentication, authorization, input validation, and secure headers aren't afterthoughts — they're built in from the first commit. JWT in httpOnly cookies, RBAC middleware, parameterized queries.",
        icon: "🛡️",
    },
    {
        title: "Clean, Maintainable Code",
        description: "Consistent naming, modular components, separation of concerns (MVC), reusable hooks/utilities, and meaningful commit messages. Code is read more than written — I optimize for the reader.",
        icon: "🧹",
    },
    {
        title: "Debugging as a Discipline",
        description: "Systematic root-cause analysis: reproduce, isolate, hypothesize, test, verify. Whether it's a CORS error, a race condition, or a database deadlock — I trace the chain, not just the symptom.",
        icon: "🔍",
    },
    {
        title: "Continuous Learning",
        description: "Every project introduces something new — a pattern, a tool, a constraint. I document what I learn, refactor when patterns emerge, and apply lessons to the next build. Stagnation is the only failure.",
        icon: "📚",
    },
];

export default function DevelopmentApproach() {
    return (
        <section id="development-approach" className="development-approach">
            <div className="container">

                <div className="section-title">
                    <h5>DEVELOPMENT APPROACH</h5>
                    <h2>How I Work</h2>
                    <p>
                        These principles guide every project I build. They're not buzzwords — they're habits formed
                        through debugging production issues, deploying real applications, and learning from mistakes.
                    </p>
                </div>

                <div className="approach-grid">
                    {approaches.map((item, index) => (
                        <div className="approach-card" key={index}>
                            <div className="approach-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}