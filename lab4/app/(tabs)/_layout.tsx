import {Tabs} from 'expo-router';
import React from 'react';
import {IconSymbol} from '@/components/ui/IconSymbol';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    display: 'none'
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({color}: any) => <IconSymbol size={28} name="house.fill" color={color}/>,
                }}
            />
        </Tabs>
    );
}
