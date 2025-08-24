import { faClockFour } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export default async function MonumentCard({cardId, cardSlug, cardImage, cardDuration, cardLocation, cardTitle, cardPrice} : {cardId: string, cardSlug: string, cardImage: string, cardDuration: string, cardLocation: string, cardTitle: string, cardPrice: string}) {
  const translations = await getTranslations('MonumentsPage.CardComponent');
  return (
    <div
      key={cardId}
      className="flex-[0_0_auto] py-4 w-full md:w-1/2 lg:w-1/3 box-border max-w-full sm:px-[calc(30px*0.5)]"
    >
      <Link
        href={`/monuments/${cardSlug}`}
        className="relative flex flex-col justify-between z-0 group/scale-image"
      >
        <div className="relative block before:pb-[110%] before:block before:w-full rounded-xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-b after:from-primary-dark/0 after:to-primary-dark/80 after:z-[1] after:rounded-xl group-hover/scale-image:scale-115 duration-600 transition-transform">
            <Image
              width={421}
              height={301}
              src={cardImage}
              alt="image"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="absolute top-0 left-0 flex flex-col justify-between w-full h-full p-8">
          <div className="relative flex justify-between items-center text-sm text-white">
            <div className="flex items-center text-base text-white">
              <FontAwesomeIcon icon={faClockFour} size="lg" className="me-1" />
              {cardDuration}
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-end justify-between z-1">
            <div className="flex">
              <div className="flex items-center text-sm text-white">
                {/* <i className="icon-pin flex text-base text-white me-1"></i> */}
                <FontAwesomeIcon icon={faLocationDot} size="lg" className="me-2" />
                {cardLocation}
              </div>

              <h3 className="text-lg text-white font-semibold mt-1">
                <span className="bg-no-repeat [background-image:linear-gradient(90deg,#000_0,#000)] [background-position:0_95%] [background-size:0_1px] [transition:background-size_0.25s_cubic-bezier(0.785,0.135,0.15,0.86)] py-[0.1%]">
                  {cardTitle}
                </span>
              </h3>
            </div>

            <div className="sm:text-right text-white">
              <div className="text-sm leading-[1.4]">{translations.raw('visitableLabel')}</div>
              <div className="text-lg font-medium">{cardPrice}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
