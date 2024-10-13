import { Text, View } from "react-native";

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return (
    <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
      <View className="flex-1">
        <Text className="text-[#002055]  text-xl font-heading mt-2">
          {title}
        </Text>
      </View>
    </View>
  );
}

export { Header };
