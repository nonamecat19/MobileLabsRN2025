import styled from "styled-components/native";
import {ReactNode} from "react";

interface MenuProps {
    children: ReactNode
}

export function MenuContainer({children}: MenuProps) {
    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.View`
    border-radius: 10px;
    overflow: hidden;
    gap: 1px
`