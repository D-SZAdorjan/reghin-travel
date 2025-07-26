// TODO: pick matching colors
// TODO: make content dynamic
// TODO: add SEO
// TODO: fix mdx content handling
// TODO: bigger padding on top for the content to not collide with the navbar
import { MdxContent } from "@/components/contentlayer/MdxContent";
import GalleryHero from "@/components/general/GalleryHero";
import GridRow from "@/components/general/GridRow";
import { routing } from "@/i18n/routing";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { allMonuments } from "contentlayer/generated";
import Link from "next/link";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  // Generate static parameters for all combinations of locales and slugs
  const staticParams = routing.locales.flatMap((locale) =>
    allMonuments.map((post) => ({
      locale,
      slug: post.slug,
    }))
  );

  return staticParams;
};

type Params = Promise<{ slug: string; locale: string }>

export default async function MonumentsInnerPage({ params }: {params: Params}) {
  const {slug, locale} = await params;

  const data = allMonuments.find(
    (post) => post.slug === slug && post.locale === locale
  );
  if (!data) {
    notFound();
  }

  return (
    <>
      <GalleryHero
      title={data.name}
      address={data.address}
      visitHours={data.openHoursShort || data.openHours || ""}
      images={data.imageGallery}/>
      <section className="container pt-[60px] pb-[120px] mx-auto text-justify">
        <GridRow>
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
            </div>
          </div>
        </GridRow>
      </section>
    </>
  );
}
