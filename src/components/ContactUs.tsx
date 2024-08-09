import { contacts, socialLinks } from "./Assests";
import ContactCard from "./ContactCard";
import SocialLink from "./SocialLink";

export default function ContactUs({
  maxWidth,
}: {
  maxWidth?: string | undefined;
}) {
  return (
    <div
      className={`mx-[16px] max-w-[${
        maxWidth ? maxWidth : "960px"
      }] sm:w-full sm:mx-auto sm:px-[40px] my-[96px] sm:my-[128px] flex flex-col gap-[40px] sm:gap-[64px]`}
    >
      <div className="text-sectionTitle h-[35px]  text-[24px] font-[500]">
        <p>Contact Us</p>
        <div className="border-b-2 border-border " />
      </div>
      <div className="flex flex-col gap-[32px]">
        <div className="w-full flex flex-col gap-[16px] text-supportingText">
          <p className="text-center text-[35px] font-[400]">Get in touch</p>
          <p className="text-center text-[16px] font-[300]">
            For inquiries or more information, please reach out to us:
          </p>
        </div>
        <div className="mx-auto flex flex-col gap-[32px]  md:flex-row md:justify-between">
          {contacts.map((contact) => (
            <ContactCard
              href={contact.href}
              key={contact.title}
              Icon={contact.Icon}
              description={contact.description}
              title={contact.title}
              details={contact.details}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[32px]">
        <p className="text-center text-[16px] text-supportingText font-[300]">
          Follow us on social media to stay updated with the latest news and
          events!
        </p>
        <div className="md:w-full mx-auto gap-[5px] md:gap-0 flex flex-row items-center">
          {socialLinks.map((link) => (
            <SocialLink
              Icon={link.Icon}
              linkText={link.linkText}
              to={link.to}
              key={link.linkText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
