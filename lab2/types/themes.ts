import {ThemeName} from "@/constants";

type Hex = `#${string}`

export type AppTheme = {
    background: Hex
    backgroundAccent: Hex
    backgroundForeground: Hex
    textPrimary: Hex
    textSecondary: Hex
    uiPrimary: Hex
    uiSecondary: Hex
    success: Hex
    info: Hex
    special: Hex
}

export type AppThemeName = ThemeName.Dark | ThemeName.Light

