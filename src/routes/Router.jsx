import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";
import NotFound from "../pages/NotFound";
import Resume from "../pages/Resume";
import FloatingThemeToggle from "../components/FloatingThemeToggle";

export default function Router() {
    return (
        <BrowserRouter>
            <FloatingThemeToggle />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project/:id" element={<ProjectDetails />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </BrowserRouter>
    );
}