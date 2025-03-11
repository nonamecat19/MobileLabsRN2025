import {createContext, useContext} from "react";
import {DarkTheme} from "@/themes";
import {AppTheme} from "@/types";

const ThemeContext = createContext<AppTheme>(DarkTheme);

export function useTheme() {
    return useContext(ThemeContext);
}
