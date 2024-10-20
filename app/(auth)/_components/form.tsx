import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Small } from "@/components/ui/typography";
import { Text } from "react-native";
import { Pressable } from "react-native";
import { View } from "react-native";

import Google from "@/assets/images/google.svg";

function Form() {
  return (
    <View className="py-4 gap-6">
      <Input
        placeholder="Insira seu Email"
        inputMode="email"
        className="rounded-2xl native:h-14 px-6"
      />
      <Input
        placeholder="Insira sua Senha"
        secureTextEntry={true}
        className="rounded-2xl native:h-14 px-6"
      />
      <Pressable className="self-end">
        <Small className="text-blue-500 underline">Esqueceu sua senha?</Small>
      </Pressable>
      <Button className="bg-blue-500 mt-6 rounded-2xl">
        <Text className="text-base text-white font-poppins-semibold shadow-2xl shadow-blue-500">
          Sign In
        </Text>
      </Button>

      <View className="gap-6 mt-6">
        <Small className="text-gray-500 text-center">Ou entre com</Small>
        <Button
          variant={"outline"}
          size={"icon"}
          className="mx-auto h-16 w-16 rounded-2xl"
        >
          <Google />
        </Button>
      </View>
    </View>
  );
}

export { Form };
