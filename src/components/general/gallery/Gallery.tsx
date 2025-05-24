"use client";

import { GalleryImage } from "@/components/utils/content-types";
import ImageLightBox from "./ImageLightBox";
import { useState } from "react";
import Image from "next/image";
const images: GalleryImage[] = [
  {
    id: BigInt(1),
    imageUrl: `/images/tourSingle/1/1.png`,
  },
  {
    id: BigInt(2),
    imageUrl: `/images/tourSingle/1/2.png`,
  },
  {
    id: BigInt(3),
    imageUrl: `/images/tourSingle/1/3.png`,
  },
  {
    id: BigInt(4),
    imageUrl: `/images/tourSingle/1/4.png`,
  },
];
export default function Gallery() {
  const [activeLightBox, setActiveLightBox] = useState<boolean>(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(1);
  return (
    <>
      <div className="relative overflow-hidden mt-8 w-full">
        <div className="w-full h-full grid grid-cols-5 grid-rows-2 gap-2.5 rounded-lg">
          <Image
            className="col-span-3 row-span-2 w-full h-full object-cover rounded-s-lg"
            width={1155}
            height={765}
            src="/images/tourSingle/1/1.png"
            alt="image"
          />
          <Image
            className="col-span-2 row-span-1 w-full h-full object-cover rounded-tr-lg"
            width={765}
            height={375}
            src="/images/tourSingle/1/2.png"
            alt="image"
          />
          <Image
            className="col-span-1 row-span-1 w-full h-full object-cover"
            width={375}
            height={375}
            src="/images/tourSingle/1/3.png"
            alt="image"
          />
          <Image
            className="col-span-1 row-span-1 w-full h-full object-cover rounded-br-lg"
            width={375}
            height={375}
            src="/images/tourSingle/1/4.png"
            alt="image"
          />
        </div>

        <div className="absolute right-5 bottom-5 z-10">
          <div
            style={{ cursor: "pointer" }}
            className="js-gallery"
            data-gallery="gallery1"
          >
            <button
              onClick={() => setActiveLightBox(true)}
              className="rounded-3xl bg-primary-dark hover:bg-primary py-2 px-4 md:py-5 md:px-10 text-white hover:text-text-primary hover:cursor-pointer text-base font-bold"
            >
              See all photos
            </button>
          </div>
          <a
            href="/images/tourSingle/1/2.png"
            className="js-gallery"
            data-gallery="gallery1"
          ></a>
          <a
            href="/images/tourSingle/1/3.png"
            className="js-gallery"
            data-gallery="gallery1"
          ></a>
          <a
            href="/images/tourSingle/1/4.png"
            className="js-gallery"
            data-gallery="gallery1"
          ></a>
        </div>
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
