import {Pressable} from "react-native";
import {ReactNode} from "react";
import styled from "styled-components/native";
import {StyledThemeProps} from "@/types";

interface TabsItemWrapperProps {
    children: ReactNode;
    active?: boolean;
}

export function TabsItemWrapper({children}: TabsItemWrapperProps) {
    return (
        <Pressable>
            <Tab>
                {children}
            </Tab>
        </Pressable>
    )
}

type TabProps = Pick<TabsItemWrapperProps, "active">

const Tab = styled.View`
    padding: 10px 20px;
    border-radius: 10px;
    background: ${({theme, active}: StyledThemeProps & TabProps) => {
        return active
                ? theme.info
                : theme.backgroundForeground
    }};
`