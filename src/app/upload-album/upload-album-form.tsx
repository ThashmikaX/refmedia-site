"use client";
import { contacts } from "@/components/Assests";
import Button from "@/components/ui/button";
import { uploadAlbumSchema } from "@/lib/schemas";
import { UploadAlbumInputs } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import ImageUpload from "./ImageUploader";
import Image from "next/image";
import { uploadAlbumAction } from "@/lib/actions";
import toast from "react-hot-toast";

export default function UploadAlbumForm() {
  const [imageLinks, setImageLinks] = useState<string[] | undefined>(undefined);
  const [photographers, setPhotoGraphers] = useState<string[] | undefined>(
    undefined
  );
  const [currentPhotographer, setCurrentPhotographer] = useState<
    string | undefined
  >(undefined);
  const addPhotographers = () => {
    setPhotoGraphers((prev) => {
      if (prev !== undefined && currentPhotographer !== undefined) {
        if (prev.includes(currentPhotographer)) {
          return prev;
        } else {
          return [...prev, currentPhotographer];
        }
      } else if (currentPhotographer !== undefined) {
        return [currentPhotographer];
      }
      return prev;
    });
  };
  const removePhotographer = (photographerToRemove: string) => {
    setPhotoGraphers(
      (prev) =>
        prev &&
        prev.filter((photographer) => photographer !== photographerToRemove)
    );
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UploadAlbumInputs>({
    resolver: zodResolver(uploadAlbumSchema),
  });
  const onSubmit = async (data: UploadAlbumInputs) => {
    if (imageLinks?.length != 5) {
      toast.error("You need to upload at least 5 images");
      return;
    }
    if (!photographers) {
      toast.error("You need to add at least 1 photographers");
      return;
    }
    const validData = { ...data, imageLinks, photographers };
    const response = await uploadAlbumAction(validData);
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
      className="w-full  p-16 bg-white flex-col justify-start items-center gap-10 inline-flex"
    >
      <div className="w-[1440px] justify-center items-center inline-flex" />
      <div className="self-stretch h-[58px] flex-col justify-start items-start gap-2 flex">
        <div className="self-stretch text-black/90 text-2xl font-medium font-['Outfit']">
          Create New Album
        </div>
        <div className="self-stretch text-black/90 text-base font-light font-['Outfit']">
          Please fill in the details below to add a new photo album to the
          gallery.
        </div>
      </div>
      <div className="self-stretch p-4 bg-white rounded-3xl shadow flex-col justify-end items-end gap-10 flex">
        <div className="self-stretch rounded-lg border border-[#dbc0ff] justify-start items-start inline-flex">
          <div className="grow shrink basis-0 self-stretch p-6 rounded-2xl border flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch h-[35px] flex-col justify-start items-start gap-1 flex">
              <div className="self-stretch px-2 justify-start items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 text-black/90 text-2xl font-medium font-['Outfit']">
                  Album Details
                </div>
              </div>
              <div className="h-px pl-[9px] pr-[8.50px] justify-center items-center inline-flex">
                <div className="w-[574px] h-px bg-[#dbc0ff]" />
              </div>
            </div>
            <div className="self-stretch grow shrink basis-0 px-2 flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch  flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-black/90 text-base font-medium font-['Outfit']">
                  Album Title
                </div>
                <input
                  {...register("albumTitle")}
                  className="form-input"
                ></input>
                {errors["albumTitle"] && (
                  <p className="text-sm text-red-500">
                    {errors["albumTitle"].message}
                  </p>
                )}
              </div>
              <div className="self-stretch  flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-black/90 text-base font-medium font-['Outfit']">
                  Event Date
                </div>
                <input
                  {...register("eventDate")}
                  className="form-input"
                ></input>
                {errors["eventDate"] && (
                  <p className="text-sm text-red-500">
                    {errors["eventDate"].message}
                  </p>
                )}
              </div>
              <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-black/90 text-base font-medium font-['Outfit']">
                  Album Description
                </div>
                <textarea
                  maxLength={5000}
                  {...register("albumDescription")}
                  className="w-full h-full px-2 py-4 rounded border border-black/20 gap-2 inline-flex text-black/50 text-base font-light font-['Outfit']"
                ></textarea>
                {errors["albumDescription"] && (
                  <p className="text-sm text-red-500">
                    {errors["albumDescription"].message}
                  </p>
                )}
              </div>
              <div className="self-stretch  flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-black/90 text-base font-medium font-['Outfit']">
                  Facebook Album Link
                </div>
                <input
                  {...register("facebookAlbumLink")}
                  className="form-input"
                ></input>
                {errors["facebookAlbumLink"] && (
                  <p className="text-sm text-red-500">
                    {errors["facebookAlbumLink"].message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="w-px self-stretch bg-[#dbc0ff]" />
          <div className="grow shrink basis-0  flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-[235px] p-6 rounded-2xl border flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch h-[35px] flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch px-2 justify-start items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-black/90 text-2xl font-medium font-['Outfit']">
                    Photographers
                  </div>
                </div>
                <div className="h-px pl-[9px] pr-[8.50px] justify-center items-center inline-flex">
                  <div className="w-[574px] h-px bg-[#dbc0ff]" />
                </div>
              </div>
              <div className="self-stretch h-32 px-2 flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch justify-start items-end gap-4 inline-flex">
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch text-black/90 text-base font-medium font-['Outfit']">
                      Contributors
                    </div>
                    <input
                      value={currentPhotographer}
                      onChange={(e) => setCurrentPhotographer(e.target.value)}
                      className="form-input"
                    ></input>
                  </div>
                  <button
                    onClick={() => addPhotographers()}
                    type="button"
                    className="px-6 py-2.5 bg-white rounded shadow border border-[#f4ebff] justify-center items-center gap-2 flex"
                  >
                    <div className="w-6 h-6 relative" />
                    <div className="text-black/90 text-base font-medium font-['Outfit']">
                      Add
                    </div>
                  </button>
                </div>
                {!photographers && (
                  <p className="text-sm text-red-500">
                    At least one photographer is required
                  </p>
                )}
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                  {photographers &&
                    photographers.map((photographer) => (
                      <div
                        key={photographer}
                        className="px-2 py-1 relative flex-row  bg-[#f4ebff] rounded-lg items-center gap-2 flex"
                      >
                        <div className="text-black/90 text-base font-light font-['Outfit']">
                          {photographer}
                        </div>
                        <IoMdClose
                          onClick={() => removePhotographer(photographer)}
                          className="hover:cursor-pointer w-4 h-4 text-black "
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="self-stretch h-px bg-[#dbc0ff]" />
            <div className="self-stretch grow shrink basis-0 p-6 rounded-2xl border flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch h-[35px] flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch px-2 justify-start items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-black/90 text-2xl font-medium font-['Outfit']">
                    Photo Selection
                  </div>
                </div>
                <div className="h-px pl-[9px] pr-[8.50px] justify-center items-center inline-flex">
                  <div className="w-[574px] h-px bg-[#dbc0ff]" />
                </div>
              </div>
              <div className="self-stretch grow shrink basis-0 px-2 flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch grow shrink basis-0 p-px bg-black/10 rounded-sm justify-start items-start gap-px inline-flex">
                  <div className="grow shrink basis-0 self-stretch flex-col justify-center items-center gap-px inline-flex">
                    <div className="relative self-stretch grow shrink basis-0 bg-white justify-center items-center gap-2 inline-flex">
                      {imageLinks ? (
                        <>
                          <Image
                            src={imageLinks[0]}
                            alt="image"
                            width={300}
                            height={300}
                            className="w-full h-full"
                          />
                          <IoMdClose
                            onClick={() =>
                              setImageLinks(
                                imageLinks.filter(
                                  (link) => link !== imageLinks[0]
                                )
                              )
                            }
                            className="absolute top-0 right-0 hover:cursor-pointer w-6 h-6 text-white "
                          />
                        </>
                      ) : (
                        <div className="text-center text-black/50 text-[13px] font-light font-['Outfit']">
                          Image 1
                        </div>
                      )}
                    </div>
                    <div className="relative self-stretch grow shrink basis-0 bg-white justify-center items-center gap-2 inline-flex">
                      {imageLinks && imageLinks[1] ? (
                        <>
                          <Image
                            src={imageLinks[1]}
                            alt="image"
                            width={300}
                            height={300}
                            className="w-full h-full"
                          />
                          <IoMdClose
                            onClick={() =>
                              setImageLinks(
                                imageLinks.filter(
                                  (link) => link !== imageLinks[1]
                                )
                              )
                            }
                            className="absolute top-0 right-0 hover:cursor-pointer w-6 h-6 text-white "
                          />
                        </>
                      ) : (
                        <div className="text-center text-black/50 text-[13px] font-light font-['Outfit']">
                          Image 2
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="relative grow shrink basis-0 self-stretch flex-col justify-center items-center gap-px inline-flex">
                    <div className="self-stretch grow shrink basis-0  bg-white justify-center items-center gap-2 inline-flex">
                      {imageLinks && imageLinks[2] ? (
                        <>
                          <Image
                            src={imageLinks[2]}
                            alt="image"
                            width={300}
                            height={300}
                            className="w-full h-full"
                          />
                          <IoMdClose
                            onClick={() =>
                              setImageLinks(
                                imageLinks.filter(
                                  (link) => link !== imageLinks[2]
                                )
                              )
                            }
                            className="absolute top-0 right-0 hover:cursor-pointer w-6 h-6 text-white "
                          />
                        </>
                      ) : (
                        <div className="text-center text-black/50 text-[13px] font-light font-['Outfit']">
                          Image 3
                        </div>
                      )}
                    </div>
                    <div className="relative self-stretch grow shrink basis-0  bg-white justify-center items-center gap-2 inline-flex">
                      {imageLinks && imageLinks[3] ? (
                        <>
                          <Image
                            src={imageLinks[3]}
                            alt="image"
                            width={300}
                            height={300}
                            className="w-full h-full"
                          />
                          <IoMdClose
                            onClick={() =>
                              setImageLinks(
                                imageLinks.filter(
                                  (link) => link !== imageLinks[3]
                                )
                              )
                            }
                            className="absolute top-0 right-0 hover:cursor-pointer w-6 h-6 text-white "
                          />
                        </>
                      ) : (
                        <div className="text-center text-black/50 text-[13px] font-light font-['Outfit']">
                          Image 4
                        </div>
                      )}
                    </div>
                    <div className="relative self-stretch grow shrink basis-0 bg-white justify-center items-center gap-2 inline-flex">
                      {imageLinks && imageLinks[4] ? (
                        <>
                          <Image
                            src={imageLinks[4]}
                            alt="image"
                            width={300}
                            height={300}
                            className="w-full h-full"
                          />
                          <IoMdClose
                            onClick={() =>
                              setImageLinks(
                                imageLinks.filter(
                                  (link) => link !== imageLinks[4]
                                )
                              )
                            }
                            className="absolute top-0 right-0 hover:cursor-pointer w-6 h-6 text-white "
                          />
                        </>
                      ) : (
                        <div className="text-center text-black/50 text-[13px] font-light font-['Outfit']">
                          Image 5
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[296px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch text-black/90 text-base font-medium font-['Outfit']">
                    Image Links
                  </div>
                  <div className="self-stretch h-[268px] flex-col justify-start items-start gap-3 flex">
                    {imageLinks ? (
                      imageLinks.map((link) => (
                        <a
                          key={link}
                          className="underline text-sm text-black"
                          href={link}
                        >
                          {link}
                        </a>
                      ))
                    ) : (
                      <p className="text-sm text-red-500">
                        You need to upload at least 5 images
                      </p>
                    )}
                    {imageLinks && imageLinks.length === 5 && (
                      <p className="text-sm text-green-500">
                        Successfully uploaded 5 images
                      </p>
                    )}
                    <ImageUpload
                      images={imageLinks}
                      setImages={setImageLinks}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch justify-end items-center gap-6 inline-flex">
          <div className="px-6 py-3 justify-center items-center gap-2 flex">
            <div className="text-[#7e56d8] text-base font-semibold font-['Outfit']">
              Discard
            </div>
          </div>
          <Button type="submit">Preview</Button>
        </div>
      </div>
    </form>
  );
}
