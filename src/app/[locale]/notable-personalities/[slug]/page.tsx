// TODO: pick matching colors
// TODO: make content dynamic
// TODO: add SEO
import { MdxContent } from '@/components/contentlayer/MdxContent';
import GridRow from '@/components/general/GridRow'
import InnerPageHero from '@/components/general/InnerPageHero'
import { routing } from '@/i18n/routing';
import { allNotablePersonalities } from 'contentlayer/generated';
import Image from 'next/image'
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
    <section className="container pt-[60px] pb-[120px] mx-auto text-justify">
        <GridRow>
          <div className="w-11/12 mx-auto px-4 sm:px-8">
            <div className="max-w-full md:max-w-[66.66667%] mx-auto">
              <MdxContent code={notablePersonality?.body.code || ""} />
              {/* Styled Title Start */}
              {/* <h2 className="text-2xl md:text-3xl font-bold mb-5">
                The Brazen Head
              </h2> */}
              {/* Styled Title End */}

              {/* Text Bloxk Start */}
              {/* <p className="text-sm leading-7 my-5">
                Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
                Diam phasellus vestibulum lorem sed risus ultricies. Magna sit
                amet purus gravida quis blandit. Arcu cursus vitae congue
                mauris. Nunc mattis enim ut tellus elementum sagittis vitae et
                leo. Semper risus in hendrerit gravida rutrum quisque non. At
                urna condimentum mattis pellentesque id nibh tortor. A erat nam
                at lectus urna duis convallis convallis tellus. Sit amet mauris
                commodo quis imperdiet massa. Vitae congue eu consequat ac
                felis.
              </p> */}
              {/* Text Block End */}

              {/* Styled List Start */}
              {/* <ul className="my-5 ps-2">
                <li className="text-sm leading-7 m-0 before:inline-block before:w-1.5 before:h-1.5 before:bg-orange-500 before:rounded-full before:me-2.5 before:mb-1 before:align-middle">
                  Sed viverra ipsum nunc aliquet bibendum enim facilisis
                  gravida.
                </li>
                <li className="text-sm leading-7 m-0 before:inline-block before:w-1.5 before:h-1.5 before:bg-orange-500 before:rounded-full before:me-2.5 before:mb-1 before:align-middle">
                  At urna condimentum mattis pellentesque id nibh. Laoreet non
                  curabitur
                </li>
                <li className="text-sm leading-7 m-0 before:inline-block before:w-1.5 before:h-1.5 before:bg-orange-500 before:rounded-full before:me-2.5 before:mb-1 before:align-middle">
                  Magna etiam tempor orci eu lobortis elementum.
                </li>
                <li className="text-sm leading-7 m-0 before:inline-block before:w-1.5 before:h-1.5 before:bg-orange-500 before:rounded-full before:me-2.5 before:mb-1 before:align-middle">
                  Bibendum est ultricies integer quis. Semper eget duis at
                  tellus.
                </li>
              </ul> */}
              {/* Styled List End */}

              {/* Styled Blockquote Start */}
              {/* <blockquote className="my-5 flex rounded-lg bg-orange-500/5 px-8 py-8">
                <div className="me-5">
                  <svg
                    width="37"
                    height="25"
                    viewBox="0 0 37 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.50417 24.1C4.50417 24.1 2.8375 23.3333 1.50417 21.8C0.237499 20.2 -0.229167 17.9667 0.104167 15.1C0.570834 10.7 2.17083 7.1 4.90417 4.3C7.70417 1.43333 11.1708 0 15.3042 0C16.6375 0 17.6042 0.099998 18.2042 0.299995L17.4042 4.3C16.6708 4.16667 15.6375 4.1 14.3042 4.1C13.0375 4.1 11.8375 4.4 10.7042 5C9.6375 5.6 8.80417 6.4 8.20417 7.4C6.9375 8.86667 6.1375 10.5333 5.80417 12.4C6.80417 11.4 8.1375 10.9 9.80417 10.9C11.4708 10.9 12.8042 11.4 13.8042 12.4C14.8042 13.4 15.2042 14.7667 15.0042 16.5C14.8042 18.6333 13.8708 20.4333 12.2042 21.9C10.6042 23.3667 8.70417 24.1 6.50417 24.1ZM24.9042 24.1C22.9042 24.1 21.2375 23.3333 19.9042 21.8C18.6375 20.2 18.1708 17.9667 18.5042 15.1C18.9708 10.7 20.5708 7.1 23.3042 4.3C26.1042 1.43333 29.5708 0 33.7042 0C35.0375 0 36.0042 0.099998 36.6042 0.299995L35.8042 4.3C35.0708 4.16667 34.0375 4.1 32.7042 4.1C31.4375 4.1 30.2375 4.4 29.1042 5C28.0375 5.6 27.2042 6.4 26.6042 7.4C25.3375 8.86667 24.5375 10.5333 24.2042 12.4C25.2042 11.4 26.5375 10.9 28.2042 10.9C29.8708 10.9 31.2042 11.4 32.2042 12.4C33.2042 13.4 33.6042 14.7667 33.4042 16.5C33.2042 18.6333 32.2708 20.4333 30.6042 21.9C29.0042 23.3667 27.1042 24.1 24.9042 24.1Z"
                      fill="#EB662B"
                    ></path>
                  </svg>
                </div>
                <div className="text-base font-medium pe-10 italic">
                  “Sed viverra ipsum nunc aliquet bibendum enim facilisis
                  gravida. Diam phasellus vestibulum lorem sed risus ultricies.
                  Magna sit amet purus gravida quis blandit. Arcu cursus vitae
                  congue mauris.“
                </div>
              </blockquote> */}
              {/* Styled Blockquote End */}

              {/* <p className="text-sm leading-7 my-5">
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
              </p>
              <p className="text-sm leading-7 my-5">
                Neque nulla porta ut urna rutrum. Aliquam cursus arcu tincidunt
                mus dictum sit euismod cum id. Dictum integer ultricies arcu
                fermentum fermentum sem consectetur. Consectetur eleifend aenean
                eu neque euismod amet parturient turpis vitae. Faucibus ipsum
                felis et duis fames.
              </p> */}

              {/* <GridRow>
                <div className="flex-[0_0_auto] w-full pb-4 md:pb-0 md:w-1/2 px-4"> */}
                  {/* Styled Image Component with Image Title Start */}
                  {/* <Image
                    className="rounded-lg"
                    src="/images/placeholder/1.jpg"
                    width={880}
                    height={880}
                    alt="Image"
                  />
                  <div className="mt-1.5 text-sm italic">
                    Donec purus posuere nullam lacus aliquam.
                  </div> */}
                  {/* Styled Image Component with Image Title End */}
                {/* </div>
                <div className="flex-[0_0_auto] w-full md:w-1/2 px-4"> */}
                  {/* Styled Image Component with Image Title Start */}
                  {/* <Image
                    className="rounded-lg"
                    src="/images/placeholder/2.jpg"
                    width={880}
                    height={880}
                    alt="Image"
                  />
                  <div className="mt-1.5 text-sm italic">
                    Donec purus posuere nullam lacus aliquam.
                  </div> */}
                  {/* Styled Image Component with Image Title End */}
                {/* </div>
              </GridRow> */}

              {/* <p className="text-sm leading-7 my-5">
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
              </p>

              <p className="text-sm leading-7 my-5">
                Neque nulla porta ut urna rutrum. Aliquam cursus arcu tincidunt
                mus dictum sit euismod cum id. Dictum integer ultricies arcu
                fermentum fermentum sem consectetur. Consectetur eleifend aenean
                eu neque euismod amet parturient turpis vitae. Faucibus ipsum
                felis et duis fames.
              </p> */}
            </div>
          </div>
        </GridRow>
      </section>
    </>
  )
}