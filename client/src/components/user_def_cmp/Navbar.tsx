import { Link } from "react-router-dom";
import avatrImg from "../../assets/shiva2img.jpeg";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HandPlatter,
  Hotel,
  ListOrderedIcon,
  Loader2,
  Menu,
  MenuIcon,
  Moon,
  PackageCheck,
  ShoppingCart,
  SquareMenu,
  Sun,
  User,
  UtensilsCrossed,
} from "lucide-react";

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

import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const admin = true;
  const loading = false;

  return (
    <>
      <div className="w-full mx-auto pt-1">
        <div className="flex justify-between items-center h-14  px-5 shadow-lg">
          <Link to={"/"}>
            {" "}
            <h1 className="font-bold md:font-extrabold text-2xl text-shadow">
              {" "}
              Shiv<span className="text-green-900">@</span>Eats
            </h1>
          </Link>
          {/* for desktop view  */}
          <div className=" hidden md:flex items-center gap-8">
            <div className="flex justify-between items-center gap-6">
              <Link to={"/"}> Home </Link>
              <Link to={"/profile"}> Profile </Link>
              <Link to={"/order/status"}> Order </Link>
            </div>

            {admin && (
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger className="cursor-pointer">
                    Dashboard
                  </MenubarTrigger>
                  <MenubarContent className="mr-5">
                    <Link to={"/admin/restorent"}>
                      <MenubarItem>
                        Restorent{" "}
                        <MenubarShortcut>
                          <Hotel />
                        </MenubarShortcut>
                      </MenubarItem>{" "}
                    </Link>
                    <Link to={"/admin/menu"}>
                      {" "}
                      <MenubarItem>
                        Menu{" "}
                        <MenubarShortcut>
                          <Menu />
                        </MenubarShortcut>
                      </MenubarItem>
                    </Link>
                    <Link to={"/admin/order"}>
                      {" "}
                      <MenubarItem>
                        Orders{" "}
                        <MenubarShortcut>
                          <ListOrderedIcon />
                        </MenubarShortcut>
                      </MenubarItem>{" "}
                    </Link>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            )}

            <div className="flex gap-4 items-center">
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Light</DropdownMenuItem>
                    <DropdownMenuItem>Dark</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <Link
                to={"/cart"}
                className="border border-gray-300 p-1.5 rounded-sm hover:bg-gray-100 relative"
              >
                {" "}
                <ShoppingCart className="" />
                <Button
                  // size={icons}
                  className="absolute top-0 right-0 -mt-1.5 -mr-1.5 p-2 w-4 h-4 bg-red-600 rounded-full"
                >
                  5
                </Button>
              </Link>
            </div>

            <div>
              <Avatar>
                <AvatarImage src={avatrImg} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div>
              {loading ? (
                <Button className="bg-orange text-gray-800 hover:bg-hoverOrange">
                  please wait <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                </Button>
              ) : (
                <Button className="bg-orange text-gray-800 hover:bg-hoverOrange">
                  {" "}
                  Logout
                </Button>
              )}
            </div>
          </div>

          {/* for mobile view  */}
          <div className="md:hidden lg:hidden ">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="rounded-full text-gray-950 bg-gray-200 hover:bg-gray-300"
                >
                  <MenuIcon />
                </Button>
              </SheetTrigger>
              <SheetContent className="flex flex-col h-full">
                <SheetHeader>
                  <SheetTitle className="flex justify-between items-center mt-6">
                    <div className="text-2xl font-bold">
                      {" "}
                      Shiva<span className="text-blue-950">@</span>Eats
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                          <span className="sr-only">Toggle theme</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Light</DropdownMenuItem>
                        <DropdownMenuItem>Dark</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </SheetTitle>
                </SheetHeader>

                <SheetDescription className="flex-1 ">
                  <Link
                    to={"/profile"}
                    className="flex mt-8 items-center gap-4 bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
                  >
                    <User />
                    <span> profile </span>
                  </Link>
                  <Link
                    to={"/order"}
                    className="flex mt-2 items-center gap-4 bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
                  >
                    <HandPlatter />
                    <span> Order </span>
                  </Link>
                  <Link
                    to={"/cart"}
                    className="flex mt-2 items-center gap-4 bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
                  >
                    <ShoppingCart />
                    <span> cart (0) </span>
                  </Link>
                  <Link
                    to={"/profile"}
                    className="flex mt-2 items-center gap-4 bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
                  >
                    <SquareMenu />
                    <span> menu </span>
                  </Link>
                  <Link
                    to={"/profile"}
                    className="flex mt-2 items-center gap-4 bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
                  >
                    <UtensilsCrossed />
                    <span> Restorent </span>
                  </Link>
                  <Link
                    to={"/profile"}
                    className="flex mt-2 items-center gap-4 bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
                  >
                    <PackageCheck />
                    <span> Restorent Order </span>
                  </Link>
                </SheetDescription>

                <SheetFooter className="flex justify-between items-center p-4 border-t border-gray-200 gap-24">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage />
                      <AvatarFallback>S</AvatarFallback>
                    </Avatar>
                    <h1 className="text-gray-800 font-medium">Shiva Pal</h1>
                  </div>

                  <SheetClose asChild>
                    <Button
                      type="submit"
                      className=" px-4 py-2 text-sm font-semibold text-white bg-orange rounded-md hover:bg-hoverOrange"
                    >
                      Logout
                    </Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
