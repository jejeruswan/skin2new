import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const inactiveColor = "FFFFFF80";
  const activeColor = "#FFFFFFF";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            backgroundColor: '#6B7698', 
            height: 80,
            paddingBottom: 20,
          },
          default: {
            backgroundColor: '#6B7698',
            height: 65,
            paddingBottom: 15,
          },
        }),
        tabBarIconStyle: {
          marginTop: 5,
        },
        tabBarItemStyle: {
          paddingTop: 5,
        },
        tabBarLabel: ({ focused, color }) => (
          <View style={{
            borderTopWidth: focused ? 3 : 0,
            borderTopColor: focused ? activeColor : 'transparent',
            width: '70%',
            position: 'absolute',
            top: 0,
            paddingTop: 3,
          }} />
        ),
      }}>
      <Tabs.Screen 
        name="Search" 
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <IconSymbol name="custom.search" size={24} color={color} />,
        }}
      />
      <Tabs.Screen 
        name="routine" 
        options={{
          title: 'routine',
          tabBarIcon: ({ color }) => <IconSymbol name="custom.star" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol name="custom.home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen 
        name="Saved" 
        options={{
          title: 'Saved',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="custom.bookmark" color={color} />,
        }}
      />
      <Tabs.Screen 
        name="Account" 
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="custom.account" color={color} />,
        }}
      />
    </Tabs>
  )
}