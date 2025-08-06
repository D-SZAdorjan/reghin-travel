// TODO: pick matching colors
// TODO: make content dynamic
// TODO: add Monument and Church content in content folder

import Pagination from "@/components/articlesPage/Pagination";
import InnerPageHero from "@/components/general/InnerPageHero";
import CardContainer from "@/components/monumentsPage/CardContainer";
import { allMonuments } from "contentlayer/generated";
import { getTranslations } from "next-intl/server";

type Params = Promise<{ locale: string }>

// TODO: add SEO
export default async function MonumentsPage({params, searchParams}: {params: Params, searchParams: Promise<{ [key: string]: string | string[] | undefined }>}) {
  const {locale} = await params;
  const { page } = await searchParams;
  const pageSize = 6;
  const currentPage = Number(page) || 1;
  const monuments = allMonuments.filter((monument) => monument.locale === locale).sort((a, b) => new Date(b.createDate).getTime() - new Date(a.createDate).getTime());
  let slicedMonuments = [];
  if((monuments.length - 1) > pageSize) {
    slicedMonuments = monuments.slice((currentPage - 1) * pageSize, (currentPage * pageSize))
  }else{
    slicedMonuments = monuments
  }
  const translations = await getTranslations('MonumentsPage.HeroComponent');
  return (
    <>
    <InnerPageHero
            heroImg="/images/home-hero-ana-landscape.png"
            heroHeight="h-[35vh]"
            heroTitle={translations.raw('title')}
            heroLead={translations.raw('lead')}
          />
    <CardContainer monuments={slicedMonuments}/>
    <section className="pb-20">
      <div className="container mx-auto">
        { monuments.length - 1 > pageSize && <Pagination totalPages={Math.ceil((monuments.length - 1) / pageSize)} itemCount={monuments.length - 1} translationKey="MonumentsPage.Pagination" pageSize={pageSize} />}
      </div>
    </section>
    </>
  );
}
