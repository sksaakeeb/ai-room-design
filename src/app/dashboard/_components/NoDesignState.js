import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function NoDesignState() {
  return (
    <div>
      <Image src={"/NoDesignImage.webp"} alt={""} width={300} height={300} />
      <p>Create new design</p>
      <Button>Redesign Room</Button>
    </div>
  );
}

export default NoDesignState;
