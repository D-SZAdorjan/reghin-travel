// TODO: pick matching colors
// TODO: make content dynamic
// TODO: add SEO
import InnerPageHero from "@/components/general/InnerPageHero";
import ContentEn from "@/content/city-history/ContentEn";
import ContentHu from "@/content/city-history/ContentHu";
import { getTranslations } from "next-intl/server";

type Params = Promise<{ locale: string }>

export default async function CityHistoryPage({params}: {params: Params}) {
  const {locale} = await params;
  const translations = await getTranslations('CityHistoryPage');
  return (
    <>
      <InnerPageHero
        heroImg="/images/home-hero-ana-landscape.png"
        heroTitle={translations.raw('HeroComponent.title')}
        heroLead={translations.raw('HeroComponent.lead')}
      />
      {locale === "hu" && <ContentHu/>}
      {locale === "en" && <ContentEn/>}
    </>
  );
}
