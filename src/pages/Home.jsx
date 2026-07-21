
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ThemeToggle from "../components/ThemeToggle";
import Projects from "../components/Projects";
import Sidebar from "../components/Sidebar";

export default function Home() {
    return (
        <>
            <ThemeToggle />

            <Sidebar />

            <main className="main-content">
                <Hero />

                <About />

                <Skills />

                <Services />

                <Projects />

                <Stats />

                <Experience />

                <Education />

                <Contact />

                <Footer />
            </main>

            <ScrollToTop />
        </>
    );
}
