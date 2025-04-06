import {Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import {TaskItem} from "@/components/TaskItem";
import {Header} from "@/components/Header";
import {SelectDate} from "@/components/SelectDate";
import {useTasks} from "@/hooks/useTodo";
import {useState} from "react";
import {Task} from "@/types";
import {cancelNotification, scheduleNotification} from "@/lib/notifications";

export default function HomeScreen() {
    const [tasks, setTasks] = useTasks()

    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [date, setDate] = useState<Date | null>(null)

    async function deleteTask(id: string) {
        const updatedTasks = tasks.filter(task => task.id !== id);
        await setTasks(updatedTasks);
        await cancelNotification(id)
    }

    async function handleAddTask() {
        if (!name || !date) {
            return;
        }

        const newTask: Task = {
            id: await scheduleNotification(name, description, date),
            title: name,
            description,
            reminderTime: date,
        }
        const updatedTasks = [...tasks, newTask]
        await setTasks(updatedTasks)
        setDate(null)
        setName('')
        setDescription('')
    }

    return (
        <View style={styles.container}>
            <Header/>

            <TextInput
                placeholder="Name"
                style={styles.input}
                value={name}
                onChange={(e) => setName(e.nativeEvent.text)}
            />
            <TextInput
                placeholder="Description"
                style={styles.input}
                value={description}
                onChange={(e) => setDescription(e.nativeEvent.text)}
            />

            <SelectDate value={date} onChange={setDate}/>

            <Button title="Add task" onPress={handleAddTask}/>

            {tasks.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>No tasks yet. Add your first task!</Text>
                </View>
            ) : (
                <FlatList
                    data={tasks}
                    contentContainerStyle={styles.tasksContainer}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <TaskItem task={item} onDelete={deleteTask}/>
                    )}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    input: {
        height: 40,
        borderColor: '#d7d7d7',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "white",
        padding: 10,
        marginBottom: 12,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 16,
        color: '#888',
    },
    tasksContainer: {
        padding: 10
    }
});
