import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavigationItems } from "./NavLinks";
import { LucideMenu, MenuSquareIcon } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export function MobileSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size={"icon"}>
          <LucideMenu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Enilno</SheetTitle>
          <SheetDescription>Make changes to your life here.</SheetDescription>
        </SheetHeader>
        <div className="my-5">
          <NavigationItems />
        </div>
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
