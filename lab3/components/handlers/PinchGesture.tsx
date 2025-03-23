import React, { ReactNode, forwardRef } from "react";
import { PinchGestureHandler } from "react-native-gesture-handler";
import {useAddPoints, useScale} from "@/store";
import { Animated } from "react-native";

interface PinchGestureProps {
    children: ReactNode;
}

export const PinchGesture = forwardRef(
    ({ children }: PinchGestureProps, ref) => {
        const [, setScale] = useScale();
        const addPoints = useAddPoints()

        return (
            <PinchGestureHandler
                ref={ref}
                onGestureEvent={(event) => {
                    const scaleFactor = Math.max(1, event.nativeEvent.scale);
                    setScale(new Animated.Value(scaleFactor));
                    addPoints(1)
                }}
            >
                {children}
            </PinchGestureHandler>
        );
    }
);