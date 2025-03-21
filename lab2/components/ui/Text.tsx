import styled from "styled-components/native";
import {StyledThemeProps} from "@/types";

export const SuccessText = styled.Text`
    color: ${({theme}: StyledThemeProps) => theme.success};
`

export const PrimaryText = styled.Text`
    color: ${({theme}: StyledThemeProps) => theme.textPrimary};
`

export const SecondaryText = styled.Text`
    color: ${({theme}: StyledThemeProps) => theme.textSecondary};
`
