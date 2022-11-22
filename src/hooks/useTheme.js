import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export function useTheme() {
    const { toggleTheme, theme } = useContext(ThemeContext)
    return { toggleTheme, theme }
}