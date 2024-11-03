import { SafeAreaView } from "react-native-safe-area-context";

import { HeaderWithLead } from "@/components/header";
import { SelectPatient } from "@/components/select-patient";

export default function AnalyticsScreen() {
  return (
    <SafeAreaView className="flex-1 p-6">
      <SelectPatient />
      <HeaderWithLead title="Analytics" />
    </SafeAreaView>
  );
}
