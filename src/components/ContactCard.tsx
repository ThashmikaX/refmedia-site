import { contact } from "./Assests";

export default function ContactCard({
  Icon,
  description,
  details,
  title,
}: contact) {
  return (
    <div className="flex-[1_0_0] flex flex-col gap-[16px] items-center text-center">
      <div className="rounded-full border-[8px] border-solid border-[#F9F5FF]">
        <div className="p-[10px] bg-[#F4EBFF] rounded-full ">
          <Icon className=" w-[24px] h-[24px] bg-[#F4EBFF] shrink-0 " />
        </div>
      </div>
      <p className="text-[20px] font-[500px] text-supportingText">{title}</p>
      <p className="text-[16px] font-[300px] text-sectionTitle">
        {description}
      </p>
      <p className="text-[16px] font-[300px] text-[#621BDA]">{details}</p>
    </div>
  );
}
