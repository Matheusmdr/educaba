import { useRouter } from "expo-router";

import { ChevronLeft } from "@/lib/icons/ChevronLeft";
import { Button, ButtonProps } from "./ui/button";

interface BackButtonProps extends ButtonProps {
  link?: string;
}

function BackButton({ link, ...rest }: BackButtonProps) {
  const router = useRouter();

  const handleBackButtonPress = () => {
    const canGoBack = router.canGoBack();

    if (canGoBack) {
      router.back();
    }
  };

  return (
    <Button
      variant={"outline"}
      size={"icon"}
      className="rounded-full"
      onPress={handleBackButtonPress}
      {...rest}>
      <ChevronLeft size={20} className="text-[#002055] dark:text-white" />
    </Button>
  );
}

export { BackButton };
