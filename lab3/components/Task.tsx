import {StyleSheet, Text, View} from "react-native";

interface TaskProps {
    title: string
    current: number
    required: number
}

export function Task({title, current, required}: TaskProps) {
    const isCompleted = current >= required

    let containerStyles = styles.container

    if (isCompleted) {
        containerStyles = {
            ...containerStyles,
            ...styles.containerSuccess
        }
    }

    return (
        <View style={containerStyles}>
            <Text style={styles.title}>
                {title}
            </Text>
            {
                isCompleted || (
                    <Text>
                        Progress: {current} of {required}
                    </Text>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        borderColor: "#a1a1a1",
        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: "#fff"
    },
    containerSuccess: {
        backgroundColor: "#c6ffd1"
    },
    title: {}
})