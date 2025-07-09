// TODO: pick matching colors
// TODO: make content dynamic
// TODO: add Monument and Church content in content folder

import InnerPageHero from "@/components/general/InnerPageHero";
import CardContainer from "@/components/monumentsPage/CardContainer";
import { allMonuments } from "contentlayer/generated";

type Params = Promise<{ locale: string }>

// TODO: add SEO
export default async function MonumentsPage({params}: {params: Params}) {
  const {locale} = await params;
  const monuments = allMonuments.filter((monument) => monument.locale === locale).sort((a, b) => new Date(b.createDate).getTime() - new Date(a.createDate).getTime());
  return (
    <>
    <InnerPageHero
            heroImg="/images/home-hero-ana-landscape.png"
            heroHeight="h-[35vh]"
            heroTitle="Monuments"
            heroLead="Monuments that speak to the soul of the city"
          />
    <CardContainer monuments={monuments}/>
    </>
  );
}
