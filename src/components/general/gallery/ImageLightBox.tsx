"use client"

import Image from "next/image";

export default function ImageLightBox({
    images=[],
    activeLightBox,
    setActiveLightBox,
    currentSlideIndex,
    setCurrentSlideIndex}:{
        images: string[],
        activeLightBox: boolean,
        setActiveLightBox: React.Dispatch<React.SetStateAction<boolean>>,
        currentSlideIndex: number,
        setCurrentSlideIndex: React.Dispatch<React.SetStateAction<number>>
}){
  return (
    <div
      id="myModal"
      className={`modal ${activeLightBox ? "activeImageLightBox" : ""}`}
    >
      <div
        className="close cursor"
        style={{ zIndex: 1000 }}
        onClick={() => {
          setActiveLightBox(false);
        }}
      >
        <span>&times;</span>
      </div>
      <div className="modal-content">
        {images.map((elm, i) => (
          <div
            key={i}
            className={`mySlides ${currentSlideIndex == i ? "fadein" : ""} `}
            style={
              currentSlideIndex == i
                ? { display: "block", height: "100%" }
                : { display: "none", height: "100%" }
            }
          >
            <div className="numbertext">
              {i + 1} / {images.length}
            </div>
            <Image
            className="h-full w-full object-contain m-auto bg-transparent"
              width={850}
              height={510}
              src={elm}
              alt="image"
            />
          </div>
        ))}

        <a
          className="prev"
          onClick={() =>
            setCurrentSlideIndex((pre) =>
              pre == 0 ? images.length - 1 : pre - 1,
            )
          }
        >
          &#10094;
        </a>
        <a
          className="next"
          onClick={() =>
            setCurrentSlideIndex((pre) =>
              pre == images.length - 1 ? 0 : pre + 1,
            )
          }
        >
          &#10095;
        </a>
      </div>
    </div>
  )
}