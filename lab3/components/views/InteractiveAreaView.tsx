import React, {forwardRef, ReactNode} from "react";
import {Animated, StyleSheet, View} from "react-native";
import {usePosition, useScale, useScore} from "@/store";

interface InteractiveAreaViewProps {
    children?: ReactNode
}

export const InteractiveAreaView = forwardRef<View, InteractiveAreaViewProps>(({children}, ref) => {
    return (
        <Animated.View style={styles.innerInteractiveArea} ref={ref}>
            {children}
        </Animated.View>
    )
})

const styles = StyleSheet.create({
    innerInteractiveArea: {
        flex: 1,
        width: '100%',
        height: '100%',
        borderRadius: 75,
    },
});