import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useGetStats, useScore} from "@/store";
import {Task} from "@/components/Task";

interface StatItem {
    title: string
    current: number
    required: number
}

export default function TasksScreen() {
    const [score] = useScore();
    const stats = useGetStats()

    const tasks: StatItem[] = [
        {title: "10 Single taps", current: stats.singleTaps, required: 10},
        {title: "5 Double taps", current: stats.doubleTaps, required: 5},
        {title: "Press 3s", current: stats.longTaps, required: 1},
        {title: "Move object", current: stats.moveCount, required: 1},
        {title: "Swipe left", current: stats.swipeLeftCount, required: 1},
        {title: "Swipe right", current: stats.swipeRightCount, required: 1},
        {title: "Change object size", current: stats.swipeRightCount, required: 1},
        {title: "Score 100", current: score, required: 100}
    ]

    return (
        <FlatList
            data={tasks}
            keyExtractor={(_, index) => index.toString()}
            numColumns={1}
            renderItem={({item}) => (
                <Task
                    title={item.title}
                    current={item.current}
                    required={item.required}
                />
            )}
            contentContainerStyle={styles.listContainer}
        />
    );
}

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 10,
        gap: 10,
        paddingTop: 32
    }
});