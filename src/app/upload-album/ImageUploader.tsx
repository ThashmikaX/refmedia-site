"use client";

import { CldUploadWidget } from "next-cloudinary";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setImages: Dispatch<SetStateAction<string[] | undefined>>;
  images: string[] | undefined;
};

type Info = {
  secure_url: string;
};

export default function ImageUpload({ images, setImages }: Props) {
  return (
    <CldUploadWidget
      //creat cloudinary preset for refmedia and add it's name here
      uploadPreset="refmedia"
      onSuccess={(result, { widget }) => {
        setImages((prev) => {
          if (prev) {
            return [...prev, (result?.info as Info).secure_url];
          } else return [(result?.info as Info).secure_url];
        });
      }}
    >
      {({ open }) => {
        return (
          <button
            disabled={images?.length === 5}
            className="disabled:cursor-not-allowed p-2 border-2"
            type="button"
            onClick={() => open()}
          >
            Upload an Image
          </button>
        );
      }}
    </CldUploadWidget>
  );
}
