import { Article } from "contentlayer/generated";
import { getFormatter, getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export default async function SideBar({ recentArticles = [] }: { recentArticles?: Article[]}) {
  const format = await getFormatter();
  const translations = await getTranslations('ArticlesPage');
  return (
    <section className="rounded-xl border-2 border-solid border-primary-light px-6 md:px-9 py-7">
      <div className="my-8">
        <h4 className="mb-5 font-medium text-lg">{translations.raw('Sidebar.title')}</h4>
        <div className="flex flex-col gap-y-4">
          {
            recentArticles.map((article) => {
              return (
                <Link key={`recent-article-${article.slug}`} href={`articles/${article.slug}`} className="flex flex-wrap items-center mb-3">
                  <div className="w-16 h-16 min-w-16 max-w-1/2 overflow-hidden rounded-lg me-5">
                    <Image
                      src={article.coverImage ? article.coverImage : "/images/placeholder.png"}
                      className="w-full h-full object-cover"
                      width={64}
                      height={64}
                      alt="Image"
                    ></Image>
                  </div>
                  <div className="w-fit">
                    <h5 className="font-medium text-base">
                      {article.title}
                    </h5>
                    <div className="text-sm mt-2">{format.dateTime(new Date(article.createDate), {year: 'numeric', month: 'short', day: 'numeric'})}</div>
                  </div>
                </Link>
              );
            })
          }
        </div>
      </div>
    </section>
  );
}
