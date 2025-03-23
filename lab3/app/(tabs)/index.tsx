import React from 'react';
import {Animated, StyleSheet, Text} from 'react-native';
import {usePosition, useScale, useScore} from "@/store";
import {
    FlingGesture,
    GestureRootView,
    LongPressGesture,
    PanGesture,
    PinchGesture,
    TapGesture
} from "@/components/handlers";

export default function HomeScreen() {
    const [score] = useScore();
    const [scale] = useScale();
    const [position] = usePosition()

    return (
        <GestureRootView>
            <Text>Position: {position.x}, {position.y}</Text>
            <Text style={styles.score}>Score: {score}</Text>

            <PanGesture>
                <Animated.View
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
                    <TapGesture>
                        <LongPressGesture>
                            <PinchGesture>
                                <FlingGesture>
                                    <Animated.View style={styles.innerInteractiveArea}/>
                                </FlingGesture>
                            </PinchGesture>
                        </LongPressGesture>
                    </TapGesture>
                </Animated.View>
            </PanGesture>
        </GestureRootView>
    );
}

const styles = StyleSheet.create({
    score: {
        fontSize: 24,
        marginBottom: 16,
    },
    interactiveObject: {
        width: 150,
        height: 150,
        backgroundColor: '#4caf50',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 75,
    },
    innerInteractiveArea: {
        flex: 1,
        width: '100%',
        height: '100%',
        borderRadius: 75,
    },
});