import {FlatList} from "react-native";
import {OpenChatItem} from "@/types";
import styled from "styled-components/native";
import {ChatItem} from "./ChatItem";

interface ChatProps {
    data: OpenChatItem[]
}

export function Chat({data}: ChatProps) {
    return (
        <ListContainer>
            <FlatList
                data={data}
                keyExtractor={(_, index) => index.toString()}
                numColumns={1}
                renderItem={({item, index}) => (
                    <ChatItem key={index} {...item}/>
                )}
            />
        </ListContainer>
    )
}

const ListContainer = styled.View`
    padding: 5px;
`