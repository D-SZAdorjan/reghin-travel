import TripSuggestionsSlider from '@/components/general/TripSuggestionsSlider';
import { routing } from '@/i18n/routing';
import { allTripSuggestions } from 'contentlayer/generated';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import GridRow from './general/GridRow';

export default async function TripSuggestionSection({
  locale = routing.defaultLocale,
}: {
  locale?: string;
}){
  const tripSuggestions = allTripSuggestions.filter((tripSuggestion) => tripSuggestion.locale === locale);
  const translations = await getTranslations('HomePage.TripSuggestionsComponent');
  return (
    <section className="container mx-auto relative h-[80vh] py-10">
      <div className="absolute z-[-5] -me-[7%] bg-primary-light max-w-[1080px] w-3/4 max-h-full h-[90%] right-0 bottom-0 my-auto top-0 rounded-3xl"></div>
      <div className="absolute z-[-1] -ms-[7%] w-[50%] h-[75%] top-0 bottom-0 my-auto left-0 bg-primary-dark rounded-2xl">
        <Image src={"/images/home-hero-ana-landscape.png"} className="w-full h-full object-cover rounded-2xl" width={1920} height={1080} alt="Hero Image" />
      </div>
      <div className="w-full h-full flex flex-col items-end justify-center">
        <GridRow className="mx-[calc(30px*-0.5)] w-1/2 justify-between items-center pb-14">
          <div className="flex-[0_0_auto] -gap-1.5 box-border max-w-full px-[calc(30px*0.5)] pt-0">
            <h2 className="transition duration-[800ms] text-2xl">{translations.raw('title')}</h2>
            <p>{translations.raw('lead')}</p>
          </div>
        </GridRow>
      <TripSuggestionsSlider data={tripSuggestions}/>
      </div>
    </section>
  );
}