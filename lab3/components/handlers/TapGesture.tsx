import React, {forwardRef, ReactNode} from "react";
import {TapGestureHandler} from "react-native-gesture-handler";
import {useAddPoints, useAddStat} from "@/store";

interface SingleTapGestureProps {
    children?: ReactNode
}

export const TapGesture = forwardRef(({children}: SingleTapGestureProps, ref) => {
    const addPoints = useAddPoints();
    const addSingleTapStat = useAddStat("singleTaps")
    const addDoubleTapStat = useAddStat("doubleTaps")

    function handleSingleTap() {
        addPoints(1)
        addSingleTapStat()
    }

    function handleMultipleTap() {
        addPoints(2)
        addDoubleTapStat()
    }

    return (
        <TapGestureHandler
            ref={ref}
            onActivated={handleSingleTap}
            maxDelayMs={100}
        >
            <TapGestureHandler
                onActivated={handleMultipleTap}
                numberOfTaps={2}
            >
                {children}
            </TapGestureHandler>
        </TapGestureHandler>
    );
});
