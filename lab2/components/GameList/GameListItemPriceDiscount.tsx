import styled from "styled-components/native";
import {StyledThemeProps} from "@/types";
import {calculatePriceWithDiscount} from "@/utils";
import {View} from "react-native";
import {HexOpacity} from "@/constants";

interface GameListItemPriceDiscountProps {
    price: number
    discount: number
}

export function GameListItemPriceDiscount({price, discount}: GameListItemPriceDiscountProps) {
    const newPrice = calculatePriceWithDiscount(price, discount);

    return (
        <Container>
            <PricesContainer>
                <OldPrice>
                    ${price}
                </OldPrice>
                <Price>
                    ${newPrice}
                </Price>
            </PricesContainer>
            <Discount>
                -{discount}%
            </Discount>
        </Container>
    )
}

const Container = styled.View`
    gap: 5px;
    
`

const PricesContainer = styled.View`
    flex-direction: row;
    align-items: end;
    justify-content: end;
    gap: 5px;
    height: 22px;
`

const OldPrice = styled.Text`
    color: ${({theme}: StyledThemeProps) => theme.textPrimary};
    font-size: 12px;
    font-weight: 300;
    text-decoration: line-through;
    padding-top: 6px;
`

const Price = styled.Text`
    color: ${({theme}: StyledThemeProps) => theme.textPrimary};
    font-size: 17px;
    font-weight: 300;
`

const Discount = styled.Text`
    color: ${({theme}: StyledThemeProps) => theme.textPrimary};
    background: ${({theme}: StyledThemeProps) => theme.success + HexOpacity["50"]};
    padding: 1px 8px;
    border-radius: 4px;
    width: 47px;
`