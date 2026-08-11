import { FaMoon, FaSun } from "react-icons/fa";
import useTheme from "../hooks/useTheme";
import "../styles/FloatingThemeToggle.css";

export default function FloatingThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className="floating-theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            aria-pressed={theme === "dark"}
            title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        >
            {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
    );
}