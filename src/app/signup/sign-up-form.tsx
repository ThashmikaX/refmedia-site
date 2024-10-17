"use client";
import Button from "@/components/ui/button";
import FormField from "@/components/ui/form-field";
import { PasswordInput } from "@/components/ui/password-input";
import { signUpAction } from "@/lib/actions";
import { signUpSchema } from "@/lib/schemas";
import { SignUpInputs } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";

import { signIn } from "next-auth/react";
import Link from "next/link";
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
        await signIn("credentials", {
          redirect: false,
          teamName: data.email,
          password: data.password,
        });
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
      <div className="w-[532px] px-10 py-12 bg-white/10 rounded-2xl shadow border-2 border-[#f4ebff] backdrop-blur-[20px] flex-col  gap-12 inline-flex">
        <div className="s h-[86px] flex-col w-full gap-4 flex">
          <div className=" text-black/90 text-2xl font-medium ">
            Get started!
          </div>
          <div className=" text-black/90 text-base font-light ">
            Please sign up to get access to upload photo albums to the REF Media
            Gallery.
          </div>
        </div>
        <div className="flex-col w-full gap-4 flex">
          <div className="flex-col  gap-2 flex">
            <div className="text-black/90 text-base font-medium ">Email</div>
            <div>
              <FormField
                name="email"
                register={register}
                error={errors["email"]}
                label="Email"
                placeholder="johndoe@gmail.com"
              />
            </div>
          </div>
          <div className="flex-col  gap-2 flex">
            <div className=" text-black/90 text-base font-medium ">
              First Name
            </div>
            <div>
              <FormField
                name="firstName"
                register={register}
                error={errors["firstName"]}
                label="First Name"
                placeholder="john"
              />
            </div>
          </div>
          <div className="flex-col gap-2 flex">
            <div className=" text-black/90 text-base font-medium">
              Last Name
            </div>
            <div>
              <FormField
                name="lastName"
                register={register}
                error={errors["lastName"]}
                label="First Name"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="w-full h-20 flex-col gap-2 flex">
            <div>
              <PasswordInput
                {...register("password")}
                name="password"
                register={register}
                error={errors["password"]}
                label="Password"
                placeholder="XXXXXXXX"
              />
            </div>
          </div>
          <div className="self-stretch flex-col mt-4 gap-2 flex">
            <PasswordInput
              {...register("confirmPassword")}
              name="confirmPassword"
              register={register}
              error={errors["confirmPassword"]}
              label="Confirm Password"
              placeholder="XXXXXXXX"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col px-6 py-2 justify-center items-center gap-2.5 ">
          <p>
            Already registered ?{" "}
            <Link className="hover:underline" href={"/login"}>
              Log In from here
            </Link>
          </p>
          <Button type="submit">Sign Up</Button>
        </div>
      </div>
    </form>
  );
}
