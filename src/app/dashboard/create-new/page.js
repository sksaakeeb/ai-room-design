"use client";
import React, { useState } from "react";
import ImageSelection from "./_components/ImageSelection";
import RoomType from "./_components/RoomType";
import DesignType from "./_components/DesignType";
import AdditionalReq from "./_components/AdditionalReq";
import { Button } from "@/components/ui/button";

function CreateNew() {
  const [formData, setFormData] = useState([]);
  const onHandleInputChange = (value, fieldName) => {
    setFormData((previous) => ({
      ...previous,
      [fieldName]: value,
    }));
    console.log(formData);
  };
  return (
    <div>
      <div>
        <h2 className="text-center text-5xl">
          Experience the Magic of AI Remodeling
        </h2>
        <p className="text-center text-md text-gray-400 mt-5">
          Transform any room with a click. Select a space, choose a style, and
          watch as AI instantly reimagines your environment.
        </p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        {/* Image Selection */}
        <ImageSelection
          selectedImage={(value) => onHandleInputChange(value, "image")}
        />

        <div>
          {/* Room Type */}
          <RoomType
            selectedRoomType={(value) => onHandleInputChange(value, "roomType")}
          />

          {/* Design Type */}
          <DesignType
            selectedDesignType={(value) =>
              onHandleInputChange(value, "designType")
            }
          />
          {/* Additional Req. (Optional) */}
          <AdditionalReq
            AdditionalReqInput={(value) =>
              onHandleInputChange(value, "additionalReq")
            }
          />
          {/* Generate Button */}
          <Button className="w-full">Generate</Button>
        </div>
      </div>
    </div>
  );
}

export default CreateNew;
