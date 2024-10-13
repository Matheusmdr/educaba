import { View } from "react-native";

import Home from "@/assets/images/tab-icons/home.svg";
import HomeFilled from "@/assets/images/tab-icons/home-filled.svg";
import Programs from "@/assets/images/tab-icons/programs.svg";
import ProgramsOutline from "@/assets/images/tab-icons/programs-outline.svg";
import Analytics from "@/assets/images/tab-icons/analytics.svg";
import AnalyticsOutline from "@/assets/images/tab-icons/analytics-outline.svg";
import Settings from "@/assets/images/tab-icons/settings.svg";
import SettingsOutline from "@/assets/images/tab-icons/settings-outline.svg";

const icons = {
  home: Home,
  programs: Programs,
  analytics: Analytics,
  settings: Settings,
  "home-filled": HomeFilled,
  "programs-outline": ProgramsOutline,
  "analytics-outline": AnalyticsOutline,
  "settings-outline": SettingsOutline,
};

interface TabBarIconProps {
  name: keyof typeof icons;
  focused: boolean;
}

function TabBarIcon({ focused, name }: TabBarIconProps) {
  const Icon = icons[name];

  return (
    <>
      <Icon className="w-6 h-6" />
      {focused && (
        <View className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
      )}
    </>
  );
}

export { TabBarIcon };
