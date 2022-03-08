import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export function useTheme(){
    const {toggleTheme} = useContext(ThemeContext)
    return {toggleTheme}
}