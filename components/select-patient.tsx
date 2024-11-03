import { Link } from "expo-router";

import { Button } from "./ui/button";
import { P } from "./ui/typography";

import { ChevronDown } from "@/lib/icons/ChevronDown";

function SelectPatient() {
  const currentPatientName = "John Doe";

  return (
    <Link href="../patients" asChild>
      <Button
        variant={"ghost"}
        className="mx-auto flex flex-row items-center gap-2"
      >
        <P>{currentPatientName}</P>
        <ChevronDown size={16} className="text-[#002055] dark:text-white" />
      </Button>
    </Link>
  );
}

export { SelectPatient };
