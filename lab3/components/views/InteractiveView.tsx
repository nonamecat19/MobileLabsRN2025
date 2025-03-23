import {forwardRef, ReactNode} from "react";
import {Animated, StyleSheet, View} from "react-native";
import {usePosition, useScale, useScore} from "@/store";

interface InteractiveViewProps {
    children?: ReactNode
}

export const InteractiveView = forwardRef<View, InteractiveViewProps>(({children}, ref) => {
    const [scale] = useScale();
    const [position] = usePosition()

    return (
        <Animated.View
            ref={ref}
            style={[
                styles.interactiveObject,
                {
                    transform: [
                        {translateX: position.x},
                        {translateY: position.y},
                        {scale},
                    ],
                },
            ]}
        >
            {children}
        </Animated.View>
    )
})

const styles = StyleSheet.create({
    interactiveObject: {
        width: 150,
        height: 150,
        backgroundColor: '#533db6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 75,
    },
});