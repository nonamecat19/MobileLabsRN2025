import {FlatList, StyleSheet, View} from 'react-native';
import news from "@/assets/news.json"
import NewsItem from "@/components/NewsItem";
import Heading from "@/components/Heading";

export default function HomeScreen() {
    return (
        <View>
            <Heading title="Новини"/>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 8,
        padding: 8
    }
});
