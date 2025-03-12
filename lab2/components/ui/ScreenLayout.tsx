import styled from "styled-components/native";
import {StyledThemeProps} from "@/types";

export const ScreenLayout = styled.ScrollView`
    background-color: ${({theme}: StyledThemeProps) => theme.background};
    padding-top: 35px;
`