"use client";

import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { uploadAlbumSchema } from "@/lib/schemas";
import { UploadAlbumInputs } from "@/lib/types";
import { refreshAccessToken, uploadAlbumAction } from "@/lib/actions";
import toast from "react-hot-toast";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { FiUpload, FiPlus } from "react-icons/fi";
import { useDropzone } from "react-dropzone";
import { useSession } from "next-auth/react";

export default function UploadAlbumForm() {
  const { data: session } = useSession();
  console.log(session);
  const [imageLinks, setImageLinks] = useState<string[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const [photographers, setPhotographers] = useState<string[]>([]);
  const [currentPhotographer, setCurrentPhotographer] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UploadAlbumInputs>({
    resolver: zodResolver(uploadAlbumSchema),
  });

  const addPhotographer = () => {
    if (currentPhotographer && !photographers.includes(currentPhotographer)) {
      setPhotographers([...photographers, currentPhotographer]);
      setCurrentPhotographer("");
    }
  };

  const removePhotographer = (photographerToRemove: string) => {
    setPhotographers(photographers.filter((p) => p !== photographerToRemove));
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setImageLinks((prev) => [...prev, reader.result as string].slice(0, 5));
        setImages((prev) => [...prev, file].slice(0, 5));
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxFiles: 5,
  });

  const refresh = async () => {
    if (session) {
      const response = await refreshAccessToken(
        session?.tokenInfo.refreshToken
      );
      toast.success(response.message);
    }
  };

  const onSubmit = async (data: UploadAlbumInputs) => {
    console.log(data);
    if (imageLinks.length < 5) {
      toast.error("You need to upload at least 5 images");
      return;
    }
    if (photographers.length === 0) {
      toast.error("You need to add at least 1 photographer");
      return;
    }
    const formData = new FormData();

    // Append other album fields to formData
    formData.append("albumTitle", data.albumTitle);
    formData.append("eventDate", data.eventDate);
    formData.append("albumDescription", data.albumDescription);
    formData.append("facebookAlbumLink", data.facebookAlbumLink);

    // Append photographers array as a JSON string (if available)
    if (photographers) {
      formData.append("photographers", JSON.stringify(photographers));
    }

    // Append each image in the 'images' array
    if (images) {
      images.forEach((file) => {
        formData.append("images", file); // Each image is appended with key 'images'
      });
    }
    const response = await uploadAlbumAction(formData);
    if (response) {
      if (response.status === "success") {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-4xl mx-auto p-6 space-y-8 bg-gray-100 rounded-lg shadow-lg"
    >
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-2 text-gray-800">
          Create New Album
        </h2>
        <p className="text-gray-600">
          Please fill in the details below to add a new photo album to the
          gallery.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b pb-2 text-gray-800">
              Album Details
            </h3>
            <div>
              <label
                htmlFor="albumTitle"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Album Title
              </label>
              <input
                {...register("albumTitle")}
                id="albumTitle"
                className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-50"
              />
              {errors.albumTitle && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.albumTitle.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="eventDate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Event Date
              </label>
              <input
                {...register("eventDate")}
                type="date"
                id="eventDate"
                className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-50"
              />
              {errors.eventDate && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.eventDate.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="albumDescription"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Album Description
              </label>
              <textarea
                {...register("albumDescription")}
                id="albumDescription"
                rows={4}
                className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-50"
              ></textarea>
              {errors.albumDescription && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.albumDescription.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="facebookAlbumLink"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Facebook Album Link
              </label>
              <input
                {...register("facebookAlbumLink")}
                id="facebookAlbumLink"
                className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-50"
              />
              {errors.facebookAlbumLink && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.facebookAlbumLink.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b pb-2 text-gray-800">
              Photographers
            </h3>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={currentPhotographer}
                onChange={(e) => setCurrentPhotographer(e.target.value)}
                placeholder="Add photographer"
                className="flex-grow px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-50"
              />
              <button
                type="button"
                onClick={addPhotographer}
                className="px-4 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
              >
                <FiPlus className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {photographers.map((photographer) => (
                <div
                  key={photographer}
                  className="flex items-center bg-indigo-100 rounded-full px-3 py-1"
                >
                  <span className="text-sm text-indigo-800">
                    {photographer}
                  </span>
                  <button
                    type="button"
                    onClick={() => removePhotographer(photographer)}
                    className="ml-2 text-indigo-600 hover:text-indigo-800 focus:outline-none"
                  >
                    <IoMdClose className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            {photographers.length === 0 && (
              <p className="text-sm text-red-600">
                At least one photographer is required
              </p>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b pb-2 text-gray-800">
              Photo Selection
            </h3>
            <div
              {...getRootProps()}
              className={`flex items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200 ${
                isDragActive
                  ? "border-indigo-600 bg-indigo-50"
                  : "border-gray-300"
              }`}
            >
              <input {...getInputProps()} />
              <div className="text-center">
                <FiUpload className="mx-auto w-12 h-12 text-gray-400" />
                <p className="mt-2 text-lg text-gray-500">
                  Drag & drop images here, or click to select files
                </p>
                <p className="text-sm text-gray-400">(Max 5 images)</p>
              </div>
            </div>

            {imageLinks.length > 0 && (
              <div className="mt-4">
                <h4 className="text-lg font-medium text-gray-700 mb-2">
                  Uploaded Images
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {imageLinks.map((link, index) => (
                    <div
                      key={index}
                      className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={link}
                        alt={`Uploaded image ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setImageLinks(
                            imageLinks.filter((_, i) => i !== index)
                          )
                        }
                        className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 focus:outline-none transition-colors duration-200"
                      >
                        <IoMdClose className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {imageLinks.length < 5 && (
              <p className="text-sm text-red-600">
                You need to select at least 5 images
              </p>
            )}
            {imageLinks.length === 5 && (
              <p className="text-sm text-green-600">
                Successfully selected 5 images
              </p>
            )}
          </div>
        </div>

        <div className="px-6 py-4 bg-gray-50 border-t flex justify-end space-x-4">
          <button
            onClick={() => {
              reset({
                albumDescription: "",
                albumTitle: "",
                eventDate: "",
                facebookAlbumLink: "",
              });
              setImageLinks([]);
              setPhotographers([]);
            }}
            type="button"
            className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            Discard
          </button>
          <button
            disabled={isSubmitting}
            type="submit"
            className="px-6 py-3 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            Create album
          </button>
          <button
            onClick={refresh}
            disabled={isSubmitting}
            type="button"
            className="px-6 py-3 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            Refresh
          </button>
        </div>
      </div>
    </form>
  );
}
