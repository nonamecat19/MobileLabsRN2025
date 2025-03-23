import {ReactNode} from "react";
import {PanGestureHandler, PinchGestureHandler, TapGestureHandler} from "react-native-gesture-handler";
import {useAddPoints, usePosition, useScale} from "@/store";
import {Animated} from "react-native";

interface SingleTapGestureProps {
    children: ReactNode
}

export function TapGesture({children}: SingleTapGestureProps) {
    const addPoints = useAddPoints()

    return (
        <TapGestureHandler
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
    )
}