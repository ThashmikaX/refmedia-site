import CustomBreadcrums from "@/components/CustomBreadcrums";
import { Icons } from "@/components/ui/Icons";
import Image from "next/image";
import maskImage from "../../../public/assets/about/MaskGroup.png";
import ContactUs from "@/components/ContactUs";
import { GridBackground } from "@/components/GridBackground";
import Button from "../../components/ui/button";

export default function AboutPage() {
  return (
    <main className="mt-[56px] md:mt-[76px] relative text-supportingText min-h-screen w-full px-[16px] mx-auto md:mx-0">
      <div className="w-full h-[1024px] p-16 bg-white justify-center items-center gap-12 inline-flex">
        <div className="w-[532px] px-10 py-12 bg-white/10 rounded-2xl shadow border-2 border-[#f4ebff] backdrop-blur-[20px] flex-col justify-start items-start gap-12 inline-flex">
        <div className="self-stretch h-[86px] flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch text-black/90 text-2xl font-medium font-['Outfit']">Welcome back!</div>
            <div className="self-stretch text-black/90 text-base font-light font-['Outfit']">Please log in to manage and upload photo albums to the REF Media Gallery.</div>
        </div>
        <div className="self-stretch h-[223px] flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch h-20 flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-black/90 text-base font-medium font-['Outfit']">Username</div>
                <input className="w-[452px] px-2 py-4 rounded border border-black/20 justify-start items-center gap-2 inline-flex text-black/50 text-base font-light font-['Outfit']"></input>
            </div>
            <div className="self-stretch h-20 flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                    <div className="grow shrink basis-0 text-black/90 text-base font-medium font-['Outfit']">Password</div>
                </div>
                <input className="w-[452px] px-2 py-4 rounded border border-black/20 justify-start items-center gap-2 inline-flex text-black/50 text-base font-light font-['Outfit']"></input>
            </div>
            <div className="justify-start items-center gap-4 inline-flex">
                <div className="text-black/90 text-base font-light font-['Outfit']">Remember me</div>
                <div className="w-[51px] h-[31px] pl-0.5 pr-[22px] py-0.5 bg-black/10 rounded-[100px] justify-start items-center flex">
                    <div className="w-[27px] h-[27px] relative bg-white rounded-[100px] shadow" />
                </div>
            </div>
        </div>
        <div className="self-stretch px-6 py-3 justify-center items-center gap-2.5 inline-flex">
          <Button>
            Sign in
          </Button>
        </div>
        </div>
      </div>
    </main>
  );
}
