import PostCard1 from "@/components/articlesPage/PostCard1";
import GridRow from "@/components/general/GridRow";
import { Article } from "contentlayer/generated";
import { get } from "http";
import { useFormatter } from "next-intl";
import { getFormatter } from "next-intl/server";


export default async function PostList({ articles = [] }: { articles?: Article[]}) {
  const format = await getFormatter();

  return (
    <GridRow className="">
      <div className="flex-[0_0_auto] w-full py-4">
        {
          articles.map((article, index) => {
            return (
              <PostCard1 
              key={`article-${index}-${article.slug}`}
              cardLink={`articles/${article.slug}`}
              cardImage={article.coverImage}
              imageWidth={index === 0 ? "min-w-[45%]" : "min-w-[35%] max-w-min"}
              cardCreationDate={format.dateTime(new Date(article.createDate), {year: 'numeric', month: 'short', day: 'numeric'})}
              cardTitle={article.title}
              cardDescription={article.lead ? article.lead : ""}
              cardAuthor={article.author || ""}/>
            )
          })
        }
      </div>
    </GridRow>
  );
}
