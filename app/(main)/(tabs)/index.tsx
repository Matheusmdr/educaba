import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { HeaderWithLead } from "@/components/header";
import { ProgramCard } from "@/components/program-card";
import { Search } from "@/components/search";
import { SelectPatient } from "@/components/select-patient";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export default function HomeScreen() {
  const [selectedTab, setSelectedTab] = React.useState("general");

  return (
    <SafeAreaView className="flex-1 p-6">
      <SelectPatient />
      <HeaderWithLead title="Dashboard" />
      <Search />
      <Tabs
        value={selectedTab}
        onValueChange={setSelectedTab}
        className="mx-auto w-full max-w-[400px] flex-col gap-4">
        <TabsList className="w-full flex-row bg-transparent">
          <TabsTrigger value="general" className="flex-1 py-2">
            <Text
              className={cn(
                "font-poppins-semibold text-sm text-foreground",
                selectedTab === "general" && "!text-secondary",
              )}>
              Visão Geral
            </Text>
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex-1 py-2">
            <Text
              className={cn(
                "font-poppins-semibold text-sm text-foreground",
                selectedTab === "analytics" && "!text-secondary",
              )}>
              Analytics
            </Text>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="gap-4">
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
        </TabsContent>
        <TabsContent value="analytics"></TabsContent>
      </Tabs>
    </SafeAreaView>
  );
}
