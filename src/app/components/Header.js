"use client";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="flex p-5 items-center shadow-sm justify-between">
      <div className="flex gap-3 items-center">
        <Image src="/headerLogo.svg" alt={""} width={40} height={40} />
        <p className="text-2xl text-orange-500 font-sans">AI Room Design</p>
      </div>

      <div className="flex gap-5 items-center">
        <Link href={"./dashboard"}>
          <div className="flex items-center gap-2 bg-slate-200 rounded-full p-3">
            Get Started
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
