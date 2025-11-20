import {Tabs} from 'expo-router';
import React from 'react';

import {HapticTab} from '@/components/haptic-tab';
import {COLORS} from '@/styles/theme';
import {useColorScheme} from '@/hooks/use-color-scheme';
import {Ionicons} from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
          tabBarActiveTintColor: COLORS.yellowMid,
          tabBarInactiveTintColor: '#FFFFFF',
          headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons  size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
            title: 'Payments',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="swap-horizontal" color={color} />,
        }}
      />
        <Tabs.Screen
            name="history"
            options={{
                title: 'History',
                tabBarIcon: ({color}) => <Ionicons name="time-outline" size={28} color={color}/>,
            }}
        />
        <Tabs.Screen
            name="analytics"
            options={{
                title: 'Analytics',
                tabBarIcon: ({color}) => <Ionicons size={28} name="pie-chart" color={color}/>,
            }}
        />
        <Tabs.Screen
            name="chats"
            options={{
                title: 'Chats',
                tabBarIcon: ({color}) => <Ionicons name="chatbubbles" size={28}  color={color}/>,
            }}
        />
    </Tabs>
  );
}
