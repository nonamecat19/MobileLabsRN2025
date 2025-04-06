import {atom, useAtom} from "jotai";
import {Task} from "@/types";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from "react";

export const TASKS_STORAGE_KEY = '@todo_tasks';

const tasksAtom = atom<Task[]>([]);

const loadTasksFromStorage = async (): Promise<Task[]> => {
    try {
        const storedTasks = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
        if (storedTasks) {
            const parsedTasks: Task[] = JSON.parse(storedTasks);
            return parsedTasks.map(task => ({
                ...task,
                reminderTime: new Date(task.reminderTime),
            }));
        }
    } catch (error) {
        console.error('Failed to load tasks:', error);
    }
    return [];
};

const saveTasksToStorage = async (tasks: Task[]): Promise<void> => {
    try {
        await AsyncStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
        console.error('Failed to save tasks:', error);
    }
};

export function useTasks() {
    const [tasks, setTasks] = useAtom(tasksAtom);

    useEffect(() => {
        const initialize = async () => {
            const storedTasks = await loadTasksFromStorage();
            setTasks(storedTasks);
        };

        void initialize();
    }, [setTasks]);

    const setTasksWithStorage = async (newTasks: Task[] | ((prev: Task[]) => Task[])) => {
        const updatedTasks = typeof newTasks === 'function'
            ? newTasks(tasks)
            : newTasks;

        setTasks(updatedTasks);

        await saveTasksToStorage(updatedTasks);
    };

    return [tasks, setTasksWithStorage] as const;
}
