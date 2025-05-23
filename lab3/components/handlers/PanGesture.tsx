import React, { ReactNode, forwardRef } from "react";
import { PanGestureHandler } from "react-native-gesture-handler";
import {useAddStat, usePosition} from "@/store";

interface PanGestureProps {
    children?: ReactNode;
}

export const PanGesture = forwardRef(
    ({ children }: PanGestureProps, ref) => {
        const [, setPosition] = usePosition();
        const addMoveStat = useAddStat("moveCount")

        return (
            <PanGestureHandler
                ref={ref}
                onGestureEvent={(event) => {
                    setPosition({
                        x: event.nativeEvent.translationX,
                        y: event.nativeEvent.translationY,
                    });
                    addMoveStat()
                }}
                onEnded={() => setPosition({ x: 0, y: 0 })}
            >
                {children}
            </PanGestureHandler>
        );
    }
);