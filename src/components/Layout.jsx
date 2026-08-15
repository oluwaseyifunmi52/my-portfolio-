import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import ScrollToTop from "./ScrollToTop";
import FloatingThemeToggle from "./FloatingThemeToggle";

export default function Layout() {
    return (
        <>
            <Sidebar />
            <FloatingThemeToggle />
            <main className="main-content">
                <Outlet />
            </main>
            <ScrollToTop />
        </>
    );
}