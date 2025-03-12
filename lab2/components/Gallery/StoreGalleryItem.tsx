import {GalleryItem, StyledThemeProps} from "@/types";
import {Image} from "expo-image";
import styled from "styled-components/native";
import {PlatformsList, StoreGalleryPrice, StoreGalleryPriceDiscount} from "@/components";
import {useTheme} from "@/hooks";
import {HexOpacity} from "@/constants";

interface StoreGalleryItemProps extends GalleryItem {
}

export function StoreGalleryItem({title, description, image, price, discount, platforms}: StoreGalleryItemProps) {
    const {theme} = useTheme();

    return (
        <Container>
            <Banner source={image}/>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <PlatformsContainer>
                <PlatformsList
                    platforms={platforms}
                    color={theme.uiPrimary + HexOpacity["60"]}
                />
            </PlatformsContainer>
            <PriceContainer>
                {discount
                    ? <StoreGalleryPriceDiscount price={price} discount={discount}/>
                    : <StoreGalleryPrice price={price}/>
                }
            </PriceContainer>
        </Container>
    )
}

const Container = styled.View`
    position: relative;
    height: 250px;
    width: 340px;
`

const Banner = styled(Image)`
    height: 100%;
    width: 100%;
    border-radius: 10px;
`

const Title = styled.Text`
    position: absolute;
    bottom: 70px;
    z-index: 1;
    color: ${({theme}: StyledThemeProps) => theme.textPrimary};
    font-size: 25px;
    font-weight: bold;
    left: 15px;
`

const Description = styled.Text`
    position: absolute;
    bottom: 50px;
    z-index: 1;
    color: ${({theme}: StyledThemeProps) => theme.textPrimary + HexOpacity["70"]};
    font-size: 14px;
    left: 15px;
`

const PlatformsContainer = styled.View`
    position: absolute;
    z-index: 1;
    bottom: 15px;
    right: 15px;
`

const PriceContainer = styled.View`
    position: absolute;
    z-index: 1;
    bottom: 15px;
    left: 15px;
`