import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";

function NoDesignState() {
  return (
    <div className="flex items-center justify-center flex-col">
      <Image src={"/NoDesignImage.webp"} alt={""} width={300} height={300} />
      <p>Create new design</p>
      <Link href={"/dashboard/create-new"}>
        <Button>Redesign Room</Button>
      </Link>
    </div>
  );
}

export default NoDesignState;
