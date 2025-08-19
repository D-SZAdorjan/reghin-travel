"use client"
import { TripSuggestion } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

const TripSuggestionsSlider = ({
  data = [],
}: {
  data: TripSuggestion[];
}) => {
  return (
    <Swiper
      className="overflow-hidden w-3/4 justify-start flex [&>.swiper-wrapper]:flex"
      spaceBetween={20}
      breakpoints={{
        300: {
          slidesPerView: 1.5,
        },
        450: {
          slidesPerView: 1.5,
        },
        1024: {
          slidesPerView: 2,
        },
      }}
    >
      {data.map((tripSuggestion, index) => (
        <SwiperSlide key={`trip-suggestion-${index}-${tripSuggestion.slug}`} className="flex box-border max-w-1/3 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow min-h-[30vh]">
          <Link href={`/trip-suggestions/${tripSuggestion.slug}`} className="w-full h-full flex flex-[0_0_auto] -gap-1.5 rounded-2xl">
          <div className="relative p-8 w-1/2 z-[5] flex flex-col justify-center">
            <h2 className="text-lg font-semibold text-[#121633]">
              {tripSuggestion.title}
            </h2>
            <p className="text-sm text-[#5e5e6e] mt-1">
              {tripSuggestion.lead}
            </p>
          </div>
          <div className="relative h-full w-1/2">
            <Image
              src={"/images/svgs/violin-shiluette.svg"}
              alt="Trip Suggestion"
              width={1920}
              height={1080}
              className="absolute z-[1] w-fit h-[101%] object-contain -scale-x-100 left-[-1px]"
            />
            <Image
              src={tripSuggestion.image? tripSuggestion.image : "/images/placeholder.png"}
              alt="Trip Suggestion"
              width={1920}
              height={1080}
              className="absolute z-[0] w-full h-full object-cover rounded-e-2xl"
            />
          </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default TripSuggestionsSlider