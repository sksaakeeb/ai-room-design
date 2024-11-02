"use client";

import Image from "next/image";
import React, { useState } from "react";

function ImageSelection(selectedImage) {
  const [file, setFile] = useState();

  const onFileSelected = (event) => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
    selectedImage(event.target.files[0])
  };

  return (
    <div>
      <label>Choose of your room's picture</label>
      <div className="mt-3">
        <label htmlFor="upload-image">
          <div
            className={`p-28 border rounded-xl border-dotted justify-center flex border-cyan-700 bg-slate-200 cursor-pointer hover:shadow-lg ${
              file && "p-0 bg-white"
            }`}
          >
            {!file ? (
              <Image src={"/imageUpload.webp"} width={70} height={70} alt="" />
            ) : (
              <Image
                src={URL.createObjectURL(file)}
                width={300}
                height={300}
                alt=""
              />
            )}
          </div>
        </label>
        <input
          type="file"
          accept="image/*"
          id="upload-image"
          style={{ display: "none" }}
          onChange={onFileSelected}
        />
      </div>
    </div>
  );
}

export default ImageSelection;