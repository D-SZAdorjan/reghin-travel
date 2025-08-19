// TODO: pick matching colors
// TODO: make content dynamic
// TODO: fix mdx content handling
// TODO: add SEO
import { MdxContent } from "@/components/contentlayer/MdxContent";
import GridRow from "@/components/general/GridRow";
import InnerPageHero from "@/components/general/InnerPageHero";
import { routing } from "@/i18n/routing";
import {
  faFacebookF,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { allArticles } from "contentlayer/generated";
import Link from "next/link";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  // Generate static parameters for all combinations of locales and slugs
  const staticParams = routing.locales.flatMap((locale) =>
    allArticles.map((post) => ({
      locale,
      slug: post.slug,
    }))
  );

  return staticParams;
};

type Params = Promise<{ slug: string; locale: string }>

export default async function BlogPostInnerPage({ params }: {params: Params}) {
  const {slug, locale} = await params;

  const data = allArticles.find((post) => post.slug === slug && post.locale === locale);
  if(!data){
        notFound();
  }
  return (
    <>
      <InnerPageHero
        heroImg={data?.heroImage || (data?.coverImage || "/images/placeholder.png")}
        heroTitle={data?.title || ""}
        heroLead={data?.lead}
      />
      <section className="container pt-[60px] pb-[120px] mx-auto text-justify overflow-x-hidden">
        <GridRow className="mx-[calc(30px*-0.5)] justify-between items-center z-20">
          <div className="w-11/12 mx-auto px-4 sm:px-8">
            <div className="max-w-full md:max-w-[66.66667%] mx-auto">
              <MdxContent code={data?.body.code || ""} />
              <GridRow className="mx-[calc(30px*-0.5)] justify-between items-center pt-5">
                <div className="flex-[0_0_auto] w-auto px-4">
                  <div className="flex gap-x-2.5">
                    <div>
                      <Link
                        href=""
                        className="flex justify-center items-center w-10 h-10 rounded-full bg-orange-500/5 text-center text-sm"
                      >
                        <FontAwesomeIcon
                          className="text-sm"
                          icon={faFacebookF}
                        />
                      </Link>
                    </div>

                    <div>
                      <Link
                        href=""
                        className="flex justify-center items-center w-10 h-10 rounded-full bg-orange-500/5 text-center text-sm"
                      >
                        <FontAwesomeIcon className="text-sm" icon={faX} />
                      </Link>
                    </div>

                    <div>
                      <Link
                        href=""
                        className="flex justify-center items-center w-10 h-10 rounded-full bg-orange-500/5 text-center text-sm"
                      >
                        <FontAwesomeIcon
                          className="text-sm"
                          icon={faInstagram}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </GridRow>
              {/* Styled Social Icon List End*/}
            </div>
          </div>
        </GridRow>
      </section>
    </>
  );
}
