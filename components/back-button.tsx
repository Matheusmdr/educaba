import { ChevronLeft } from "lucide-react-native";

import { Button } from "./ui/button";

interface BackButtonProps {
  link?: string;
}

function BackButton({ link }: BackButtonProps) {
  return (
    <Button variant={"outline"} size={"icon"} className="rounded-full">
      <ChevronLeft size={20} color={"#002055"} />
    </Button>
  );
}

export { BackButton };
