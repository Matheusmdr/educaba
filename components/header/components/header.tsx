import { View } from "react-native";

import { BackButton } from "@/components/back-button";
import { P } from "@/components/ui/typography";

interface HeaderProps {
  title: string;
  backButtonLink?: string;
}

function Header({ title, backButtonLink }: HeaderProps) {
  return (
    <View className="w-full">
      <View className="flex flex-row items-center justify-between">
        {!!backButtonLink && backButtonLink.trim() && (
          <View className="basis-1/3">
            <BackButton />
          </View>
        )}
        <View className="flex basis-1/3 items-center justify-center">
          <P className="text-center text-lg">{title}</P>
        </View>

        <View className="basis-1/3" />
      </View>
    </View>
  );
}

export { Header };
