import { HeaderWithLead } from "@/components/header";
import { SafeAreaView } from "react-native-safe-area-context";
import { SelectPatient } from "@/components/select-patient";
import { Search } from "@/components/search";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Text, View } from "react-native";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function HomeScreen() {
  const [selectedTab, setSelectedTab] = React.useState("general");

  return (
    <SafeAreaView className="flex-1 pt-8 bg-white h-full px-6">
      <SelectPatient />
      <HeaderWithLead title="Dashboard" />
      <Search />
      <Tabs
        value={selectedTab}
        onValueChange={setSelectedTab}
        className="w-full max-w-[400px] mx-auto flex-col gap-1.5"
      >
        <TabsList className="flex-row w-full">
          <TabsTrigger value="general" className="flex-1">
            <Text>General</Text>
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex-1">
            <Text>Analytics</Text>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="gap-4 native:gap-2">
              <View className="gap-1">
                <Label nativeID="name">Name</Label>
                <Input
                  aria-aria-labelledby="name"
                  defaultValue="Pedro Duarte"
                />
              </View>
              <View className="gap-1">
                <Label nativeID="username">Username</Label>
                <Input id="username" defaultValue="@peduarte" />
              </View>
            </CardContent>
            <CardFooter>
              <Button>
                <Text className="text-white">Save changes</Text>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="gap-4 native:gap-2">
              <View className="gap-1">
                <Label nativeID="name">Name</Label>
                <Input
                  aria-aria-labelledby="name"
                  defaultValue="Pedro Duarte"
                />
              </View>
              <View className="gap-1">
                <Label nativeID="username">Username</Label>
                <Input id="username" defaultValue="@peduarte" />
              </View>
            </CardContent>
            <CardFooter>
              <Button>
                <Text className="text-white">Save fdfd</Text>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </SafeAreaView>
  );
}
