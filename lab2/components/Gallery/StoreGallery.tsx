import {GalleryItem} from "@/types";
import {FlatList} from "react-native";
import {StoreGalleryItem} from "./StoreGalleryItem";
import styled from "styled-components/native";

interface StoreGalleryProps {
    data: GalleryItem[]
}

export function StoreGallery({data}: StoreGalleryProps) {
    return (
        <ListContainer>
            <FlatList
                data={data}
                keyExtractor={(_item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                    <ItemContainer>
                        <StoreGalleryItem {...item} />
                    </ItemContainer>
                )}
            />
        </ListContainer>
    )
}

const ListContainer = styled.View`
    padding: 5px;
`

const ItemContainer = styled.View`
    padding: 10px;
`