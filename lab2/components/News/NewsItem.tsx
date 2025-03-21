import {View} from "react-native";
import {Image} from "expo-image";
import {CommunityNewsItem, StyledThemeProps} from "@/types";
import styled from "styled-components/native";
import {ContainerHorizontalBetween, ContentLayout, PrimaryText, SecondaryText, SuccessText} from "@/components";
import {HexOpacity} from "@/constants";
import {AntDesign, Entypo, FontAwesome5, MaterialCommunityIcons} from "@expo/vector-icons";
import {useTheme} from "@/hooks";

interface NewsItemProps extends CommunityNewsItem {
}

const ICON_SIZE = 20

export function NewsItem({title, date, likes, comments, photo, tags, nickname, description, userPhoto}: NewsItemProps) {
    const {theme} = useTheme()

    return (
        <View>
            <Separator/>
            <ContentLayout>
                <Container>
                    <ContainerHorizontalBetween>
                        <HeaderContent>
                            <UserPhoto source={userPhoto}/>
                            <View>
                                <UserInfo>
                                    <PrimaryText>{nickname}</PrimaryText>
                                    <TagsContainer>
                                        {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                                    </TagsContainer>
                                </UserInfo>
                                <DateText>
                                    yesterday • 2:20 pm
                                </DateText>
                            </View>
                        </HeaderContent>
                        <Entypo name="dots-three-horizontal" size={ICON_SIZE} color={theme.uiSecondary} />
                    </ContainerHorizontalBetween>
                    <Banner source={photo}/>
                    <PrimaryText>{title}</PrimaryText>
                    <SecondaryText>{description}</SecondaryText>
                    <Line/>
                    <ContainerHorizontalBetween>
                        <FooterButtonsContainer>
                            <ButtonContainer>
                                <AntDesign name="like2" size={ICON_SIZE} color={theme.success}/>
                                <SuccessText>{likes}</SuccessText>
                            </ButtonContainer>
                            <ButtonContainer>
                                <FontAwesome5 name="comment-alt" size={ICON_SIZE} color={theme.uiSecondary}/>
                                <SecondaryText>{comments}</SecondaryText>
                            </ButtonContainer>
                        </FooterButtonsContainer>
                        <MaterialCommunityIcons name="share-outline" size={ICON_SIZE} color={theme.uiSecondary}/>
                    </ContainerHorizontalBetween>
                </Container>
            </ContentLayout>
        </View>
    )
}

const DateText = styled(SecondaryText)`
    font-size: 12px;
    font-weight: 400
`

const UserInfo = styled.View`
    flex-direction: row;
    gap: 8px;
`

const UserPhoto = styled(Image)`
    height: 35px;
    width: 35px;
    border-radius: 50%;
`

const TagsContainer = styled.View`
    flex-direction: row;
    gap: 2px;
    margin-top: 4px;
`

const Tag = styled(PrimaryText)`
    background: ${({theme}: StyledThemeProps) => theme.special};
    border-radius: 2px;
    font-size: 8px;
    height: 12px;
    padding-horizontal: 4px;
`

const Separator = styled.View`
    height: 8px;
    background: ${({theme}: StyledThemeProps) => theme.backgroundAccent};
`

const HeaderContent = styled.View`
    flex-direction: row;
    gap: 12px;
`

const FooterButtonsContainer = styled.View`
    flex-direction: row;
    gap: 20px;
`

const ButtonContainer = styled.View`
    flex-direction: row;
    gap: 5px;
    align-items: center;
`

const Container = styled.View`
    gap: 16px;
    padding-vertical: 16px;
`

const Banner = styled(Image)`
    height: 200px;
    width: 100%;
    border-radius: 10px;
`

const Line = styled.View`
    width: 100%;
    height: 1px;
    background: ${({theme}: StyledThemeProps) => theme.textSecondary + HexOpacity[50]};
`