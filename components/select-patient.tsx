import { P } from "./ui/typography";
import { ChevronDown } from "lucide-react-native";
import { Button } from "./ui/button";

function SelectPatient() {
  const currentPatientName = "John Doe";

  return (
    <Button
      variant={"ghost"}
      className="flex flex-row gap-2 items-center mx-auto"
    >
      <P>{currentPatientName}</P>
      <ChevronDown size={16} color={"#002055"} />
    </Button>
  );
}

export { SelectPatient };
