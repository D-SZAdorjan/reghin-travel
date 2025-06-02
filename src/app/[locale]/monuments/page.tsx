// TODO: pick matching colors
// TODO: make content dynamic

import InnerPageHero from "@/components/general/InnerPageHero";
import CardContainer from "@/components/monumentsPage/CardContainer";

// TODO: add SEO
export default async function MonumentsPage() {
  return (
    <>
    <InnerPageHero
            heroImg="/images/home-hero-ana-landscape.png"
            heroHeight="h-[35vh]"
            heroTitle="Monuments"
            heroLead="Monuments that speak to the soul of the city"
          />
    <CardContainer />
    </>
  );
}
