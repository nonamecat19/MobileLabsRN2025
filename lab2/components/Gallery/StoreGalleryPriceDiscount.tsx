import {StyledThemeProps} from "@/types";
import styled from "styled-components/native";
import {HexOpacity} from "@/constants";
import {calculatePriceWithDiscount} from "@/utils";

interface StoreGalleryPriceDiscountProps {
    price: number;
    discount: number;
}

export function StoreGalleryPriceDiscount({price, discount}: StoreGalleryPriceDiscountProps) {
    const priceWithDiscount = calculatePriceWithDiscount(price, discount);

    return (
        <Container>
            <Discount>
                -{discount}%
            </Discount>
            <Prices>
                <OldPrice>
                    ${price}
                </OldPrice>
                <NewPrice>
                    ${priceWithDiscount}
                </NewPrice>
            </Prices>
        </Container>
    )
}

const Container = styled.View`
    flex-direction: row;
    border-radius: 5px;
    overflow: hidden;
`
const Prices = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 2px 8px;
    background: ${({theme}: StyledThemeProps) => theme.background + HexOpacity["80"]};
    gap: 5px
`

const Discount = styled.Text`
    background: ${({theme}: StyledThemeProps) => theme.success + HexOpacity["50"]};
    color: ${({theme}: StyledThemeProps) => theme.textPrimary};
    padding: 2px 8px;
`

const OldPrice = styled.Text`
    text-decoration: line-through;
    color: ${({theme}: StyledThemeProps) => theme.textPrimary + HexOpacity["60"]};
`

const NewPrice = styled.Text`
    color: ${({theme}: StyledThemeProps) => theme.textPrimary};
`