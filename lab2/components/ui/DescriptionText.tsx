import styled from "styled-components/native";
import {StyledThemeProps} from "@/types";
import {SecondaryText} from "./Text";

export const DescriptionText = styled(SecondaryText)`
    font-size: 16px;
    color: ${({theme}: StyledThemeProps) => theme.textSecondary};
    padding-vertical: 10px;
`