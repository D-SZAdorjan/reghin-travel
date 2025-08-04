// TODO: pick matching colors
// TODO: make content dynamic
// TODO: add SEO
// TODO: fix mdx content handling
import Pagination from "@/components/articlesPage/Pagination";
import GridRow from "@/components/general/GridRow";
import InnerPageHero from "@/components/general/InnerPageHero";
import TripSuggestionCard from "@/components/tripSuggestionsPage/TripSuggestionCard";
import { allTripSuggestions } from "contentlayer/generated";

type Params = Promise<{ locale: string }>

export default async function TripSuggestionsPage({params, searchParams}: {params: Params, searchParams: Promise<{ [key: string]: string | string[] | undefined }>}) {
  const {locale} = await params;
  const { page } = await searchParams;
  const pageSize = 9;
  const currentPage = Number(page) || 1;
  const tripSuggestions = allTripSuggestions.filter((tripSuggestion) => tripSuggestion.locale === locale).sort((a, b) => new Date(b.createDate).getTime() - new Date(a.createDate).getTime());
  
  let slicedTripSuggestions = [];
  if((tripSuggestions.length - 1) > pageSize) {
    slicedTripSuggestions = tripSuggestions.slice((currentPage - 1) * pageSize, (currentPage * pageSize));
  }else{
    slicedTripSuggestions = tripSuggestions;
  }
  
  return (
    <>
      <InnerPageHero
        heroImg="/images/home-hero-ana-landscape.png"
        heroTitle="Your guide to the city"
        heroLead="Find inspiration, guides and stories for wherever you're going Select a destination"
      />
      <section className="pb-20">
        <div className="container mx-auto">
          <div className="pt-8">
            {/* <div></div> */}
            <div className="pt-8">
              <div className="relative opacity-100">
                <GridRow className="w-11/12 mx-auto px-4 sm:px-8">
                {
                  slicedTripSuggestions.map((tripSuggestion, index) => (
                    <TripSuggestionCard
                      key={index}
                      cardLink={tripSuggestion.slug}
                      cardBadgeText="Trip Suggestion"
                      cardImage={tripSuggestion.image}
                      cardImageAlt="Trip Suggestion Card Image"
                      cardDate="April 06 2023"
                      cardAuthor="Ali Tufan"
                      cardTitle={tripSuggestion.title}
                    />
                  ))
                }
                {/* {
                  tripSuggestions.map((tripSuggestion, index) => (
                    <TripSuggestionCard
                      key={index}
                      cardBadgeText="Trip Suggestion"
                      cardImage={`/images/placeholder/${3 - index}.jpg`}
                      cardImageAlt="Trip Suggestion Card Image"
                      cardDate="April 06 2023"
                      cardAuthor="Ali Tufan"
                      cardTitle="Kenya vs Tanzania Safari: The Better African Safari Experience"
                    />
                  ))
                } */}
                  
                  {/* <TripSuggestionCard
                    cardBadgeText="Trip Suggestion"
                    cardImage="/images/placeholder/2.jpg"
                    cardImageAlt="Trip Suggestion Card Image"
                    cardDate="April 06 2023"
                    cardAuthor="Ali Tufan"
                    cardTitle="Kenya vs Tanzania Safari: The Better African Safari Experience"
                  />
                  <TripSuggestionCard
                    cardBadgeText="Trip Suggestion"
                    cardImage="/images/placeholder/3.jpg"
                    cardImageAlt="Trip Suggestion Card Image"
                    cardDate="April 06 2023"
                    cardAuthor="Ali Tufan"
                    cardTitle="Kenya vs Tanzania Safari: The Better African Safari Experience"
                  />
                  <TripSuggestionCard
                    cardBadgeText="Trip Suggestion"
                    cardImage="/images/placeholder/2.jpg"
                    cardImageAlt="Trip Suggestion Card Image"
                    cardDate="April 06 2023"
                    cardAuthor="Ali Tufan"
                    cardTitle="Kenya vs Tanzania Safari: The Better African Safari Experience"
                  />
                  <TripSuggestionCard
                    cardBadgeText="Trip Suggestion"
                    cardImage="/images/placeholder/3.jpg"
                    cardImageAlt="Trip Suggestion Card Image"
                    cardDate="April 06 2023"
                    cardAuthor="Ali Tufan"
                    cardTitle="Kenya vs Tanzania Safari: The Better African Safari Experience"
                  />
                  <TripSuggestionCard
                    cardBadgeText="Trip Suggestion"
                    cardImage="/images/placeholder/1.jpg"
                    cardImageAlt="Trip Suggestion Card Image"
                    cardDate="April 06 2023"
                    cardAuthor="Ali Tufan"
                    cardTitle="Kenya vs Tanzania Safari: The Better African Safari Experience"
                  /> */}
                </GridRow>
              </div>
            </div>
          </div>
        </div>
        {tripSuggestions.length > pageSize && <Pagination totalPages={Math.ceil((tripSuggestions.length - 1) / pageSize)} itemCount={tripSuggestions.length - 1} pageSize={pageSize}/>}
      </section>
    </>
  );
}
