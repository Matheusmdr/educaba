import { BackButton } from "@/components/back-button";
import { P } from "@/components/ui/typography";
import { View } from "react-native";

interface HeaderProps {
  title: string;
  backButtonLink?: string;
}

function Header({ title, backButtonLink }: HeaderProps) {
  return (
    <View className="w-full">
      <View className="flex flex-row justify-between items-center">
        {!!backButtonLink && backButtonLink.trim() && (
          <View className="basis-1/3">
            <BackButton />
          </View>
        )}
        <View className="basis-1/3 flex justify-center items-center">
          <P className="text-lg text-center">{title}</P>
        </View>

        <View className="basis-1/3" />
      </View>
    </View>
  );
}

export { Header };
