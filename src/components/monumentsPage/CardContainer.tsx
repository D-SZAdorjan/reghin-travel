import GridRow from '@/components/general/GridRow'
import { Monument } from 'contentlayer/generated'
import MonumentCard from './MonumentCard'
import { getTranslations } from 'next-intl/server';

export default async function CardContainer({monuments = []} : {monuments?: Monument[]}){
  const translations = await getTranslations('MonumentsPage.CardComponent');
  return (
    <section className="pb-5">
      <div className="container mx-auto">
        <GridRow className="sm:w-11/12 mx-auto px-4 sm:px-8 mt-20">
        {monuments.map((monument, index) => (
            <MonumentCard
                key={monument._id}
                cardId={`monument-${monument.slug}-${index}`}
                cardSlug={monument.slug}
                cardImage={monument.coverImage}
                cardDuration={monument.category}
                cardLocation={monument.address}
                cardTitle={monument.name}
                cardPrice={monument.isVisitable ? translations.raw('visitableTxt') : translations.raw('notVisitableTxt')}
            />
        ))}
            {/* <MonumentCard
                cardId="1"
                cardSlug='monument-1'
                cardImage="/images/placeholder/1.jpg"
                cardDuration="4 days"
                cardLocation="Budapest, Hungary"
                cardTitle="Monument 1"
                cardPrice="100"
            />
            <MonumentCard
                cardId="2"
                cardSlug='monument-2'
                cardImage="/images/placeholder/2.jpg"
                cardDuration="2 days"
                cardLocation="Warsaw, Poland"
                cardTitle="Monument 2"
                cardPrice="200"
            />
            <MonumentCard
                cardId="3"
                cardSlug='monument-3'
                cardImage="/images/placeholder/3.jpg"
                cardDuration="5 days"
                cardLocation="Orsoy, Russia"
                cardTitle="Monument 3"
                cardPrice="300"
            /> */}
        </GridRow>
        {/* { monuments.length > 6 && <Pagination/>} */}
      </div>
    </section>
  )
}