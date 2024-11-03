import { ContextMenuContent, ContextMenuItem } from "@/components/ui/context-menu";
import { DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Pen } from "@/lib/icons/Pen";
import { Trash } from "@/lib/icons/Trash";
import { Text } from "react-native";

interface MenuProps {
  type: "context" | "dropdown";
}

function Menu({ type }: MenuProps) {
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 12,
    right: 12,
  };

  const MenuContent = type === "context" ? ContextMenuContent : DropdownMenuContent;
  const MenuItem = type === "context" ? ContextMenuItem : DropdownMenuItem;

  return (
    <MenuContent
      align="start"
      insets={contentInsets}
      className="native:w-fit items-start rounded-xl p-4"
      overlayStyle={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}>
      <MenuItem className="rounded-xl">
        <Pen className="text-primary" width={16} />
        <Text className="font-poppins-normal text-primary">Editar Paciente</Text>
      </MenuItem>
      <MenuItem className="rounded-xl">
        <Trash className="text-destructive" width={16} />
        <Text className="font-poppins-normal text-destructive">Excluir Paciente</Text>
      </MenuItem>
    </MenuContent>
  );
}

export { Menu };
