// TODO: pick matching colors
// TODO: make content dynamic
// TODO: add SEO
// TODO: fix mdx content handling
import { MdxContent } from "@/components/contentlayer/MdxContent";
import GridRow from "@/components/general/GridRow";
import InnerPageHero from "@/components/general/InnerPageHero";
import { routing } from "@/i18n/routing";
import { faFacebookF, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { allTripSuggestions } from "contentlayer/generated";
import Link from "next/link";

export const generateStaticParams = async () => {
  // Generate static parameters for all combinations of locales and slugs
  const staticParams = routing.locales.flatMap((locale) =>
    allTripSuggestions.map((post) => ({
      locale,
      slug: post.slug,
    }))
  );

  return staticParams;
};

type Params = Promise<{ slug: string; locale: string }>

export default async function TripSuggestionsInnerPage({params}: {params: Params}) {
  const {slug, locale} = await params;

  const data = allTripSuggestions.find((post) => post.slug === slug && post.locale === locale);
  return (
    <>
      <InnerPageHero
        heroImg={data?.image || "/images/placeholder.png"}
        heroTitle={data?.title || ""}
        heroLead={data?.lead}
      />
      <section className="container pt-[60px] pb-[120px] mx-auto text-justify">
        <GridRow>
          <div className="w-11/12 mx-auto px-4 sm:px-8">
            <div className="max-w-full md:max-w-[66.66667%] mx-auto">
              <MdxContent code={data?.body.code || ""} />
              {/* <ContentList
                contentArray={[
                  "Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.",
                  "At urna condimentum mattis pellentesque id nibh. Laoreet non curabitur",
                  "Magna etiam tempor orci eu lobortis elementum.",
                  "Bibendum est ultricies integer quis. Semper eget duis at tellus.",
                ]}
              />
              <ContentBlockQuote
                quote={
                  "Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam phasellus vestibulum lorem sed risus ultricies. Magna sit amet purus gravida quis blandit. Arcu cursus vitae congue mauris."
                }
              />

              <ContentTextBlock>
                Donec purus posuere nullam lacus aliquam egestas arcu. A egestas
                a, tellus massa, ornare vulputate. Erat enim eget laoreet
                ullamcorper lectus aliquet nullam tempus id. Dignissim convallis
                quam aliquam rhoncus, lectus nullam viverra. Bibendum dignissim
                tortor, phasellus pellentesque commodo, turpis vel eu. Donec
                consectetur ipsum nibh lobortis elementum mus velit tincidunt
                elementum. Ridiculus eu convallis eu mattis iaculis et, in
                dolor. Sem libero, tortor suspendisse et, purus euismod posuere
                sit. Risus dui ut viverra venenatis ipsum tincidunt non, proin.
                Euismod pharetra sit ac nisi. Erat lacus, amet quisque urna
                faucibus. Rhoncus praesent faucibus rhoncus nec adipiscing
                tristique sed facilisis velit.
              </ContentTextBlock>
              <ContentTextBlock>
                Neque nulla porta ut urna rutrum. Aliquam cursus arcu tincidunt
                mus dictum sit euismod cum id. Dictum integer ultricies arcu
                fermentum fermentum sem consectetur. Consectetur eleifend aenean
                eu neque euismod amet parturient turpis vitae. Faucibus ipsum
                felis et duis fames.
              </ContentTextBlock>
              <GridRow>
                <ContentLabeledImage
                  className="w-full md:w-1/2 px-4 pb-4 md:pb-0"
                  src="/img/test-blog.png"
                  width={880}
                  height={880}
                  label="Donec purus posuere nullam lacus aliquam."
                />
                <ContentLabeledImage
                  className="w-full md:w-1/2 px-4 pb-4 md:pb-0"
                  src="/img/test-blog.png"
                  width={880}
                  height={880}
                  label="Donec purus posuere nullam lacus aliquam."
                />
              </GridRow>
              <ContentTextBlock>
                Donec purus posuere nullam lacus aliquam egestas arcu. A egestas
                a, tellus massa, ornare vulputate. Erat enim eget laoreet
                ullamcorper lectus aliquet nullam tempus id. Dignissim convallis
                quam aliquam rhoncus, lectus nullam viverra. Bibendum dignissim
                tortor, phasellus pellentesque commodo, turpis vel eu. Donec
                consectetur ipsum nibh lobortis elementum mus velit tincidunt
                elementum. Ridiculus eu convallis eu mattis iaculis et, in
                dolor. Sem libero, tortor suspendisse et, purus euismod posuere
                sit. Risus dui ut viverra venenatis ipsum tincidunt non, proin.
                Euismod pharetra sit ac nisi. Erat lacus, amet quisque urna
                faucibus. Rhoncus praesent faucibus rhoncus nec adipiscing
                tristique sed facilisis velit.
              </ContentTextBlock>
              <ContentTextBlock>
                Neque nulla porta ut urna rutrum. Aliquam cursus arcu tincidunt
                mus dictum sit euismod cum id. Dictum integer ultricies arcu
                fermentum fermentum sem consectetur. Consectetur eleifend aenean
                eu neque euismod amet parturient turpis vitae. Faucibus ipsum
                felis et duis fames.
              </ContentTextBlock> */}
              {/* Styled Social Icon List Start*/}
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
                        <FontAwesomeIcon
                          className="text-sm"
                          icon={faXTwitter}
                        />
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
