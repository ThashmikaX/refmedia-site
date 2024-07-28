import { contacts, socialLinks } from "./Assests";
import ContactCard from "./ContactCard";
import SocialLink from "./SocialLink";

export default function Footer() {
  return (
    <div className="w-full py-8 bg-gray-50 flex-col justify-start items-center gap-16 inline-flex">
      <div className="self-stretch h-20 flex-col lg:px-[100px] justify-start items-start gap-16 flex">
        <div className="self-stretch h-20 flex-col lg:flex-row justify-between items-center gap-8 flex lg:inline-flex">
          <div className="justify-start items-center gap-6 inline-flex">
            <a href={socialLinks[0].to}>
              <img
                className={"w-6 h-6 relative"}
                src="/assets/Social/x.svg"
                alt="Logo"
              />
            </a>
            <a href={socialLinks[4].to}>
              <img
                className={"w-6 h-6 relative"}
                src="/assets/Social/linkedin.svg"
                alt="Logo"
              />
            </a>
            <a href={socialLinks[0].to}>
              <img
                className={"w-6 h-6 relative"}
                src="/assets/Social/facebook.svg"
                alt="Logo"
              />
            </a>
            <a href={socialLinks[3].to}>
              <img
                className={"w-6 h-6 relative"}
                src="/assets/Social/github.svg"
                alt="Logo"
              />
            </a>
          </div>
          <div className="self-stretch items-center lg:flex text-center text-gray-500 text-base font-normal  leading-normal">
            © 2077 REF Media. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
