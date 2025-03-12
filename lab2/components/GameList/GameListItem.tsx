import {StoreRecommendationItem, StyledThemeProps} from "@/types";
import {Image} from "expo-image";
import styled from "styled-components/native";
import {ContainerHorizontalBetween, PlatformsList} from "../ui";
import {useTheme} from "@/hooks";
import {HexOpacity} from "@/constants";
import {GameListItemPrice} from "./GameListItemPrice";
import {GameListItemPriceDiscount} from "./GameListItemPriceDiscount";

interface GameListItemProps extends StoreRecommendationItem {
}

export function GameListItem({image, discount, price, title, platforms}: GameListItemProps) {
    const {theme} = useTheme();

    return (
        <ContainerHorizontalBetween>
            <Container>
                <Banner source={image}/>

                <ContentContainer>
                    <Title>
                        {title}
                    </Title>
                    <PlatformsList
                        platforms={platforms}
                        color={theme.uiPrimary + HexOpacity["50"]}
                        size={14}
                        withText
                    />
                </ContentContainer>
            </Container>
            {
                discount
                    ? <GameListItemPriceDiscount price={price} discount={discount} />
                    : <GameListItemPrice price={price}/>
            }
        </ContainerHorizontalBetween>
    )
}

const Title = styled.Text`
    color: ${({theme}: StyledThemeProps) => theme.textPrimary}
`

const Container = styled.View`
    flex-direction: row;
    gap: 14px;
    align-items: center;
`

const ContentContainer = styled.View`
    gap: 2px
`

const Banner = styled(Image)`
    height: 50px;
    width: 70px;
    border-radius: 10px;
`