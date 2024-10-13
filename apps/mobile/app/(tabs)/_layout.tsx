import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/tabbar-icon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { View } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarLabel: () => null,
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 70,
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.1,
          elevation: 10,
          overflow: "hidden",
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? "home-filled" : "home"}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="programs"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? "programs-outline" : "programs"}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? "analytics-outline" : "analytics"}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="config"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? "settings-outline" : "settings"}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
