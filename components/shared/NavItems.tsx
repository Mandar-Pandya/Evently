"use client";

import { headerLinks } from "@/constants";
import { SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <>
      <SignedIn>
        <nav className="md:flex-between hidden w-full max-w-xs">
          <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
            {headerLinks.map((link) => {
              const isActive = pathname === link.route;

              return (
                <li
                  key={link.route}
                  className={`${
                    isActive && "text-primary-500"
                  } flex-center p-medium-16 whitespace-nowrap`}
                >
                  <Link href={link.route}>{link.label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </SignedIn>
    </>
  );
};

export default NavItems;
