import { View } from "react-native";
import { H1 } from "../../ui/typography";

type HeaderWithLeadProps = {
  title: string;
};

function HeaderWithLead({ title }: HeaderWithLeadProps) {
  return (
    <View className="flex-row items-center pb-5">
      <View className="flex-1">
        <H1 className="text-[#002055] mt-2 text-2xl">{title}</H1>
      </View>
    </View>
  );
}

export { HeaderWithLead };
