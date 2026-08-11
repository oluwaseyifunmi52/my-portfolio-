import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import WhatICanBuild from "../components/WhatICanBuild";
import Projects from "../components/Projects";
import DevelopmentApproach from "../components/DevelopmentApproach";
import Experience from "../components/Experience";
import Education from "../components/Education";
import GitHub from "../components/GitHub";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";

export default function Home() {
    return (
        <>
            <TopNavbar />

            <Sidebar />

            <main className="main-content">
                <Hero />

                <About />

                <Skills />

                <WhatICanBuild />

                <Projects />

                <DevelopmentApproach />

                <Experience />

                <Education />

                <GitHub />

                <Contact />

                <Footer />
            </main>

            <ScrollToTop />
        </>
    );
}