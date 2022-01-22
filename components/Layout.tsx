import type { ReactNode } from "react";
import Link from "next/link";
import { Shrimp } from "components/svg/shrimp";
import { Twitter } from "components/twitter";
import { Github } from "components/github";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-midnight-500 min-h-screen text-aquamarine-500 overflow-hidden">
      <header className="grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-none mt-4 gap-4 place-items-center">
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            <a>
              <Shrimp />
            </a>
          </Link>
          <h1 className="text-lg font-bold">Little Shrimp</h1>
        </div>
        <div className="flex items-center gap-3">
          <Twitter id="hateVtubers" color="text-aquamarine-500" />
          <Github />
        </div>
      </header>
      <main className="flex flex-col items-center gap-10 mt-4">{children}</main>
    </div>
  );
};
