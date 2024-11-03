import { Pressable, Text, View } from "react-native";

import Google from "@/assets/images/google.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Small } from "@/components/ui/typography";

function Form() {
  return (
    <View className="gap-6 py-4">
      <Input
        placeholder="Insira seu Email"
        inputMode="email"
        className="native:h-14 rounded-2xl px-6"
      />
      <Input
        placeholder="Insira sua Senha"
        secureTextEntry={true}
        className="native:h-14 rounded-2xl px-6"
      />
      <Pressable className="self-end">
        <Small className="text-blue-500 underline">Esqueceu sua senha?</Small>
      </Pressable>
      <Button className="mt-6 rounded-2xl bg-blue-500">
        <Text className="font-poppins-semibold text-base text-white shadow-2xl shadow-blue-500">
          Sign In
        </Text>
      </Button>

      <View className="mt-6 gap-6">
        <Small className="text-center text-gray-500">Ou entre com</Small>
        <Button variant={"outline"} size={"icon"} className="mx-auto h-16 w-16 rounded-2xl">
          <Google />
        </Button>
      </View>
    </View>
  );
}

export { Form };
