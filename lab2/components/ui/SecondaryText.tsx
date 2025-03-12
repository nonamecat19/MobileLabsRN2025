import styled from "styled-components/native";
import {StyledThemeProps} from "@/types";

export const SecondaryText = styled.Text`
    font-size: 16px;
    color: ${({theme}: StyledThemeProps) => theme.textSecondary};
    padding-vertical: 10px;
`