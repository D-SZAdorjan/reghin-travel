import { routing } from '@/i18n/routing';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { allArticles } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import GridRow from './general/GridRow';
import { getTranslations } from 'next-intl/server';


export default async function MainArticles({ locale = routing.defaultLocale }: { locale?: string }){
  const articles = allArticles.filter((article) => article.locale === locale && article.showOnHomePage && article.showOnHomePage === true).slice(0, 2);
  const translations = await getTranslations('HomePage.ArticlesComponent');
  return (
    <section className="pb-20 w-full">
      <div className="container px-4 md:px-0 mx-auto">
        <GridRow>
          <div className="flex-[0_0_auto] -gap-1.5 box-border max-w-full px-[calc(30px*0.5)] pt-0">
            <h2 className="transition duration-[800ms] text-2xl">
              {translations.raw('title')}
            </h2>
          </div>
          <div className="flex-[0_0_auto] -gap-1.5 box-border max-w-full px-[calc(30px*0.5)] pt-0">
            <Link href="/articles">
              <span>{translations.raw('ctaBtnText')}</span>
              <FontAwesomeIcon
                icon={faArrowUp}
                className="ms-2.5 text-base rotate-45"
              />
            </Link>
          </div>
        </GridRow>
        <GridRow className="mx-[calc(30px*-0.5)] justify-between items-stretch pt-14">
          { articles[0] && <div className="px-[calc(30px*0.5)] flex-[0_0_auto] w-full mb-8 md:mb-0 md:w-1/2 box-border">
            <div className="relative h-full z-0 box-border">
              <div className="absolute top-0 left-0 w-full h-full z-[-1] box-border">
                <Image
                  src={articles[0].coverImage ? articles[0].coverImage : "/images/placeholder.png"}
                  width={630}
                  height={401}
                  alt="image"
                  className="rounded-xl object-cover h-full w-full"
                />
              </div>
              <div className="realative w-full h-full p-14 box-border">
                <div className="text-white box-border">
                  {/* Enjoy these cool staycation promotions in Singapore */}
                  {articles[0].subTitle}
                </div>
                <h4 className="text-3xl font-bold text-white">
                  {/* Best staycation <br></br> deals */}
                  {articles[0].title}
                </h4>
                <Link
                  href={`/articles/${articles[0].slug}`}
                  className="mt-20 py-4 px-9 cursor-pointer bg-white flex items-center justify-center text-center text-sm font-medium rounded-xl border border-transparent transition duration-300 ease-[cubic-bezier(.165,.84,.44,1)] w-fit"
                >
                  {translations.raw('cardBtnText')}
                  <FontAwesomeIcon icon={faArrowUp} className="ms-2 rotate-45"/>
                </Link>
              </div>
            </div>
          </div>}
          
          {articles[1] && <div className="px-[calc(30px*0.5)] flex-[0_0_auto] w-full md:w-1/2 box-border">
            <div className="relative h-full z-0 box-border">
              <div className="absolute top-0 left-0 w-full h-full z-[-1] box-border">
                <Image
                  src={articles[1].coverImage ? articles[1].coverImage as string : "/images/placeholder.png"}
                  width={630}
                  height={401}
                  alt="image"
                  className="rounded-xl object-cover h-full w-full"
                />
              </div>
              <div className="realative w-full h-full p-14 box-border">
                <div className="text-white box-border">
                  {/* Enjoy these cool staycation promotions in Singapore */}
                  {articles[1].subTitle}
                </div>
                <h4 className="text-3xl font-bold text-white">
                  {/* Best staycation <br></br> deals */}
                  {articles[1].title}
                </h4>
                <Link
                  href={`/articles/${articles[1].slug}`}
                  className="mt-20 py-4 px-9 cursor-pointer bg-white flex items-center justify-center text-center text-sm font-medium rounded-xl border border-transparent transition duration-300 ease-[cubic-bezier(.165,.84,.44,1)] w-fit"
                >
                  {translations.raw('cardBtnText')}
                  <FontAwesomeIcon icon={faArrowUp} className="ms-2 rotate-45"/>
                </Link>
              </div>
            </div>
          </div>}
        </GridRow>
        
      </div>
    </section>
  );
}