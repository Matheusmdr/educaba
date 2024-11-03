import * as Haptics from "expo-haptics";
import { Text, View } from "react-native";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ContextMenu, ContextMenuTrigger } from "../ui/context-menu";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Menu } from "./components/menu";

import { MoreHorizontal } from "@/lib/icons/MoreHorizontal";

const GITHUB_AVATAR_URI = "https://github.com/shadcn.png";

function PatientCard() {
  return (
    <DropdownMenu>
      <ContextMenu>
        <ContextMenuTrigger onLongPress={() => Haptics.selectionAsync()}>
          <Card className="flex flex-row items-center justify-between rounded-2xl px-6">
            <CardHeader className="flex flex-row items-center gap-4 px-0">
              <Avatar alt="Zach Nugent's Avatar">
                <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
                <AvatarFallback>
                  <Text>ZN</Text>
                </AvatarFallback>
              </Avatar>
              <View>
                <CardTitle className="font-poppins-semibold text-lg leading-normal">
                  Jane Doe
                </CardTitle>
                <CardDescription className="font-poppins-light text-sm leading-normal">
                  janedoe@gmail.com
                </CardDescription>
              </View>
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

export { PatientCard };
