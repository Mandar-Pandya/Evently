import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";

const MobileNav = () => {
  return (
    <>
      <div className="flex w-32 justify-end gap-3">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <nav className="md:hidden">
            <Sheet>
              <SheetTrigger className="align-middle">
                <Image
                  src="/assets/icons/menu.svg"
                  alt="menu"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </SheetTrigger>
              <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
                <Image
                  src="/assets/images/logo.svg"
                  alt="logo"
                  width={128}
                  height={38}
                />
                <Separator className="border border-gray-50" />
                <NavItems />
              </SheetContent>
            </Sheet>
          </nav>
        </SignedIn>
        <SignedOut>
          <Button asChild className="rounded-full" size="lg">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </div>
    </>
  );
};

export default MobileNav;
