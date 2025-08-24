// TODO: pick matching colors
// TODO: make content dynamic
// TODO: add SEO
import { MdxContent } from '@/components/contentlayer/MdxContent';
import GridRow from '@/components/general/GridRow';
import InnerPageHero from '@/components/general/InnerPageHero';
import { routing } from '@/i18n/routing';
import { allNotablePersonalities } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

export const generateStaticParams = async () => {
  // Generate static parameters for all combinations of locales and slugs
  const staticParams = routing.locales.flatMap((locale) =>
    allNotablePersonalities.map((post) => ({
      locale,
      slug: post.slug,
    }))
  );

  return staticParams;
};

type Params = Promise<{ slug: string; locale: string }>;

export default async function NotablePersonalitiesInnerPage({params}: {params: Params}){
  const {slug, locale} = await params;
  const notablePersonality = allNotablePersonalities.find((post) => post.slug === slug && post.locale === locale);
  if(!notablePersonality){
    notFound();
  }
  return (
    <>
    <InnerPageHero heroTitle={`${notablePersonality?.firstName} ${notablePersonality?.lastName}`} heroImg={notablePersonality?.heroImage ? notablePersonality.heroImage : "/images/placeholder.png"}/>
    <section className="container flex justify-center pt-[60px] pb-[120px] mx-auto text-justify">
        <GridRow className="mx-[calc(30px*-0.5)] justify-between items-center w-full">
          <div className="w-full sm:w-11/12 mx-auto px-4 sm:px-8">
            <div className="max-w-full md:max-w-[66.66667%] mx-auto">
              <MdxContent code={notablePersonality?.body.code || ""} />
            </div>
          </div>
        </GridRow>
      </section>
    </>
  )
}