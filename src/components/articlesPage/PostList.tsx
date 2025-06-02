import PostCard1 from "@/components/articlesPage/PostCard1";
import GridRow from "@/components/general/GridRow";
import { allArticles } from "contentlayer/generated";

export default async function PostList({ locale }: {locale: string}) {
  const articles = allArticles.filter((article) => article.locale === locale).sort((a, b) => new Date(b.createDate).getTime() - new Date(a.createDate).getTime());
  return (
    <GridRow className="">
      <div className="flex-[0_0_auto] w-full py-4">
        {
          articles.map((article, index) => {
            return (
              <PostCard1 
              key={`article-${index}-${article.slug}`}
              cardLink={`trip-suggestions/${article.slug}`}
              cardCreationDate="2025-01-01"
              cardTitle={article.title}
              cardDescription={article.lead ? article.lead : ""}
              cardAuthor="John Doe"/>
            )
          })
        }
      </div>
    </GridRow>
  );
}
