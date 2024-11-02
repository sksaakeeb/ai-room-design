"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import { UserDetailsContext } from "@/app/_context/UserDetailsContext";

function Header() {
  const { user } = useUser();
  const { userDetails, setUserDetails } = useContext(UserDetailsContext);
  return (
    <div className="flex p-5 items-center shadow-sm justify-between">
      <div className="flex gap-3 items-center">
        <Image src="/headerLogo.svg" alt={""} width={40} height={40} />
        <p className="text-2xl text-orange-500 font-sans">AI Room Design</p>
      </div>

      <div className="flex gap-5 items-center">
        <div className="flex items-center gap-2 bg-slate-200 rounded-full p-3">
          <Image src={"/star.png"} alt={""} width={15} height={15} />
          <p className="text-black">{userDetails?.credits}</p>
        </div>
        <div>
          <UserButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
