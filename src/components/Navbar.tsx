"use client";

import React from "react";
import { PicsellLogo } from "@/components/brand/PicsellLogo";

const Navbar = () => {
  return (
    <nav
      className="fixed top-[30px] left-1/2 -translate-x-1/2 w-fit min-h-[70px] flex items-center navbar-glass rounded-[50px] px-10 z-50"
      aria-label="Navigation principale"
    >
      <a href="/" className="flex items-center no-underline">
        <PicsellLogo height={45} showWordmark />
      </a>
    </nav>
  );
};

export default Navbar;
