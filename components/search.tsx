import {
  Filter,
  Search as LucideSearch,
  SlidersHorizontal,
} from "lucide-react-native";
import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Input } from "./ui/input";
import { Text } from "./ui/text";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

function Search() {
  const [search, setSearch] = useState("");
  const [filterVisible, setFilterVisible] = useState(false);

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  return (
    <Dialog>
      <View className="p-4">
        <View className="flex-row items-center border border-gray-300 rounded-xl px-4 py-1">
          <LucideSearch size={20} color="#A29EB6" className="mr-2" />
          <Input
            className="flex-1 h-10 text-base border-transparent"
            placeholder="Pesquisar"
            value={search}
            onChangeText={(text) => setSearch(text)}
          />
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size={"icon"}
              className="border-transparent px-0"
            >
              <SlidersHorizontal size={20} color="#A29EB6" className="ml-2" />
            </Button>
          </DialogTrigger>
        </View>
      </View>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button>
              <Text>OK</Text>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export { Search };
