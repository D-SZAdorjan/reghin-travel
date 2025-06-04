import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const TripSuggestionCard = ({cardLink = "/", cardBadgeText, cardImage = "/images/placeholder.png", cardImageAlt = "Trip Suggestion Card Image", cardDate, cardAuthor, cardTitle}: {cardLink?: string, cardBadgeText: string, cardImage: string, cardImageAlt: string, cardDate: string, cardAuthor: string, cardTitle: string}) => {
  return (
    <div className="flex-[0_0_auto] py-4 w-full md:w-1/2 lg:w-1/3 box-border max-w-full px-[calc(30px*0.5)]">
      <Link href={`/trip-suggestions/${cardLink}`} className="block group/move-info">
        <div className="relative before:pb-[73%] before:block before:w-full block overflow-hidden">
          <Image
            src={cardImage}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
            width={421}
            height={301}
            alt={cardImageAlt}
          />
          <div className="absolute top-[20px] left-[20px] text-sm font-medium py-2 px-4 bg-background rounded-[200px]">
            {cardBadgeText}
          </div>
        </div>
        <div className="blogCard__content mt-8 group-hover/move-info:-translate-y-2 duration-600 transition-transform">
          <div className="items-center flex text-base">
            <div className="leading-[1.3] group-hover/move-info:text-primary-dark">{cardDate}</div>
            <div className="w-[1px] h-7 bg-accent-light mx-2.5"></div>
            <div className="leading-[1.3] group-hover/move-info:text-primary-dark">By {cardAuthor}</div>
          </div>
          <h3 className="mt-2.5 text-lg font-semibold text-text-primary group-hover/move-info:underline duration-600 transition-transform">
            {cardTitle}
          </h3>
        </div>
      </Link>
    </div>
  );
}

export default TripSuggestionCard