import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Form } from "./_components/form";

import { Header, HeaderWithLead } from "@/components/header";
import { Small } from "@/components/ui/typography";

export default function SignIn() {
  return (
    <SafeAreaView className="flex-1 gap-8 p-6">
      <Header title="Sign In" backButtonLink="/" />
      <View className="gap-4">
        <View>
          <HeaderWithLead title="Bem vindo(a) de volta" />
          <Small className="w-3/4 font-normal leading-normal text-gray-500">
            Por favor, insira seu endereço de e-mail e senha para login
          </Small>
        </View>
        <Form />
      </View>
    </SafeAreaView>
  );
}
