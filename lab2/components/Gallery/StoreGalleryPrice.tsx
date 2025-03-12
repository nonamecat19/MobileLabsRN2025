import {GalleryItem, StyledThemeProps} from "@/types";
import styled from "styled-components/native";
import {HexOpacity} from "@/constants";

type StoreGalleryPriceProps = Pick<GalleryItem, "price">

export function StoreGalleryPrice({price}: StoreGalleryPriceProps) {
    return (
        <Container>
            <Price>
                ${price}
            </Price>
        </Container>
    )
}

const Container = styled.View`
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;
    padding: 2px 8px;
    background: ${({theme}: StyledThemeProps) => theme.background + HexOpacity["80"]};
`

const Price = styled.Text`
    color: ${({theme}: StyledThemeProps) => theme.textPrimary};
`