"use client";

import Image from "next/image";
import { useState } from "react";
import ImageLightBox from "./ImageLightBox";
import { useTranslations } from "next-intl";

export default function Gallery({images = []}: {images?: string[]}) {
  const [activeLightBox, setActiveLightBox] = useState<boolean>(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  function handleImagePopUp(index: number) {
    setCurrentSlideIndex(index);
    setActiveLightBox(true);
  }

  const translations = useTranslations('MonumentsPage.InnerPage.HeroComponent');
  return (
    <>
      <div className="relative overflow-hidden mt-8 w-full">
        <div className="w-full h-full grid grid-cols-5 grid-rows-2 gap-2.5 rounded-lg">
          {images.length >= 1 && <button
              onClick={() => handleImagePopUp(0)}
              className={`${images.length > 1 ? "col-span-3" : "col-span-5"} row-span-2 w-full h-full hover:cursor-pointer`}>
          <Image
            className={`w-full object-cover ${images.length > 1 ? "h-full rounded-s-lg" : "h-[70vh] rounded-lg"}`}
            width={1155}
            height={765}
            src={images[0]}
            alt="image"
          />
          </button>}
          {images.length >= 2 && <button
              onClick={() => handleImagePopUp(1)}
              className={`${images.length === 2 ? "col-span-2 row-span-2" : ""} ${images.length > 2 ? "col-span-2 row-span-1" : ""} w-full h-full hover:cursor-pointer`}>
          <Image
            className={`w-full h-full object-cover ${images.length > 2 ? "rounded-tr-lg" : "rounded-e-lg"}`}
            width={765}
            height={375}
            src={images[1]}
            alt="image"
          />
          </button>}
          {images.length >= 3 && <button
              onClick={() => handleImagePopUp(2)}
              className={ `${images.length === 3 ? "col-span-2 row-span-1" : "" } ${images.length > 3 ? "col-span-1 row-span-1" : "" } w-full h-full hover:cursor-pointer`}>
          <Image
            className={`w-full h-full object-cover ${images.length > 3 ? "" : "rounded-br-lg"}`}
            width={375}
            height={375}
            src={images[2]}
            alt="image"
          />
          </button>}
          { images.length > 3 && <button
              onClick={() => handleImagePopUp(3)}
              className="col-span-1 row-span-1 w-full h-full hover:cursor-pointer">
          <Image
            className="w-full h-full object-cover rounded-br-lg"
            width={375}
            height={375}
            src={images[3]}
            alt="image"
          />
          </button>}
        </div>

        {images.length > 4 && <div className="absolute right-5 bottom-5 z-10">
          <div
            style={{ cursor: "pointer" }}
          >
            <button
              onClick={() => handleImagePopUp(0)}
              className="rounded-3xl bg-primary-dark hover:bg-primary py-2 px-4 md:py-5 md:px-10 text-white hover:text-text-primary hover:cursor-pointer text-base font-bold"
            >
              {translations.raw('galleryViewBtnText')}
            </button>
          </div>
        </div>}
      </div>
      <ImageLightBox
        images={images}
        activeLightBox={activeLightBox}
        setActiveLightBox={setActiveLightBox}
        currentSlideIndex={currentSlideIndex}
        setCurrentSlideIndex={setCurrentSlideIndex}
      />
    </>
  );
}
