import React, { ReactNode, forwardRef } from "react";
import { Directions, FlingGestureHandler } from "react-native-gesture-handler";
import { useAddPoints } from "@/store";

interface FlingGestureProps {
    children: ReactNode;
}

export const FlingGesture = forwardRef(
    ({ children }: FlingGestureProps, ref) => {
        const addPoints = useAddPoints();

        function handleOnActivated() {
            addPoints(Math.floor(Math.random() * 10));
        }

        return (
            <FlingGestureHandler ref={ref} direction={Directions.RIGHT} onActivated={handleOnActivated}>
                <FlingGestureHandler direction={Directions.LEFT} onActivated={handleOnActivated}>
                    {children}
                </FlingGestureHandler>
            </FlingGestureHandler>
        );
    }
);