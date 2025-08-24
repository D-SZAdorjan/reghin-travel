import { routing } from "@/i18n/routing";
import {
  faArrowUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import GridRow from "@/components/general/GridRow";
import SwiperSlider from "@/components/general/SwiperSlider";
import { allMonuments } from "contentlayer/generated";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
// import NavigationButton from "./general/NavigationButton";

export default async function InfoCardSlider({ locale = routing.defaultLocale}: {locale: string}){
  const translations = await getTranslations('HomePage.MonumentsComponent');
  const monuments = allMonuments.filter((monument) => monument.locale === locale && monument.category !== "church").sort((a, b) => new Date(b.createDate).getTime() - new Date(a.createDate).getTime());
  return (
    <div className="container px-4 md:px-0 mx-auto">
      <GridRow>
        <div className="flex-[0_0_auto] -gap-1.5 box-border max-w-full px-[calc(30px*0.5)] pt-0">
          <h2 className="transition duration-[800ms] text-2xl">
            {translations.raw('title')}
          </h2>
        </div>
        <div className="flex-[0_0_auto] -gap-1.5 box-border max-w-full px-[calc(30px*0.5)] pt-0">
          <Link href="/monuments">
            <span>{translations.raw('ctaBtnText')}</span>
            <FontAwesomeIcon
              icon={faArrowUp}
              className="ms-2.5 text-base rotate-45"
            />
          </Link>
        </div>
      </GridRow>
      <SwiperSlider data={monuments}/>
    </div>
  );
}
