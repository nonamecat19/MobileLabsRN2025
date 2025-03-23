import React, { ReactNode, forwardRef } from "react";
import { LongPressGestureHandler } from "react-native-gesture-handler";
import {useAddPoints, useAddStat} from "@/store";

interface LongPressGestureProps {
    children?: ReactNode;
}

export const LongPressGesture = forwardRef(
    ({ children }: LongPressGestureProps, ref) => {
        const addPoints = useAddPoints();
        const addStat = useAddStat("longTaps")

        function handleLongPress() {
            addPoints(15)
            addStat()
        }

        return (
            <LongPressGestureHandler
                ref={ref}
                onActivated={handleLongPress}
                minDurationMs={3000}
            >
                {children}
            </LongPressGestureHandler>
        );
    }
);