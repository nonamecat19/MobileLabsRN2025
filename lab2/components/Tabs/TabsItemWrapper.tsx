import {Pressable} from "react-native";
import {ReactNode} from "react";
import styled from "styled-components/native";
import {StyledThemeProps} from "@/types";

interface TabsItemWrapperProps {
    children: ReactNode;
    active?: boolean;
}

export function TabsItemWrapper({children, active}: TabsItemWrapperProps) {
    return (
        <Pressable>
            <Tab active={active}>
                {children}
            </Tab>
        </Pressable>
    )
}

type TabProps = Pick<TabsItemWrapperProps, "active">

const Tab = styled.View`
    padding: 10px;
    border-radius: 10px;
    background: ${({theme, active}: StyledThemeProps & TabProps) => {
        return active
                ? theme.info
                : theme.backgroundForeground
    }};
`