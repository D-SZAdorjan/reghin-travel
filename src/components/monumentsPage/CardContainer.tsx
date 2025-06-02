import GridRow from '@/components/general/GridRow'
import MonumentCard from './MonumentCard'

const CardContainer = () => {
  return (
    <section className="pb-20">
      <div className="container mx-auto">
        <GridRow className="w-11/12 mx-auto px-4 sm:px-8 mt-20">
            <MonumentCard
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
            />
        </GridRow>
      </div>
    </section>
  )
}

export default CardContainer