import {Image} from "expo-image";
import {OpenChatItem, StyledThemeProps} from "@/types";
import styled from "styled-components/native";
import {PrimaryText, SecondaryText} from "@/components";
import {UserStatus} from "@/constants";

interface ChatItemProps extends OpenChatItem {
}

export function ChatItem({avatar, message, lastMessageMine, nickname, status}: ChatItemProps) {
    return (
        <Container>
            <Banner source={avatar}/>
            <ContentContainer>
                <PrimaryText>{nickname}</PrimaryText>
                <TextInfoContainer>
                    {lastMessageMine && <PrimaryText>You: </PrimaryText>}
                    <SecondaryText>{message} • 14 Jun</SecondaryText>
                </TextInfoContainer>
            </ContentContainer>
            {!lastMessageMine && status === UserStatus.ONLINE &&
                <MessagesIndicator>
                    <SecondaryText>1</SecondaryText>
                </MessagesIndicator>
            }
            {!lastMessageMine && status !== UserStatus.ONLINE &&
                <MessagesAwayIndicator/>
            }
        </Container>
    )
}

const MessagesIndicator = styled.View`
    background: ${({theme}: StyledThemeProps) => theme.info};
    height: 20px;
    width: 20px;
    border-radius: 100%;
    position: absolute;
    right: 10px;
    top: 30px;
    justify-content: center;
    align-items: center;
`

const MessagesAwayIndicator = styled.View`
    background: ${({theme}: StyledThemeProps) => theme.uiPrimary};
    height: 10px;
    width: 10px;
    border-radius: 100%;
    position: absolute;
    right: 15px;
    top: 30px;
`

const TextInfoContainer = styled.View`
    flex-direction: row;
`

const ContentContainer = styled.View`
    gap: 2px;
`

const Container = styled.View`
    padding-vertical: 10px;
    flex-direction: row;
    gap: 10px;
    position: relative;
`

const Banner = styled(Image)`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    overflow: hidden;
`