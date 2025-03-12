import styled from "styled-components/native";
import {ReactNode} from "react";

interface TabsProps {
    children: ReactNode;
}

export function Tabs({children}: TabsProps) {
    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.View`
    flex-direction: row;
    gap: 5px
`
