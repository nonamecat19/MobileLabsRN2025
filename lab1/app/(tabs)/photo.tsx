import {FlatList, StyleSheet, View} from 'react-native';
import SampleImage from "@/components/SampleImage";

const IMAGE_HEIGHT = 120
const IMAGE_WIDTH = 180;

export default function PhotoScreen() {
    return (
        <FlatList
            data={new Array(10)}
            keyExtractor={(_, index) => index.toString()}
            numColumns={2}
            renderItem={() => (
                <View style={styles.item}>
                    <SampleImage width={IMAGE_WIDTH} height={IMAGE_HEIGHT}/>
                </View>
            )}
            contentContainerStyle={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        gap: 8
    },
    item: {
        flex: 1,
        alignItems: 'center',
    },
});