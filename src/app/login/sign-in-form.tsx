"use client";
import Button from "@/components/ui/button";
import { signInAction } from "@/lib/actions";
import { loginSchema } from "@/lib/schemas";
import { LoginInputs } from "@/lib/types";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function SignInForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });
  console.log(errors);
  const onSubmit = async (data: LoginInputs) => {
    console.log(data);
    const response = await signInAction(data);
    console.log(response);
    if (response) {
      if (response.status === "success") {
        toast.success(response.message);
        router.push("/upload-album");
      } else {
        toast.error(response.message);
      }
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-[1024px] p-16 bg-white justify-center items-center gap-12 inline-flex"
    >
      <div className="w-[532px] px-10 py-12 bg-white/10 rounded-2xl shadow border-2 border-[#f4ebff] backdrop-blur-[20px] flex-col justify-start items-start gap-12 inline-flex">
        <div className="self-stretch h-[86px] flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch text-black/90 text-2xl font-medium font-['Outfit']">
            Welcome back!
          </div>
          <div className="self-stretch text-black/90 text-base font-light font-['Outfit']">
            Please log in to manage and upload photo albums to the REF Media
            Gallery.
          </div>
        </div>
        <div className="self-stretch  flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-black/90 text-base font-medium font-['Outfit']">
              Username
            </div>
            <div>
              <input
                {...register("username")}
                className={cn(
                  "w-[452px] px-2 py-4 rounded border border-black/20 justify-start items-center gap-2 inline-flex text-black/50 text-base font-light font-['Outfit']",
                  { "border-2 border-red-500": errors["username"] }
                )}
              ></input>
              {errors["username"] && (
                <p className="text-red-500 text-xs">
                  {errors["username"].message}
                </p>
              )}
            </div>
          </div>
          <div className="self-stretch h-20 flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <div className="grow shrink basis-0 text-black/90 text-base font-medium font-['Outfit']">
                Password
              </div>
            </div>
            <div>
              <input
                {...register("password")}
                className={cn(
                  "w-[452px] px-2 py-4 rounded border border-black/20 justify-start items-center gap-2 inline-flex text-black/50 text-base font-light font-['Outfit']",
                  { "border-2 border-red-500": errors["password"] }
                )}
              ></input>
              {errors["password"] && (
                <p className="text-red-500 text-xs">
                  {errors["password"].message}
                </p>
              )}
            </div>
          </div>
          <div className="justify-start items-center gap-4 inline-flex mt-4">
            <div className="text-black/90 text-base font-light font-['Outfit']">
              Remember me
            </div>
            <div className="w-[51px] h-[31px] pl-0.5 pr-[22px] py-0.5 bg-black/10 rounded-[100px] justify-start items-center flex">
              <div className="w-[27px] h-[27px] relative bg-white rounded-[100px] shadow" />
            </div>
          </div>
        </div>
        <div className="self-stretch px-6 py-3 justify-center items-center gap-2.5 inline-flex">
          <Button type="submit">Sign in</Button>
        </div>
      </div>
    </form>
  );
}
