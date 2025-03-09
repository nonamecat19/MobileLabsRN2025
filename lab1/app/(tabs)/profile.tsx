import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity} from "react-native";
import Heading from "@/components/Heading";

export default function ProfileScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Heading title="Реєстрація"/>

            <TextInput
                style={styles.input}
                placeholder="Електронна пошта"
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Пароль"
                secureTextEntry
            />

            <TextInput
                style={styles.input}
                placeholder="Пароль (ще раз)"
                secureTextEntry
            />

            <TextInput
                style={styles.input}
                placeholder="Прізвище"
            />

            <TextInput
                style={styles.input}
                placeholder="Ім'я"
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Зареєструватись</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },

    input: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});