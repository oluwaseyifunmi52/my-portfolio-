import { FaMoon, FaSun } from "react-icons/fa";
import useTheme from "../hooks/useTheme";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
        >
            {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
    );
}