import { cookies } from "next/headers";
import Button from "../../components/ui/button";
import UploadAlbumForm from "./upload-album-form";

export default function Form() {
  const authToken = cookies().get("authToken")?.value;
  console.log(authToken);
  return (
    <main className="mt-[56px] md:mt-[76px] relative text-supportingText min-h-screen w-full px-[16px] mx-auto md:mx-0">
      {authToken ? (
        <UploadAlbumForm />
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-red-500 text-2xl">
            Seems like you have no access to this route. Try{" "}
            <a href="/login" className="underline">
              login
            </a>{" "}
            with correct credentials
          </p>
        </div>
      )}
    </main>
  );
}
