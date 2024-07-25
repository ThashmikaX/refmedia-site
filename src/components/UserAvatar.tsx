import Image, { StaticImageData } from "next/image";

type UserAvatarProps = {
  name: string;
  title: string;
  className?: string | undefined;
  avatar: StaticImageData | string;
};
export default function UserAvatar({
  name,
  avatar,
  title,
  className,
}: UserAvatarProps) {
  return (
    <div className="flex-[1_0_0] flex flex-col content-center items-center gap-[20px] max-w-[131px] sm:max-w-[147px]">
      <div
        className={
          className
            ? className
            : "relative w-[80px] h-[80px] rounded-full overflow-hidden bg-avatarBackground border-[4px] border-solid border-[#F9F5FF]"
        }
      >
        <div className="absolute inset-0 transform -translate-y-[10px]">
          <Image
            src={avatar}
            width={80}
            height={80}
            className="object-cover"
            placeholder="blur"
            sizes="80px"
            alt="Team member"
            quality={100}
          />
        </div>
      </div>
      <div className="flex flex-col text-center ">
        <p className="text-[16px] font-[500] text-supportingText">{name}</p>
        <p className="text-[13px] font-[300] text-[#6941C6]">{title}</p>
      </div>
    </div>
  );
}
