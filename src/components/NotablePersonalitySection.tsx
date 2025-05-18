import Image from 'next/image';
import Link from 'next/link';
import placeholderImg from '../../public/images/placeholder.png';
import GridRow from './general/GridRow';

import { routing } from '@/i18n/routing';

import { allNotablePersonalities } from "contentlayer/generated";

export default async function NotablePersonalitySection({ locale = routing.defaultLocale }: { locale?: string }){
  const notablePersonalities = allNotablePersonalities.filter((person) => person.locale === locale);
  
  return (
    <section className="pb-20">
      <div className="container mx-auto">
        <GridRow>
          <div className="flex-[0_0_auto] -gap-1.5 box-border max-w-full px-[calc(30px*0.5)] pt-0">
            <h2 className="transition duration-[800ms] text-2xl">Notable personalities</h2>
          </div>
          {/* <div className="flex-[0_0_auto] -gap-1.5 box-border max-w-full px-[calc(30px*0.5)] pt-0">
            <Link href="/">
              <span>See all</span>
              <FontAwesomeIcon
                icon={faArrowUp}
                className="ms-2.5 text-base rotate-45"
              />
            </Link>
          </div> */}
        </GridRow>
        <GridRow className="mx-[calc(30px*-0.5)] justify-evenly items-center pt-14">
          {notablePersonalities.map((person, index) => {
            return (
              <div key={`person-${index}-${person.slug}`} className="flex-[0_0_auto] py-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 box-border max-w-full px-[calc(30px*0.5)]">
                <Link
                  href={`/notable-personalities/${person.slug}`}
                  className="relative z-0 no-underline group block"
                >
                  <div className="overflow-hidden rounded-xl relative block">
                    <Image
                      width={450}
                      height={600}
                      src={person.image ? person.image : placeholderImg}
                      alt="image"
                      className="img-ratio aspect-[9/12] object-cover group-hover:scale-150 transition duration-700 ease-in-out"
                    />
                  </div>
                  <div className="h-full w-full bg-black z-10 absolute top-0 left-0 rounded-xl opacity-60 hidden group-hover:flex justify-center items-center ">
                    <h3 className="text-white text-center text-2xl font-semibold">
                      { person.lastName && person.firstName ? `${person.lastName} ${person.firstName}` : "Unknown" }
                    </h3>
                  </div>
                </Link>
              </div>
            );
          })}
          {/* <div className="flex-[0_0_auto] py-4 w-1/4 box-border max-w-full px-[calc(30px*0.5)]">
            <Link href="/" className="relative z-0 no-underline group block">
              <div className="overflow-hidden rounded-xl relative block">
                <Image
                  width={450}
                  height={600}
                  src={ChurchImage1}
                  alt="image"
                  className="img-ratio group-hover:scale-150 transition duration-700 ease-in-out"
                />
              </div>
              <div className="h-full w-full bg-black z-10 absolute top-0 left-0 rounded-xl opacity-60 hidden group-hover:flex justify-center items-center ">
                <h3 className="text-white text-center text-2xl font-semibold">Church 1</h3>
              </div>
            </Link>
          </div>
          <div className="flex-[0_0_auto] py-4 w-1/4 box-border max-w-full px-[calc(30px*0.5)]">
            <Link href="/" className="relative z-0 no-underline group block">
              <div className="overflow-hidden rounded-xl relative block">
                <Image
                  width={450}
                  height={600}
                  src={ChurchImage1}
                  alt="image"
                  className="img-ratio group-hover:scale-150 transition duration-700 ease-in-out"
                />
              </div>
              <div className="h-full w-full bg-black z-10 absolute top-0 left-0 rounded-xl opacity-60 hidden group-hover:flex justify-center items-center ">
                <h3 className="text-white text-center text-2xl font-semibold">Church 2</h3>
              </div>
            </Link>
          </div>
          <div className="flex-[0_0_auto] py-4 w-1/4 box-border max-w-full px-[calc(30px*0.5)]">
            <Link href="/" className="relative z-0 no-underline group block">
              <div className="overflow-hidden rounded-xl relative block">
                <Image
                  width={450}
                  height={600}
                  src={ChurchImage1}
                  alt="image"
                  className="img-ratio group-hover:scale-150 transition duration-700 ease-in-out"
                />
              </div>
              <div className="h-full w-full bg-black z-10 absolute top-0 left-0 rounded-xl opacity-60 hidden group-hover:flex justify-center items-center ">
                <h3 className="text-white text-center text-2xl font-semibold">Church 3</h3>
              </div>
            </Link>
          </div>
          <div className="flex-[0_0_auto] py-4 w-1/4 box-border max-w-full px-[calc(30px*0.5)]">
            <Link href="/" className="relative z-0 no-underline group block">
              <div className="overflow-hidden rounded-xl relative block">
                <Image
                  width={450}
                  height={600}
                  src={ChurchImage1}
                  alt="image"
                  className="img-ratio group-hover:scale-150 transition duration-700 ease-in-out"
                />
              </div>
              <div className="h-full w-full bg-black z-10 absolute top-0 left-0 rounded-xl opacity-60 hidden group-hover:flex justify-center items-center ">
                <h3 className="text-white text-center text-2xl font-semibold">Church 4</h3>
              </div>
            </Link>
          </div> */}
        </GridRow>
      </div>
    </section>
  );
}