import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Task} from "@/types";
import {FontAwesome} from "@expo/vector-icons";

interface Props {
    task: Task;
    onDelete: (id: string) => void;
}

export function TaskItem({task, onDelete}: Props) {
    function handleDelete() {
        onDelete(task.id);
    }

    const formatDateTime = (date: Date) => {
        return `${date.toLocaleDateString()} at ${date.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        })}`;
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{task.title}</Text>
                {task.description ? (
                    <Text style={styles.description}>{task.description}</Text>
                ) : null}
                <Text style={styles.time}>
                    Reminder: {formatDateTime(task.reminderTime)}
                </Text>
            </View>

            <TouchableOpacity
                style={styles.deleteButton}
                onPress={handleDelete}
            >
                <Text style={styles.deleteButtonText}>
                    <FontAwesome name="trash-o" size={24} color="white"/>
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 6,
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    time: {
        fontSize: 12,
    },
    deleteButton: {
        backgroundColor: '#ff4444',
        borderRadius: 6,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    deleteButtonText: {
        color: 'white',
        fontWeight: '600',
    },
});
