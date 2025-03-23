import React, {forwardRef, ReactNode} from "react";
import {TapGestureHandler} from "react-native-gesture-handler";
import {useAddPoints} from "@/store";

interface SingleTapGestureProps {
    children?: ReactNode
}

export const TapGesture = forwardRef(({children}: SingleTapGestureProps, ref) => {
    const addPoints = useAddPoints();

    return (
        <TapGestureHandler
            ref={ref}
            onActivated={() => addPoints(1)}
            maxDelayMs={100}
        >
            <TapGestureHandler
                onActivated={() => addPoints(2)}
                numberOfTaps={2}
            >
                {children}
            </TapGestureHandler>
        </TapGestureHandler>
    );
});
