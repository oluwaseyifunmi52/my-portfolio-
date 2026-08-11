import { useState, useEffect } from "react";
import { FaGithub, FaCodeBranch, FaStar, FaUser, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/github.css";

const FALLBACK_REPOS = [
    {
        id: "royal-higherlife-schools",
        name: "royal-higherlife-schools",
        html_url: "https://github.com/oluwaseyifunmi52/royal-higherlife-schools",
        description: "Full-stack MERN school management platform with RBAC, JWT auth, academic management",
        language: "JavaScript",
        stargazers_count: 0,
        updated_at: "2025-01-15T00:00:00Z",
        private: false,
    },
    {
        id: "hospital-management-system",
        name: "hospital-management-system",
        html_url: "https://github.com/oluwaseyifunmi52/hospital-management-system",
        description: "MERN hospital management system with patient/doctor/admin dashboards and appointments",
        language: "JavaScript",
        stargazers_count: 0,
        updated_at: "2025-01-10T00:00:00Z",
        private: false,
    },
    {
        id: "royal-higher-life-ministries",
        name: "royal-higher-life-ministries",
        html_url: "https://github.com/oluwaseyifunmi52/royal-higher-life-ministries",
        description: "React/Vite church ministry website with events, sermons, and responsive design",
        language: "JavaScript",
        stargazers_count: 0,
        updated_at: "2024-12-20T00:00:00Z",
        private: false,
    },
    {
        id: "online-voting-app",
        name: "online-voting-app",
        html_url: "https://github.com/oluwaseyifunmi52/online-voting-app",
        description: "MERN voting platform with JWT auth, election management, and secure vote tracking",
        language: "JavaScript",
        stargazers_count: 0,
        updated_at: "2024-12-15T00:00:00Z",
        private: false,
    },
    {
        id: "sarah-beauty-store",
        name: "sarah-beauty-store",
        html_url: "https://github.com/oluwaseyifunmi52/sarah-beauty-store",
        description: "React e-commerce frontend with skin-type quiz, product catalog, and scoring logic",
        language: "JavaScript",
        stargazers_count: 0,
        updated_at: "2024-11-20T00:00:00Z",
        private: false,
    },
    {
        id: "task-manager-api",
        name: "task-manager-api",
        html_url: "https://github.com/oluwaseyifunmi52/task-manager-api",
        description: "Node.js/Express REST API with JWT auth, CRUD, pagination, search, and MVC architecture",
        language: "JavaScript",
        stargazers_count: 0,
        updated_at: "2024-11-10T00:00:00Z",
        private: false,
    },
    {
        id: "blog-api",
        name: "blog-api",
        html_url: "https://github.com/oluwaseyifunmi52/blog-api",
        description: "Express.js/PostgreSQL blog API with JWT auth, roles, categories, and nested comments",
        language: "JavaScript",
        stargazers_count: 0,
        updated_at: "2024-10-25T00:00:00Z",
        private: false,
    },
    {
        id: "url-shortener",
        name: "url-shortener",
        html_url: "https://github.com/oluwaseyifunmi52/url-shortener",
        description: "URL shortener service with click tracking, analytics, and collision-resistant slugs",
        language: "JavaScript",
        stargazers_count: 0,
        updated_at: "2024-10-10T00:00:00Z",
        private: false,
    },
];

export default function GitHub() {
    const [profile, setProfile] = useState(null);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [usingFallback, setUsingFallback] = useState(false);

    useEffect(() => {
        let cancelled = false;

        const fetchGitHubData = async () => {
            try {
                const username = "oluwaseyifunmi52";

                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 8000);

                const [profileRes, reposRes] = await Promise.all([
                    fetch(`https://api.github.com/users/${username}`, { signal: controller.signal }),
                    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=8`, { signal: controller.signal }),
                ]);

                clearTimeout(timeoutId);

                if (cancelled) return;

                if (!profileRes.ok) throw new Error(`Profile fetch failed: ${profileRes.status}`);
                if (!reposRes.ok) throw new Error(`Repos fetch failed: ${reposRes.status}`);

                const profileData = await profileRes.json();
                const reposData = await reposRes.json();

                if (cancelled) return;

                setProfile(profileData);
                setRepos(reposData.filter(r => !r.fork && r.name !== username));
                setUsingFallback(false);
            } catch (err) {
                if (cancelled) return;
                console.warn("GitHub API failed, using fallback data:", err.message);
                setRepos(FALLBACK_REPOS);
                setProfile({
                    login: "oluwaseyifunmi52",
                    name: "Oluwaseyi Abayomi Emmanuel",
                    avatar_url: "https://github.com/oluwaseyifunmi52.png",
                    html_url: "https://github.com/oluwaseyifunmi52",
                    bio: "Junior Full-Stack Developer building with the MERN stack.",
                    followers: 0,
                    public_repos: FALLBACK_REPOS.length,
                    following: 0,
                });
                setUsingFallback(true);
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        };

        fetchGitHubData();

        return () => {
            cancelled = true;
        };
    }, []);

    if (loading) {
        return (
            <section id="github" className="github" aria-label="GitHub">
                <div className="container">
                    <div className="section-title">
                        <h5>GITHUB</h5>
                        <h2>Code & Contributions</h2>
                    </div>
                    <div className="github-loading">
                        <div className="spinner"></div>
                        <p>Loading GitHub data...</p>
                    </div>
                </div>
            </section>
        );
    }

    const formatNumber = (num) => {
        if (num >= 1000) return (num / 1000).toFixed(1) + "k";
        return num.toString();
    };

    const formatDate = (dateStr) => {
        try {
            return new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
        } catch {
            return "Recently";
        }
    };

    const displayRepos = repos.slice(0, 6);

    return (
        <section id="github" className="github" aria-label="GitHub">
            <div className="container">

                <div className="section-title">
                    <h5>GITHUB</h5>
                    <h2>Code & Contributions</h2>
                    <p>
                        Explore my projects, experiments, and ongoing work on GitHub.
                        {usingFallback && <span className="fallback-notice"> (Showing selected repositories — API rate limited)</span>}
                    </p>
                </div>

                {profile && (
                    <div className="github-profile">
                        <img
                            src={profile.avatar_url}
                            alt=""
                            className="github-avatar"
                            aria-hidden="true"
                        />
                        <div className="github-profile-info">
                            <h3>{profile.name || profile.login}</h3>
                            <p className="github-bio">{profile.bio || "Junior Full-Stack Developer building with the MERN stack."}</p>
                            <div className="github-stats">
                                <div className="stat">
                                    <FaUser />
                                    <span>{formatNumber(profile.followers)} Followers</span>
                                </div>
                                <div className="stat">
                                    <FaCodeBranch />
                                    <span>{formatNumber(profile.public_repos)} Repositories</span>
                                </div>
                            </div>
                        </div>
                        <a
                            href={profile.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary github-profile-link"
                        >
                            <FaGithub /> View Profile
                        </a>
                    </div>
                )}

                <div className="github-repos">
                    <h3>Selected Repositories</h3>
                    <div className="repos-grid">
                        {displayRepos.map((repo) => (
                            <article key={repo.id} className="repo-card">
                                <div className="repo-header">
                                    <h4>
                                        <a
                                            href={repo.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {repo.name}
                                        </a>
                                    </h4>
                                    {repo.private && <span className="repo-private">Private</span>}
                                </div>
                                <p className="repo-description">{repo.description || "No description provided."}</p>
                                <div className="repo-meta">
                                    {repo.language && (
                                        <span className="repo-language">
                                            <span className="lang-dot" style={{ backgroundColor: getLanguageColor(repo.language) }} aria-hidden="true"></span>
                                            {repo.language}
                                        </span>
                                    )}
                                    <span className="repo-stars">
                                        <FaStar /> {repo.stargazers_count}
                                    </span>
                                    <span className="repo-updated">
                                        <FaExternalLinkAlt /> Updated {formatDate(repo.updated_at)}
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="github-cta">
                        <a
                            href="https://github.com/oluwaseyifunmi52?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary"
                        >
                            <FaGithub /> View All Repositories
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}

function getLanguageColor(language) {
    const colors = {
        JavaScript: "#f1e05a",
        TypeScript: "#2b7489",
        React: "#61dafb",
        HTML: "#e34c26",
        CSS: "#1572b6",
        Python: "#3572a5",
        Node: "#339933",
        Express: "#000000",
        MongoDB: "#47a248",
        PostgreSQL: "#336791",
        Shell: "#89e051",
    };
    return colors[language] || "#8b949e";
}