import { teamMember } from "@/components/Assests";
import Image from "next/image";

export default function TeamMember({ avatar, name, title }: teamMember) {
  return (
    <div className="flex-[1_0_0] flex flex-col content-center items-center gap-[20px]">
      <Image
        src={avatar}
        width={240}
        height={240}
        className="object-cover w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[240px] lg:h-[240px]"
        placeholder="blur"
        sizes="(max-width: 425px) 100px , 240px"
        alt="Team member"
        quality={100}
      />

      <div className="flex flex-col text-center ">
        <p className="text-[16px] font-[500] text-supportingText">{name}</p>
        <p className="text-[13px] font-[300] text-[#6941C6]">{title}</p>
      </div>
    </div>
  );
}
