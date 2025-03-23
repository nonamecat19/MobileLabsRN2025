import {atom, useAtom, useAtomValue} from "jotai"

type Stats = {
    singleTaps: number
    doubleTaps: number
    longTaps: number
    moveCount: number
    swipeLeftCount: number
    swipeRightCount: number
    changeSizeCount: number
}

const defaultStat: Stats = {
    singleTaps: 0,
    doubleTaps: 0,
    longTaps: 0,
    moveCount: 0,
    swipeLeftCount: 0,
    swipeRightCount: 0,
    changeSizeCount: 0
}

const statsAtom = atom<Stats>(defaultStat)

export function useStats() {
    return useAtom(statsAtom)
}

export function useGetStats() {
    return useAtomValue(statsAtom)
}

export function useAddStat(name: keyof Stats) {
    const [stats, setStats] = useStats()
    const newStats = {...stats}

    return (count: number = 1) => {
        newStats[name] += count
        setStats(newStats)
    }
}