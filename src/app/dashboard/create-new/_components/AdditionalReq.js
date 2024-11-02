import { Textarea } from "@/components/ui/textarea";
import React from "react";

function AdditionalReq({AdditionalReqInput}) {
  return (
    <div className="mt-5">
      <h2>Additional Requirements</h2>
      <Textarea className="mt-5" onChange={(event) => AdditionalReqInput(event.target.value)}/>
    </div>
  );
}

export default AdditionalReq;
