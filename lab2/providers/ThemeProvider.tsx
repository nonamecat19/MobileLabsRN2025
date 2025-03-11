import {ThemeProvider as StyledThemeProvider} from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, ReactNode, useEffect, useState} from "react";
import {AppTheme} from "@/types";
import {appThemes, DarkTheme} from "@/themes";
import {THEME_STORAGE_KEY, ThemeName} from "@/constants";

type ThemeContextValue = {
    theme: AppTheme
    themeName: ThemeName
    toggle: () => void
}

export const ThemeContext = createContext<ThemeContextValue>({
    theme: DarkTheme,
    themeName: ThemeName.Dark,
    toggle: () => {
    }
})

type ThemeProviderProps = {
    children: ReactNode;
}

export function ThemeProvider({children}: ThemeProviderProps) {
    const [themeName, setThemeName] = useState<ThemeName>(ThemeName.Dark);

    useEffect(() => {
        async function loadTheme() {
            const storedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY) as ThemeName | null;
            if (!storedTheme || !appThemes[storedTheme]) return
            setThemeName(storedTheme);
        }
        void loadTheme();
    }, []);

    async function toggle() {
        const newTheme = themeName === ThemeName.Light ? ThemeName.Dark : ThemeName.Light;
        setThemeName(newTheme);
        await AsyncStorage.setItem(THEME_STORAGE_KEY, newTheme);
    }

    const theme: AppTheme = appThemes[themeName];

    return (
        <ThemeContext.Provider
            value={{themeName, theme, toggle}}
        >
            <StyledThemeProvider theme={theme}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
}

