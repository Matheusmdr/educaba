import { View } from "react-native";

import AnalyticsOutline from "@/assets/images/tab-icons/analytics-outline.svg";
import Analytics from "@/assets/images/tab-icons/analytics.svg";
import HomeFilled from "@/assets/images/tab-icons/home-filled.svg";
import Home from "@/assets/images/tab-icons/home.svg";
import ProgramsOutline from "@/assets/images/tab-icons/programs-outline.svg";
import Programs from "@/assets/images/tab-icons/programs.svg";
import SettingsOutline from "@/assets/images/tab-icons/settings-outline.svg";
import Settings from "@/assets/images/tab-icons/settings.svg";

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
      <Icon className="h-6 w-6" />
      {focused && <View className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />}
    </>
  );
}

export { TabBarIcon };
