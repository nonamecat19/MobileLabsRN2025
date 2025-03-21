import {FlatList, View} from "react-native";
import {CommunityNewsItem} from "@/types";
import { NewsItem } from "./NewsItem";

interface NewsProps {
    data: CommunityNewsItem[]
}

export function News({data}: NewsProps) {
    return (
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
            // contentContainerStyle={styles.container}
        />
    )
}