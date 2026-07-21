export default function Resume() {
    return (
        <div className="resume-page">
            <h2>Software CV</h2>

            <iframe
                src="/Resume.pdf"
                width="100%"
                height="800"
                title="Software CV"
            />

            <h2 style={{ marginTop: "40px" }}>
                Electrical & Solar CV
            </h2>

            <iframe
                src="/Resume solar.pdf"
                width="100%"
                height="800"
                title="Electrical CV"
            />
        </div>
    );
}