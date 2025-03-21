import {Image} from "expo-image";
import {OpenChatItem} from "@/types";
import styled from "styled-components/native";
import {PrimaryText, SecondaryText} from "@/components";

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
        </Container>
    )
}

const TextInfoContainer = styled.View`
   flex-direction: row;
`

const ContentContainer = styled.View`
    gap: 2px;
`

const Container = styled.View`
    padding-vertical: 10px;
    flex-direction: row;
    gap: 10px
`

const Banner = styled(Image)`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    overflow: hidden;
`