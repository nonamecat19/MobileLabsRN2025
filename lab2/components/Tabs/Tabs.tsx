import styled from "styled-components/native";
import {ContentLayout} from "@/components";
import {ReactNode} from "react";

interface TabsProps {
    children: ReactNode;
}

export function Tabs({children}: TabsProps) {
    return (
        <ContentLayout>
            <Container>
                {children}
            </Container>
        </ContentLayout>
    )
}

const Container = styled.View`
    flex-direction: row;
    gap: 5px
`
