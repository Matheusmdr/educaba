import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { HeaderWithLead } from "@/components/header";
import { ProgramCard } from "@/components/program-card";
import { Search } from "@/components/search";
import { SelectPatient } from "@/components/select-patient";
import { Button } from "@/components/ui/button";
import { Plus } from "@/lib/icons/Plus";

export default function ProgramsScreen() {
  return (
    <SafeAreaView className="flex-1 p-6">
      <SelectPatient />
      <HeaderWithLead title="Programas">
        <Button className="rounded-xl bg-blue-500" size={"icon"}>
          <Plus className="text-white" size={16} />
        </Button>
      </HeaderWithLead>
      <Search />
      <View className="gap-4">
        <ProgramCard />
        <ProgramCard />
        <ProgramCard />
      </View>
    </SafeAreaView>
  );
}
