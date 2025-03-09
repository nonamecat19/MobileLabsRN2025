import {StyleSheet, Text, View} from "react-native";
import SampleImage from "@/components/SampleImage";

interface NewsItemProps {
    title: string;
    description: string;
    date: string;
}

export default function NewsItem({title, description, date}: NewsItemProps) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <SampleImage width={80} height={60}/>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#d7d7d7",
        borderRadius: 8
    },
    imageContainer: {
        padding: 10
    },
    content: {
        width: 270
    },
    title: {
        color: "#1b93c6",
        fontWeight: "bold"
    },
    description: {
        fontSize: 10,
    },
    date: {
        color: "#580000",
        fontSize: 10,
    }
})