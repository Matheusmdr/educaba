import "@/global.css";
import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/tabbar-icon";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const { colorScheme } = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorScheme === "dark" ? "#fff" : "#000",
        headerShown: false,
        tabBarLabel: () => null,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: colorScheme === "dark" ? "#000" : "#fff",
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
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={focused ? "home-filled" : "home"} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="programs"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={focused ? "programs-outline" : "programs"} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={focused ? "analytics-outline" : "analytics"} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="config"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={focused ? "settings-outline" : "settings"} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
