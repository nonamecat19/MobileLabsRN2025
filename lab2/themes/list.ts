import {DarkTheme, LightTheme} from "@/themes";
import {AppTheme, AppThemeName} from "@/types";

export const appThemes = {
    dark: DarkTheme,
    light: LightTheme,
} satisfies Record<AppThemeName, AppTheme>