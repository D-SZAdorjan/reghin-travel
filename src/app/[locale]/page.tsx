import ChurchSection from "@/components/ChurchSection";
import HomeHeroSection from "@/components/HomeHeroSection";
import InfoCardSlider from "@/components/InfoCardSlider";
import MainArticles from "@/components/MainArticles";
import NotablePersonalitySection from "@/components/NotablePersonalitySection";

export default async function Home({params}: {params: {locale: string}}) {
  const {locale} = await params;
  // const translations = useTranslations('HomePage');
  return (
    <>
      <HomeHeroSection/>
      <section className="pb-20 relative">
        <InfoCardSlider locale={locale} />
      </section>
      <ChurchSection locale={locale}/>
      <NotablePersonalitySection locale={locale}/>
      {/* <HospitalitySection/> */}
      <MainArticles locale={locale}/>
      {/* <InnerPageHeader1/> */}
    </>
  );
}