import {atom, useAtom} from "jotai"
import {Animated} from "react-native";
import Value = Animated.Value;

const scaleAtom = atom<Value>(new Animated.Value(1))

export function useScale() {
    return useAtom(scaleAtom)
}