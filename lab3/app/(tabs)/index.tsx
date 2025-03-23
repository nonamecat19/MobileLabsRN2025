import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useScore} from "@/store";
import {FlingGesture, LongPressGesture, PanGesture, PinchGesture, TapGesture} from "@/components/handlers";
import {GestureRootView, InteractiveAreaView, InteractiveView} from "@/components/views";

export default function HomeScreen() {
    const [score] = useScore();

    return (
        <GestureRootView>
            <Text style={styles.score}>Score: {score}</Text>

            <PanGesture>
                <InteractiveView>
                    <TapGesture>
                        <LongPressGesture>
                            <PinchGesture>
                                <FlingGesture>
                                    <InteractiveAreaView/>
                                </FlingGesture>
                            </PinchGesture>
                        </LongPressGesture>
                    </TapGesture>
                </InteractiveView>
            </PanGesture>
        </GestureRootView>
    );
}

const styles = StyleSheet.create({
    score: {
        fontSize: 24,
        marginBottom: 32,
    },
});