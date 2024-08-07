import Link from "next/link";
import { MobileSheet } from "./MobileDrawer";
import { ModeToggle } from "./ModeToggle";
import { NavigationItems } from "./NavLinks";

const Header = () => {
  return (
    <div className="sticky top-0 left-0 z-40">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-2 ">
        <Link href={"/"}>
          <h4 className="scroll-m-20 text-md font-semibold tracking-tight my-5">
            Enilno courses
          </h4>
        </Link>
        <div className="hidden  sm:flex sm:items-center gap-5 bg-background opacity-90 rounded-sm hover:opacity-100 p-1">
          <NavigationItems />
          <ModeToggle />
        </div>
        <div className="sm:hidden flex flex-wrap gap-2">
          <ModeToggle />
          <MobileSheet />
        </div>
      </nav>
    </div>
  );
};

export default Header;
