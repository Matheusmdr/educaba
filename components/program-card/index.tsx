import * as Haptics from "expo-haptics";

import { Button } from "../ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ContextMenu, ContextMenuTrigger } from "../ui/context-menu";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Menu } from "./components/menu";

import { MoreHorizontal } from "@/lib/icons/MoreHorizontal";

function ProgramCard() {
  return (
    <DropdownMenu>
      <ContextMenu>
        <ContextMenuTrigger onLongPress={() => Haptics.selectionAsync()}>
          <Card className="flex flex-row items-center justify-between rounded-2xl px-6">
            <CardHeader className="px-0">
              <CardTitle className="font-poppins-semibold text-lg leading-normal">
                Programa 1
              </CardTitle>
              <CardDescription className="font-poppins-light text-sm leading-normal">
                Descrição do programa
              </CardDescription>
            </CardHeader>
            <DropdownMenuTrigger asChild>
              <Button size={"icon"} variant={"outline"} className="px-0">
                <MoreHorizontal className="text-foreground" width={16} />
              </Button>
            </DropdownMenuTrigger>
          </Card>
        </ContextMenuTrigger>
        <Menu type="context" />
      </ContextMenu>
      <Menu type="dropdown" />
    </DropdownMenu>
  );
}

export { ProgramCard };
