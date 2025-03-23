import {atom, useAtom} from "jotai"

const scoreAtom = atom<number>(0)

export function useScore() {
    return useAtom(scoreAtom)
}

export function useAddPoints() {
    const [score, setScore] = useScore()

    return (value: number) => setScore(score + value)
}