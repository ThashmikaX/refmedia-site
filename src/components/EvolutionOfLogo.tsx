import { evolutionOfLogos } from "./Assests";
import Logo from "./Logo";

export default function EvolutionOfLogo() {
  return (
    <div className="mx-[16px] max-w-[960px] sm:w-full sm:mx-auto sm:px-[40px] my-[96px] sm:my-[128px] flex flex-col gap-[40px] sm:gap-[64px]">
      <div className="w-full flex flex-col gap-[16px] text-supportingText">
        <p className="text-center text-[35px] font-[400px]">
          Evolution of Our Logo
        </p>
        <p className="text-justify text-[16px] font-[300px]">
          Since our establishment in 2016, the REF Media Unit has undergone
          significant growth and transformation. A key part of our journey has
          been the evolution of our logo, reflecting our commitment to
          innovation, excellence, and adaptability. Here's a look at how our
          logo has changed over the years:
        </p>
      </div>
      <div className="mx-auto md:mx-0 flex flex-col gap-[32px]  md:flex-row md:justify-between">
        {evolutionOfLogos.map((logo) => (
          <Logo
            imgSrc={logo.imgSrc}
            title={logo.title}
            year={logo.year}
            key={logo.year}
          />
        ))}
      </div>
    </div>
  );
}
