import Pagination from "@/components/articlesPage/Pagination";
import PostList from "@/components/articlesPage/PostList";
import SideBar from "@/components/articlesPage/SideBar";
import GridRow from "@/components/general/GridRow";
import { allArticles } from "contentlayer/generated";
import InnerPageHero from "@/components/general/InnerPageHero";

type Params = Promise<{ locale: string }>

export default async function BlogsPage({params, searchParams}: {params: Params, searchParams: Promise<{ [key: string]: string | string[] | undefined }>}) {
  const {locale} = await params;
  const { page } = await searchParams;
  const pageSize = 4;
  const currentPage = Number(page) || 1;
  const articles = allArticles.filter((article) => article.locale === locale).sort((a, b) => new Date(b.createDate).getTime() - new Date(a.createDate).getTime());
  let slicedArticles = [];
  if((articles.length - 1) > pageSize) {
    slicedArticles = articles.slice((currentPage - 1) * pageSize, (currentPage * pageSize))
  }else{
    slicedArticles = articles
  }

  return (
    <>
      <InnerPageHero
        heroImg="/images/home-hero-ana-landscape.png"
        heroTitle="Blogs"
        heroLead="Find inspiration, guides and stories for wherever you're going"
      />
      <section className="pt-[60px] pb-[120px]">
        <div className="max-w-[64%] lg:max-w-[80%] mx-auto">
          <GridRow className="mx-[calc(30px*-0.5)]">
            <div className="flex-[0_0_auto] w-full lg:w-4/6 py-4 px-8">
              <PostList articles={slicedArticles}/>
              { articles.length - 1 > pageSize && <Pagination totalPages={Math.ceil((articles.length - 1) / pageSize)} itemCount={articles.length - 1} pageSize={pageSize}/>}
            </div>
            <div className="flex-[0_0_auto] w-full lg:w-2/6 py-4 px-8">
              <SideBar recentArticles={articles.filter((article) => article.locale === locale).slice(0, 3)} />
            </div>
          </GridRow>
        </div>
      </section>
    </>
  );
}
