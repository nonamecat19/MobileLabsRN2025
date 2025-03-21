import {FlatList} from "react-native";
import {CommunityNewsItem} from "@/types";
import {NewsItem} from "./NewsItem";
import styled from "styled-components/native";

interface NewsProps {
    data: CommunityNewsItem[]
}

export function News({data}: NewsProps) {
    return (
        <ListContainer>
            <FlatList
                data={data}
                keyExtractor={(_, index) => index.toString()}
                numColumns={1}
                renderItem={({item, index}) => (
                    <NewsItem
                        key={index}
                        {...item}
                    />
                )}
            />
        </ListContainer>
    )
}

const ListContainer = styled.View`
    padding-vertical: 20px;
`