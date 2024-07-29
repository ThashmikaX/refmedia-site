import { teamMembers } from "./Assests";
import Button from "./ui/button";
import { Icons } from "./ui/Icons";
import UserAvatar from "./UserAvatar";

export default function TheTeamBehind() {
  return (
    <div className="mx-[16px] max-w-[960px] sm:w-full sm:mx-auto sm:px-[40px] my-[96px] sm:my-[128px] flex flex-col gap-[40px] sm:gap-[64px]">
      <div className="text-sectionTitle h-[35px]  text-[24px] font-[500]">
        <p>The Team Behind</p>
        <div className="border-b-2 border-border " />
      </div>
      <div className="w-full flex flex-col gap-[16px] text-supportingText">
        <p className="text-center text-[35px] font-[400]">Meet our team</p>
        <p className="text-justify text-[16px] font-[300]">
          Meet the dedicated team that drives the Media Unit of the Engineering
          Faculty at the University of Ruhuna. Our team is composed of
          passionate individuals who work tirelessly to ensure our faculty's
          achievements and events are highlighted and communicated effectively.
          From content creation to social media management, each member plays a
          crucial role in our success. Get to know the faces behind our
          innovative and engaging media presence.
        </p>
      </div>
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(140px,1fr))] justify-between mdc:gap-5">
        {teamMembers.map((member, index) => (
          <UserAvatar
            avatar={member.avatar}
            name={member.name}
            title={member.title}
            key={index}
          />
        ))}
      </div>
      <div className="flex items-center justify-center w-full">
        <Button
          asLink={true}
          to={"/about/#allMembers"}
          Icon={Icons.arrowUpRight}
        >
          View all members
        </Button>
      </div>
    </div>
  );
}
