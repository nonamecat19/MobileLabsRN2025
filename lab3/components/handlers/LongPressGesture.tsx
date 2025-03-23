import React, { ReactNode, forwardRef } from "react";
import { LongPressGestureHandler } from "react-native-gesture-handler";
import { useAddPoints } from "@/store";

interface LongPressGestureProps {
    children?: ReactNode;
}

export const LongPressGesture = forwardRef(
    ({ children }: LongPressGestureProps, ref) => {
        const addPoints = useAddPoints();

        return (
            <LongPressGestureHandler
                ref={ref}
                onActivated={() => addPoints(15)}
                minDurationMs={3000}
            >
                {children}
            </LongPressGestureHandler>
        );
    }
);