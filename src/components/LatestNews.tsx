import { teamMembers } from "./Assests";
import Button from "./ui/button";
import { Icons } from "./ui/Icons";
import UserAvatar from "./UserAvatar";

export default function LatestNews() {
  return (
    <div className="mx-[16px] max-w-[960px] sm:w-full sm:mx-auto sm:px-[40px] my-[96px] sm:my-[128px] flex flex-col gap-[40px] sm:gap-[64px]">
      <div className="text-sectionTitle h-[35px]  text-[24px] font-[500]">
        <p>Latest News</p>
        <div className="border-b-2 border-border " />
      </div>
      <div className="flex-col md:flex-row justify-start items-start gap-8 inline-flex text-[#000000]">
        <img
          className="h-[262px] rounded-2xl border-4 border-purple-50"
          src="/assets/committee.jpg"
        />
        <div className="self-stretch h-[310px] px-2 flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch h-[74px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-black/opacity-90 text-2xl font-medium ">
              Annual General Meeting 2024
            </div>
            <div className="self-stretch h-9 flex-col justify-start items-start gap-1 flex">
              <div className="self-stretch text-black/opacity-90 text-[13px] font-light ">
                By Chathuni Rathnayake
              </div>
              <div className="self-stretch text-black/opacity-90 text-[13px] font-light ">
                March 26, 2024
              </div>
            </div>
          </div>
          <div className="self-stretch text-justify text-black/opacity-90 text-base font-light ">
            The Media Unit of the Engineering Faculty at the University of
            Ruhuna successfully held its Annual General Meeting on March 20,
            2024. The event was a significant milestone, bringing together
            faculty members, students, and staff to review the achievements of
            the past year and set new goals for the future. Highlights of the
            meeting included discussions on upcoming projects, recognition of
            outstanding contributions, and the election of new committee
            members. Stay tuned for more detailed updates and insights from the
            AGM.
          </div>
        </div>
      </div>
    </div>
  );
}
