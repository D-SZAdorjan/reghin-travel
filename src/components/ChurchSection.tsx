import placeholderImg from "@/../public/images/placeholder.png";
import GridRow from "@/components/general/GridRow";
import { routing } from "@/i18n/routing";
import { allChurches } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";

const imageSizes = [
  "col-span-6 md:col-span-3 lg:col-span-3 h-[240px]",
  "col-span-6 md:col-span-6 lg:col-span-5 h-[240px]",
  "col-span-12 md:col-span-3 lg:col-span-4 row-span-2",
  "col-span-12 md:col-span-3 lg:col-span-3 h-[240px]",
  "col-span-6 md:col-span-3 lg:col-span-2 h-[240px]",
  "col-span-6 md:col-span-3 lg:col-span-3 h-[240px]",
];

export default async function ChurchSection({
  locale = routing.defaultLocale,
}: {
  locale?: string;
}) {
  
  const churches = allChurches.filter((church) => church.locale === locale);
  
  return (
    <section className="pb-20">
      <div className="container mx-auto">
        <GridRow>
          <div className="flex-[0_0_auto] -gap-1.5 box-border max-w-full px-[calc(30px*0.5)] pt-0">
            <h2 className="transition duration-[800ms] text-2xl">Churches</h2>
          </div>
          {/* <div className="flex-[0_0_auto] -gap-1.5 box-border max-w-full px-[calc(30px*0.5)] pt-0">
            <Link href="/churches">
              <span>See all</span>
              <FontAwesomeIcon
                icon={faArrowUp}
                className="ms-2.5 text-base rotate-45"
              />
            </Link>
          </div> */}
        </GridRow>
        <div className="grid grid-cols-12 grid-rows-2 gap-7 pt-14 transition duration-[800ms] ease">
          {churches.map((church, index) => {
            return (
              <Link
                key={`monument-${index}-${church.slug}`}
                href="/"
                className={`relative z-0 rounded-xl overflow-hidden p-7 no-underline ${imageSizes[index]} group`}
              >
                <div className="absolute top-0 start-0 w-full h-full z-[-1] overflow-hidden box-border">
                  <Image
                    width={780}
                    height={780}
                    style={{ objectFit: "cover" }}
                    src={church.image ? church.image : placeholderImg}
                    alt="Monument Image"
                    className="object-cover w-full h-full transition duration-700 max-w-full align-middle box-border group-hover:scale-125"
                  ></Image>
                </div>
                <div className="flex items-end w-full h-full">
                  <h4 className="text-white text-xl">{church.name}</h4>
                </div>
              </Link>
            );
          })}
          {/* <Link
            href="/"
            className="relative z-0 rounded-xl overflow-hidden p-7 no-underline col-span-3 h-[240px] group"
          >
            <div className="absolute top-0 start-0 w-full h-full z-[-1] overflow-hidden box-border">
              <Image
                width={780}
                height={780}
                style={{ objectFit: "cover" }}
                src={monumentImg1}
                alt="Monument Image"
                className="object-cover w-full h-full transition duration-700 max-w-full align-middle box-border group-hover:scale-125"
              ></Image>
            </div>
            <div className="flex items-end w-full h-full">
              <h4 className="text-white text-xl">Monument 1</h4>
            </div>
          </Link> */}
          {/* <Link
            href="/"
            className="relative z-0 rounded-xl overflow-hidden p-7 no-underline col-span-5 h-[240px] group"
          >
            <div className="absolute top-0 start-0 w-full h-full z-[-1] overflow-hidden box-border">
              <Image
                width={780}
                height={780}
                style={{ objectFit: "cover" }}
                src={monumentImg2}
                alt="Monument Image"
                className="object-cover w-full h-full transition duration-700 max-w-full align-middle box-border group-hover:scale-125"
              ></Image>
            </div>
            <div className="flex items-end w-full h-full">
              <h4 className="text-white text-xl">Monument 2</h4>
            </div>
          </Link> */}
          {/* <Link
            href="/"
            className="relative z-0 rounded-xl overflow-hidden p-7 no-underline col-span-4 row-span-2 group"
          >
            <div className="absolute top-0 start-0 w-full h-full z-[-1] overflow-hidden box-border">
              <Image
                width={780}
                height={780}
                style={{ objectFit: "cover" }}
                src={monumentImg3}
                alt="Monument Image"
                className="object-cover w-full h-full transition duration-700 max-w-full align-middle box-border group-hover:scale-125"
              ></Image>
            </div>
            <div className="flex items-end w-full h-full">
              <h4 className="text-white text-xl">Monument 3</h4>
            </div>
          </Link> */}
          {/* <Link
            href="/"
            className="relative z-0 rounded-xl overflow-hidden p-7 no-underline col-span-3 h-[240px] group"
          >
            <div className="absolute top-0 start-0 w-full h-full z-[-1] overflow-hidden box-border">
              <Image
                width={780}
                height={780}
                style={{ objectFit: "cover" }}
                src={monumentImg4}
                alt="Monument Image"
                className="object-cover w-full h-full transition duration-700 max-w-full align-middle box-border group-hover:scale-125"
              ></Image>
            </div>
            <div className="flex items-end w-full h-full">
              <h4 className="text-white text-xl">Monument 4</h4>
            </div>
          </Link> */}
          {/* <Link
            href="/"
            className="relative z-0 rounded-xl overflow-hidden p-7 no-underline col-span-2 h-[240px] group"
          >
            <div className="absolute top-0 start-0 w-full h-full z-[-1] overflow-hidden box-border">
              <Image
                width={780}
                height={780}
                style={{ objectFit: "cover" }}
                src={monumentImg5}
                alt="Monument Image"
                className="object-cover w-full h-full transition duration-700 max-w-full align-middle box-border group-hover:scale-125"
              ></Image>
            </div>
            <div className="flex items-end w-full h-full">
              <h4 className="text-white text-xl">Monument 5</h4>
            </div>
          </Link> */}
          {/* <Link
            href="/"
            className="relative z-0 rounded-xl overflow-hidden p-7 no-underline col-span-3 h-[240px] group"
          >
            <div className="absolute top-0 start-0 w-full h-full z-[-1] overflow-hidden box-border">
              <Image
                width={780}
                height={780}
                style={{ objectFit: "cover" }}
                src={monumentImg6}
                alt="Monument Image"
                className="object-cover w-full h-full transition duration-700 max-w-full align-middle box-border group-hover:scale-125"
              ></Image>
            </div>
            <div className="flex items-end w-full h-full">
              <h4 className="text-white text-xl">Monument 6</h4>
            </div>
          </Link> */}
        </div>
      </div>
    </section>
  );
}
