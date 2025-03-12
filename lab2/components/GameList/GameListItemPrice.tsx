import styled from "styled-components/native";
import {StyledThemeProps} from "@/types";

interface GameListItemPriceProps {
    price: number
}

export function GameListItemPrice({price}: GameListItemPriceProps) {
    return (
        <Price>
            ${price}
        </Price>
    )
}

const Price = styled.Text`
    color: ${({theme}: StyledThemeProps) => theme.textPrimary};
    font-size: 17px;
    font-weight: 300;
`