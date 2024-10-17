"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/button";
import FormField from "@/components/ui/form-field";
import { PasswordInput } from "@/components/ui/password-input";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { LoginInputs } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/schemas";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

interface LoginFormInputs {
  email: string;
  password: string;
}

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });
  const onSubmit = async (data: LoginInputs) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    if (!result?.ok) {
      toast.error("Invalid email or password");
      return;
    } else if (result?.ok) {
      toast.success("Login successful");
      router.push("/upload-album");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-[1024px] p-16 bg-white justify-center items-center gap-12 inline-flex"
    >
      <div className="w-[532px] px-10 py-12 bg-white/10 rounded-2xl shadow border-2 border-[#f4ebff] backdrop-blur-[20px] flex-col gap-12 inline-flex">
        <div className="h-[86px] flex-col w-full gap-4 flex">
          <div className="text-black/90 text-2xl font-medium">
            Welcome back!
          </div>
          <div className="text-black/90 text-base font-light">
            Please log in to manage and upload photo albums to the REF Media
            Gallery.
          </div>
        </div>
        <div className="flex-col w-full gap-4 flex">
          <div className="flex-col gap-2 flex">
            <div className="text-black/90 text-base font-medium">Email</div>
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
          <div className="justify-start items-center gap-4 inline-flex mt-4">
            <div className="text-black/90 text-base font-light">
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
