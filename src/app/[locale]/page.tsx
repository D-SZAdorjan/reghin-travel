import ChurchSection from "@/components/ChurchSection";
import HomeHeroSection from "@/components/HomeHeroSection";
import InfoCardSlider from "@/components/InfoCardSlider";
import MainArticles from "@/components/MainArticles";
import NotablePersonalitySection from "@/components/NotablePersonalitySection";

type Params = Promise<{ locale: string }>

export default async function Home({params}: {params: Params}) {
  const { locale } = await params;
  
  return (
    <>
      <HomeHeroSection/>
      <section className="pb-20 w-full relative overflow-hidden">
        <InfoCardSlider locale={locale} />
      </section>
      <ChurchSection locale={locale}/>
      {/* <TripSuggestionSection locale={locale} /> */}
      <NotablePersonalitySection locale={locale}/>
      {/* <HospitalitySection/> */}
      <MainArticles locale={locale}/>
      {/* <InnerPageHeader1/> */}
    </>
  );
}