import {FlatList, StyleSheet} from 'react-native';
import news from "@/assets/news.json"
import NewsItem from "@/components/NewsItem";

export default function HomeScreen() {
    return (
        <FlatList
            data={news}
            keyExtractor={(_, index) => index.toString()}
            numColumns={1}
            renderItem={({item}) => (
                <NewsItem
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    date={item.date}
                />
            )}
            contentContainerStyle={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 8,
        padding: 8
    }
});
