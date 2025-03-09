import {StyleSheet, View} from "react-native";
import {Image} from 'react-native';

interface SampleImageProps {
    height?: number;
    width?: number;
    borderRadius?: number;
}

export default function SampleImage({height = 200, width = 200, borderRadius = 10}: SampleImageProps) {
    const id = Math.ceil(Math.random() * 256)

    return (
        <View style={styles.container}>
            <Image
                source={{uri: `https://picsum.photos/id/${id}/${width}/${height}`}}
                style={{height, width, borderRadius, overflow: "hidden"}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});