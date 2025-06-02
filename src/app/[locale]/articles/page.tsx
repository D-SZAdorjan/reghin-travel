import Pagination from "@/components/articlesPage/Pagination";
import PostList from "@/components/articlesPage/PostList";
import SideBar from "@/components/articlesPage/SideBar";
import GridRow from "@/components/general/GridRow";
import InnerPageHero from "@/components/general/InnerPageHero";

type Params = Promise<{ locale: string }>

export default async function BlogsPage({params}: {params: Params}) {
  const {locale} = await params;
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
              <PostList locale={locale}/>
              <Pagination/>
            </div>
            <div className="flex-[0_0_auto] w-full lg:w-2/6 py-4 px-8">
              <SideBar />
            </div>
          </GridRow>
        </div>
      </section>
    </>
  );
}
