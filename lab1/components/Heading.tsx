import {StyleSheet, Text, View} from "react-native";

interface HeadingProps {
    title: string
}

export default function Heading({title}: HeadingProps) {
    return (
        <Text style={styles.text}>
            {title}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontWeight: "bold",
        padding: 5
    }
})