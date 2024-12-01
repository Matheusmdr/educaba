import * as Haptics from "expo-haptics";
import { MoreHorizontal } from "lucide-react-native";

import { Button } from "../ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ContextMenu, ContextMenuTrigger } from "../ui/context-menu";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Menu } from "./components/menu";

function RecordCard() {
  return (
    <DropdownMenu>
      <ContextMenu>
        <ContextMenuTrigger onLongPress={() => Haptics.selectionAsync()}>
          <Card className="flex flex-row items-center justify-between rounded-2xl px-6">
            <CardHeader className="px-0">
              <CardTitle className="font-poppins-semibold text-lg leading-normal">
                Registro 1 - Conjunto 1
              </CardTitle>
              <CardDescription className="font-poppins-light text-sm leading-normal">
                01/01/2025
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

export { RecordCard };
