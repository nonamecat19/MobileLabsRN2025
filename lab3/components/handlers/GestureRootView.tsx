import {ReactNode} from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {StyleSheet} from "react-native";

interface GestureRootViewProps {
    children: ReactNode
}

export function GestureRootView({children}: GestureRootViewProps) {
    return (
        <GestureHandlerRootView style={styles.container}>
            {children}
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
});