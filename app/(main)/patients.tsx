import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { HeaderWithLead } from "@/components/header";
import { PatientCard } from "@/components/patient-card";
import { Search } from "@/components/search";
import { Button } from "@/components/ui/button";

export default function PatientsScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <SafeAreaView className="flex-1 gap-4 p-6">
        <HeaderWithLead title="Selecione um paciente" />
        <Search />
        <View className="gap-4">
          <PatientCard />
          <PatientCard />
          <PatientCard />
        </View>
        <Button className="mt-6 rounded-2xl bg-blue-500">
          <Text className="font-poppins-semibold text-base text-white shadow-2xl shadow-blue-500">
            Adicionar Paciente
          </Text>
        </Button>
      </SafeAreaView>
    </>
  );
}
