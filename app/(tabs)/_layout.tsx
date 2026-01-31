import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'nativewind';
import React from 'react';

export default function TabLayout() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: isDark ? '#1e293b' : '#ffffff',
          borderTopColor: isDark ? '#334155' : '#e5e7eb',
        },
        tabBarActiveTintColor: '#F97316',
        tabBarInactiveTintColor: isDark ? '#94a3b8' : '#9ca3af',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '首頁',
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="pets"
        options={{
          title: '找毛孩',
          tabBarIcon: ({ color }) => <FontAwesome name="paw" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="walkers"
        options={{
          title: '找陪伴',
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
