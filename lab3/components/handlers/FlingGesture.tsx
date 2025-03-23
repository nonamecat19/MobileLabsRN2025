import React, { ReactNode, forwardRef } from "react";
import { Directions, FlingGestureHandler } from "react-native-gesture-handler";
import {useAddPoints, useAddStat} from "@/store";

interface FlingGestureProps {
    children?: ReactNode;
}

export const FlingGesture = forwardRef(
    ({ children }: FlingGestureProps, ref) => {
        const addPoints = useAddPoints();
        const addSwipeLeftStat = useAddStat("swipeLeftCount")
        const addSwipeRightStat = useAddStat("swipeRightCount")

        function addSwipePoints() {
            addPoints(Math.floor(Math.random() * 10));
        }

        function handleLeftSwipe() {
            addSwipeLeftStat()
            addSwipePoints()
        }

        function handleRightSwipe() {
            addSwipeRightStat()
            addSwipePoints()
        }

        return (
            <FlingGestureHandler ref={ref} direction={Directions.RIGHT} onActivated={handleRightSwipe}>
                <FlingGestureHandler direction={Directions.LEFT} onActivated={handleLeftSwipe}>
                    {children}
                </FlingGestureHandler>
            </FlingGestureHandler>
        );
    }
);