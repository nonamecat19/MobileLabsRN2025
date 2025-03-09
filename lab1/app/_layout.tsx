import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {Stack} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import 'react-native-reanimated';

import {useColorScheme} from '@/hooks/useColorScheme';
import {StyleSheet, Text, View} from "react-native";

export default function RootLayout() {
    const colorScheme = useColorScheme();

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <View style={styles.headingContainer}>
                <Text>
                    FirstMobileApp
                </Text>
            </View>
            <Stack>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                <Stack.Screen name="+not-found"/>
            </Stack>
            <StatusBar style="auto"/>
            <View>
                <Text>
                    Шумський Олександр Вячеславович ВТ-21-1
                </Text>
            </View>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    headingContainer: {
        paddingTop: 30,
    }
})