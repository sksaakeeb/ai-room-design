"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import NoDesignState from "./NoDesignState";
import Link from "next/link";

function DashboardBody() {
  const { user } = useUser();
  const [userRoomList, setUserRoomList] = useState([]);

  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <p className="font-serif text-3xl">Hello, {user?.fullName}</p>

        <Link href={"/dashboard/create-new"}>
          <Button>+ Redesign Room</Button>
        </Link>
      </div>

      {userRoomList?.length == 0 ? <NoDesignState /> : <div></div>}
    </div>
  );
}

export default DashboardBody;
