import styled from "styled-components/native";
import {StyledThemeProps} from "@/types";

export const ScreenLayout = styled.View`
    background-color: ${({theme}: StyledThemeProps) => theme.background};
    flex: 1;
`