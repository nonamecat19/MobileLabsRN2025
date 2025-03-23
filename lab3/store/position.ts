import {atom, useAtom} from "jotai"

type Position = {
    x: number,
    y: number
}

const positionAtom = atom<Position>({ x: 0, y: 0 })

export function usePosition() {
    return useAtom(positionAtom)
}