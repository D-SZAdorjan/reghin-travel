// import heroImageBottomShape from "@/../public/images/svgs/heroBottom-new.svg";
import heroImageBottomShape from "@/../public/images/svgs/heroBottom.svg";
import Image from "next/image";
import GridRow from "./GridRow";

export default async function InnerPageHero({heroImg, heroHeight = "h-[60vh]", heroTitle = "Your guide to everywhere", heroLead = "Find inspiration, guides and stories for wherever you're going Select a destination"}: {heroImg: string, heroHeight?: string, heroTitle: string, heroLead?: string}) {
  return (
    <section className={`w-full md:w-11/12 ${heroHeight} flex mx-auto relative mt-20 overflow-hidden rounded-t-xl`}>
      <div className="absolute top-0 bottom-0 m-auto w-full h-full z-5">
        <Image
          src={heroImg}
          className="w-full h-full object-cover max-h-[60vh]"
          width={1920}
          height={1080}
          alt="Hero Image"
        />
        <Image
          src={heroImageBottomShape}
          className="w-full object-cover absolute bottom-0"
          width={1920}
          height={40}
          alt="Hero Image"
        />
      </div>
      <div className="container m-auto z-10 px-4 md:px-0">
        <GridRow className="mx-[calc(30px*-0.5)] justify-center">
          <div className="flex-[0_0_auto] w-full">
            <div className="text-center">
              <h1 className="text-primary-dark text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight">
                {heroTitle}
              </h1>
              {heroLead && <p className="text-text-primary text-base mt-2.5">
                {heroLead}
              </p>}
            </div>
          </div>
        </GridRow>
      </div>
    </section>
  );
};
