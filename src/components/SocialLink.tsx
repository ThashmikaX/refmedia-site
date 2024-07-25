import { socialLink } from "./Assests";

export default function SocialLink({ Icon, linkText, to }: socialLink) {
  return (
    <div className="flex-[1_0_0] flex flex-row gap-[16px] justify-center items-center text-center">
      <a href={to}>
        <div className="rounded-full border-[8px] border-solid border-[#F9F5FF]">
          <div className="p-[10px] bg-[#F4EBFF] rounded-full ">
            <Icon className=" w-[24px] h-[24px] bg-[#F4EBFF] shrink-0 " />
          </div>
        </div>
      </a>
      <a
        href={to}
        className="hidden md:block text-[16px] font-[300] text-[#621BDA]"
      >
        {linkText}
      </a>
    </div>
  );
}
