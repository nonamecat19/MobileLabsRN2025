import {LightTheme} from "./light";
import {DarkTheme} from "./dark";
import {AppTheme, AppThemeName} from "@/types";

export const appThemes = {
    dark: DarkTheme,
    light: LightTheme,
} satisfies Record<AppThemeName, AppTheme>