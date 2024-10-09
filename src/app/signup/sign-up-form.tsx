"use client";
import Button from "@/components/ui/button";
import { signUpAction } from "@/lib/actions";
import { signUpSchema } from "@/lib/schemas";
import { LoginInputs, SignUpInputs } from "@/lib/types";
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
  } = useForm<SignUpInputs>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: SignUpInputs) => {
    const response = await signUpAction(data);
    if (response) {
      if (response.status === "success") {
        toast.success(response.message);
        router.push("/login");
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
            Get started!
          </div>
          <div className="self-stretch text-black/90 text-base font-light font-['Outfit']">
            Please sign up to get access to upload photo albums to the REF Media
            Gallery.
          </div>
        </div>
        <div className="self-stretch  flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-black/90 text-base font-medium font-['Outfit']">
              Email
            </div>
            <div>
              <input
                {...register("email")}
                className={cn(
                  "w-[452px] px-2 py-4 rounded border border-black/20 justify-start items-center gap-2 inline-flex text-black/50 text-base font-light font-['Outfit']",
                  { "border-2 border-red-500": errors["email"] }
                )}
              ></input>
              {errors["email"] && (
                <p className="text-red-500 text-xs">
                  {errors["email"].message}
                </p>
              )}
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-black/90 text-base font-medium font-['Outfit']">
              First Name
            </div>
            <div>
              <input
                {...register("firstName")}
                className={cn(
                  "w-[452px] px-2 py-4 rounded border border-black/20 justify-start items-center gap-2 inline-flex text-black/50 text-base font-light font-['Outfit']",
                  { "border-2 border-red-500": errors["firstName"] }
                )}
              ></input>
              {errors["firstName"] && (
                <p className="text-red-500 text-xs">
                  {errors["firstName"].message}
                </p>
              )}
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-black/90 text-base font-medium font-['Outfit']">
              Last Name
            </div>
            <div>
              <input
                {...register("lastName")}
                className={cn(
                  "w-[452px] px-2 py-4 rounded border border-black/20 justify-start items-center gap-2 inline-flex text-black/50 text-base font-light font-['Outfit']",
                  { "border-2 border-red-500": errors["lastName"] }
                )}
              ></input>
              {errors["lastName"] && (
                <p className="text-red-500 text-xs">
                  {errors["lastName"].message}
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
          <div className="self-stretch flex-col justify-start items-start mt-4 gap-2 flex">
            <div className="self-stretch text-black/90 text-base font-medium font-['Outfit']">
              Confirm your password
            </div>
            <div>
              <input
                {...register("confirmPassword")}
                className={cn(
                  "w-[452px] px-2 py-4 rounded border border-black/20 justify-start items-center gap-2 inline-flex text-black/50 text-base font-light font-['Outfit']",
                  { "border-2 border-red-500": errors["confirmPassword"] }
                )}
              ></input>
              {errors["confirmPassword"] && (
                <p className="text-red-500 text-xs">
                  {errors["confirmPassword"].message}
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
