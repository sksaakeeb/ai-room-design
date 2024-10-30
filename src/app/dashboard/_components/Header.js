import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="flex p-4 items-center shadow-sm justify-between">
      <div className="flex gap-3 items-center">
        <Image src="/logo.svg" alt={""} width={100} height={100} />
        <p>AI Room Design</p>
      </div>

      <div className="flex gap-5 items-center">
        <div className="flex items-center gap-2 bg-slate-200 rounded-full p-3">
          <Image src={'/star.png'}  alt={""} width={20} height={20}/>
          <p>3</p>
        </div>
        <div>UserButton</div>
      </div>
    </div>
  );
}

export default Header;
