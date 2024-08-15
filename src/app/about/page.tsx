import CustomBreadcrums from "@/components/CustomBreadcrums";
import { Icons } from "@/components/ui/Icons";
import Image from "next/image";
import maskImage from "../../../public/assets/about/mask-group.svg";
import { seniorTreasurer, team } from "./Assests";
import TeamMember from "./components/TeamMember";
import ContactUs from "@/components/ContactUs";
import { GridBackground } from "@/components/GridBackground";

export default function AboutPage() {
  return (
    <main className="mt-20 md:mt-[76px] relative text-supportingText min-h-screen w-full px-[16px] mx-auto md:mx-0">
      <div className="hidden md:block absolute z-[-400] top-[80px]">
        <Icons.lineVector1 />
      </div>
      <div className="hidden md:block absolute z-[-400] right-0 top-[579.5px]">
        <Icons.lineVector2 />
      </div>
      <CustomBreadcrums />
      <GridBackground>
        <section className="relative md:m-[40px] flex flex-col justify-center items-center gap-[48px]">
          <p className=" text-[48px] font-[500]">About</p>
          <p className="text-justify text-[16px] font-[300] md:text-center max-w-[800px] text-sectionTitle">
            Established in 2016, our mission is to highlight and communicate the
            achievements, events, and dynamic activities of our faculty. Through
            dedication and innovation, we aim to enhance the faculty's
            visibility and engagement both within and outside the university.
          </p>
        </section>
      </GridBackground>

      <div className="flex flex-col gap-[32px] md:gap-[64px]">
        <Image
          src={maskImage}
          alt="image"
          className="mt-[32px] md:mt-[64px] mx-auto"
          placeholder="blur"
          width={478}
          height={718}
          quality={100}
          sizes="(max-width: 425px) 390px , 480px"
          blurDataURL="data:image/svg+xml;base64,..."
        />
        <div className="flex flex-col gap-[16px] lg:gap-0 lg:flex-row lg:justify-between py-[32px] px-0 lg:p-[24px] w-full max-w-[1200px] mx-auto">
          <Icons.ourMissionLarge className="hidden md:block w-[239px] h-[96px]" />
          <Icons.ourMissionSmall className="md:hidden w-[159px] h-[65px]" />
          <p className="w-full text-justify text-[16px] font-[300] lg:max-w-[420px]">
            To create, manage, and disseminate high-quality content that
            showcases the vibrant life and cutting-edge research at the
            Engineering Faculty. We strive to be the voice of the faculty,
            ensuring that its achievements and events are communicated
            effectively and engagingly.
          </p>
        </div>
        <div className="flex flex-col gap-[16px] lg:gap-0 lg:flex-row lg:justify-between py-[32px] px-0 lg:p-[24px] w-full max-w-[1200px] mx-auto">
          <Icons.theTeamBehindLarge className="hidden md:block w-[414px] h-[96px]" />
          <Icons.theTeamBehindSmall className="md:hidden w-[277px] h-[65px]" />
          <p className="w-full text-justify text-[16px] font-[300] lg:max-w-[420px]">
            Meet the dedicated team that drives the Media Unit of the
            Engineering Faculty at the University of Ruhuna. Our team is
            composed of passionate individuals who work tirelessly to ensure our
            faculty's achievements and events are highlighted and communicated
            effectively. From content creation to social media management, each
            member plays a crucial role in our success. Get to know the faces
            behind our innovative and engaging media presence.
          </p>
        </div>
        <section
          id="allMembers"
          className="rounded-[32px] border-[1px] justify-center  border-solid border-[#F9F5FF] shadow-containerShadow md:py-[48px] md:px-[32px] p-[20px] max-w-[1300px] w-full mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-[32px] gap-y-[64px]"
        >
          {team.map((member) => (
            <TeamMember
              key={member.name}
              title={member.title}
              name={member.name}
              avatar={member.avatar}
            />
          ))}
        </section>
      </div>
      <section
        id="seniorTreasurer"
        className="flex flex-col gap-[40px] md:gap-[32px] pt-[64px] md:pt-[100px] md:px-[40px] "
      >
        <div className="md:px-[32px]  max-w-[1300px] w-full mx-auto sm:w-full sm:mx-auto text-sectionTitle h-[35px] text-[24px] font-[500]">
          <p>Honoring Dr. Hettiarachchi NK:</p>
          <div className="border-b-2 border-border" />
        </div>
        <div className="mx-auto items-center flex flex-col gap-[32px] lg:gap-[100px] lg:flex-row md:items-center">
          <TeamMember
            avatar={seniorTreasurer.avatar}
            name={seniorTreasurer.name}
            title={seniorTreasurer.title}
          />
          <p className="w-full text-justify text-[16px] font-[300] lg:w-[612px]">
            Dr. Hettiarachchi NK, our senior treasurer from the Mechanical
            Department, is a dedicated and esteemed member of our faculty. His
            expertise and commitment have been invaluable to our team, and he
            consistently demonstrates a deep understanding of both academic and
            administrative responsibilities. Dr. Hettiarachchi NK's leadership
            and guidance have been pivotal in managing our resources
            efficiently, ensuring the smooth operation of our department. We are
            truly grateful for his unwavering support and contributions.
          </p>
        </div>
      </section>
      <ContactUs maxWidth={"1300px"} />
    </main>
  );
}
