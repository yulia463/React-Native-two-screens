import {Tabs} from 'expo-router';
import React from 'react';

import {HapticTab} from '@/components/haptic-tab';
import {IconSymbol} from '@/components/ui/icon-symbol';
import {Colors} from '@/constants/theme';
import {useColorScheme} from '@/hooks/use-color-scheme';
import {Ionicons} from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
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
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="arrow.up.arrow.down.circle.fill" color={color} />,
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
                tabBarIcon: ({color}) => <IconSymbol size={28} name="chart.bar.fill" color={color}/>,
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
