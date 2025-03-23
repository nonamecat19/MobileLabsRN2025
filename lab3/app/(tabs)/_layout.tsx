import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="house" color={color} />,
        }}
      />
        <Tabs.Screen
            name="tasks"
            options={{
                title: 'Tasks',
                tabBarIcon: ({ color }) => <MaterialIcons size={28} name="task" color={color} />,
            }}
        />
    </Tabs>
  );
}
