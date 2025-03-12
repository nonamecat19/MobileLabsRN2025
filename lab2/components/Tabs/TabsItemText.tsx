import {ReactNode} from "react";
import {TabsItemWrapper} from "./TabsItemWrapper";
import {Text} from "react-native";
import styled from "styled-components/native";
import {StyledThemeProps} from "@/types";

interface TabsItemTextProps {
    active?: boolean;
    children: ReactNode;
}

export function TabsItemText({children, active}: TabsItemTextProps) {
    return (
        <TabsItemWrapper active={active}>
            <TabText>
                {children}
            </TabText>
        </TabsItemWrapper>
    )
}

const TabText = styled(Text)`
    color: ${({theme}: StyledThemeProps) => theme.textPrimary};
`