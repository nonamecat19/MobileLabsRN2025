import {Tabs} from 'expo-router';
import React from 'react';
import {Platform} from 'react-native';

import {Colors} from '@/constants/Colors';
import {useColorScheme} from '@/hooks/useColorScheme';
import {FontAwesome, FontAwesome5} from "@expo/vector-icons";

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
                tabBarStyle: Platform.select({
                    ios: {
                        // Use a transparent background on iOS to show the blur effect
                        position: 'absolute',
                    },
                    default: {},
                }),
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({color}) => <FontAwesome5 name="home" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="photo"
                options={{
                    title: 'Фотогалерея',
                    tabBarIcon: ({color}) => <FontAwesome name="picture-o" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Профіль',
                    tabBarIcon: ({color}) => <FontAwesome name="user-o" size={24} color={color} />,
                }}
            />
        </Tabs>
    );
}
