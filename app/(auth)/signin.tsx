import { Header, HeaderWithLead } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Muted, Small } from "@/components/ui/typography";
import { View } from "react-native";
import { Form } from "./_components/form";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  return (
    <SafeAreaView className="flex-1 p-6 gap-8">
      <Header title="Sign In" backButtonLink="/" />
      <View className="gap-4">
        <View>
          <HeaderWithLead title="Bem vindo(a) de volta" />
          <Small className="font-normal text-gray-500 w-3/4">
            Por favor, insira seu endereço de e-mail e senha para login
          </Small>
        </View>
        <Form />
      </View>
    </SafeAreaView>
  );
}
