import "../styles/stats.css";

export default function Stats() {
    const stats = [
        {
            number: "10+",
            title: "Projects Completed",
        },
        {
            number: "8+",
            title: "Years Electrical & Solar Experience",
        },
        {
            number: "1+",
            title: "Years Web Development",
        },
        {
            number: "15+",
            title: "Technologies",
        },
        {
            number: "100%",
            title: "Commitment to Quality",
        },
    ];

    return (
        <section className="stats">
            <div className="container">
                <h2 className="section-title">
                    My Achievements
                </h2>

                <div className="stats-grid">
                    {stats.map((item, index) => (
                        <div
                            className="stat-card"
                            key={index}
                        >
                            <h3>{item.number}</h3>
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}