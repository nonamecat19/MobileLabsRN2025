import {StyleSheet, View} from "react-native";
import {Image} from 'react-native';
import {StyleProp} from "react-native/Libraries/StyleSheet/StyleSheet";
import {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";

interface SampleImageProps {
    height?: number;
    width?: number;
    style?: StyleProp<ViewStyle>;
}

export default function SampleImage({height = 200, width = 200}: SampleImageProps) {
    const id = Math.ceil(Math.random() * 256)

    return (
        <View style={styles.container}>
            <Image
                source={{uri: `https://picsum.photos/id/${id}/${width}/${height}`}}
                style={{height, width}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        overflow: "hidden",
    },
});