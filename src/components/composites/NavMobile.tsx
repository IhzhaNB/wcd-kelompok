"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { RiMenu3Fill } from "react-icons/ri";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Socials from "./Socials";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Sheet>
      <SheetTrigger
        className="text-white text-3xl grid place-items-center"
        onClick={() => setIsOpen(true)}
      >
        <RiMenu3Fill />
      </SheetTrigger>
      <SheetContent className="bg-accent border-none text-white">
        <div className="pt-16 pb-8 flex-col h-full flex items-center justify-between">
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <SheetDescription className="sr-only">
              Navigation Menu
            </SheetDescription>
          </SheetHeader>
          <NavLinks onClick={() => setIsOpen(false)} />
          <Socials containerStyle="text-white text-xl flex gap-6 mt-4" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
