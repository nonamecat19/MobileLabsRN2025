import {StoreRecommendationItem} from "@/types";
import {GameListItem} from "./GameListItem";
import styled from "styled-components/native";

interface GameListProps {
    data: StoreRecommendationItem[]
}

export function GameList({data}: GameListProps) {
    return (
        <Container>
            {data.map((item, index) => (
                <GameListItem key={index} {...item}/>
            ))}
        </Container>
    )
}

const Container = styled.View`
    padding-vertical: 20px;
    gap: 15px;
`