import { View } from "react-native";

import { H1 } from "../../ui/typography";

type HeaderWithLeadProps = {
  title: string;
  children?: React.ReactNode;
};

function HeaderWithLead({ title, children }: HeaderWithLeadProps) {
  return (
    <View className="flex flex-row items-center justify-between pb-5">
      <H1 className="text-2xl leading-normal text-[#002055] dark:text-white">{title}</H1>
      {children}
    </View>
  );
}

export { HeaderWithLead };
