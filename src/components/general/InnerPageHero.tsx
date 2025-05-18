import React from "react";
import GridRow from "./GridRow";
import Image from "next/image";
import heroImageBottomShape from "@/../public/images/svgs/heroBottom.svg";

export default async function InnerPageHero({heroImg, heroTitle = "Your guide to everywhere", heroLead = "Find inspiration, guides and stories for wherever you're going Select a destination"}: {heroImg: string, heroTitle: string, heroLead?: string}) {
  return (
    <section className="w-full md:w-11/12 h-[60vh] flex mx-auto relative mt-20 overflow-hidden rounded-t-xl">
      <div className="absolute top-0 bottom-0 m-auto w-full h-full -z-10">
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
      <div className="container m-auto z-10">
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
