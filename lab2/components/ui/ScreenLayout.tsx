import styled from "styled-components/native";
import {StyledThemeProps} from "@/types";
import { ScrollView } from 'react-native-virtualized-view'

export const ScreenLayout = styled(ScrollView)`
    background-color: ${({theme}: StyledThemeProps) => theme.background};
    padding-top: 35px;
`