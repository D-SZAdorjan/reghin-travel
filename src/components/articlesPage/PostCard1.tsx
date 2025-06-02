import Image from "next/image";
import Link from "next/link";

export default async function PostCard1({cardLink = "/", cardImage, cardImageAlt = "Card Image", cardCreationDate, cardAuthor, cardTitle, cardDescription}: {cardLink: string, cardImage?: string, cardImageAlt?: string, cardCreationDate: string, cardAuthor: string, cardTitle: string, cardDescription: string}) {
  return (
    <Link href={cardLink} className="flex flex-col md:flex-row items-center mb-8">
      <div className="me-8">
        <Image
          className="object-cover rounded-lg"
          src={cardImage ? cardImage : "/images/placeholder.png"}
          width={700}
          height={816}
          alt={cardImageAlt}
        />
      </div>
      <div className="mt-3 md:mt-0">
        <div className="flex text-sm gap-x-2.5">
          <div>{cardCreationDate}</div>
          <div>By {cardAuthor}</div>
        </div>
        <h3 className="mt-2.5 font-semibold text-xl text-text-primary">
          {cardTitle}
        </h3>
        <p className="mt-2.5">
          {cardDescription}
        </p>
        <button className="font-medium mt-2.5 flex items-center">
          <span className="me-2.5">Read More</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_142_28418)">
              <path
                d="M15.5553 0H5.77756C5.53189 0 5.3331 0.198792 5.3331 0.444458C5.3331 0.690125 5.53189 0.888917 5.77756 0.888917H14.4824L0.129975 15.2413C-0.0436504 15.415 -0.0436504 15.6962 0.129975 15.8698C0.216766 15.9566 0.330516 16 0.444225 16C0.557933 16 0.671641 15.9566 0.758475 15.8698L15.1109 1.51738V10.2223C15.1109 10.4679 15.3097 10.6667 15.5553 10.6667C15.801 10.6667 15.9998 10.4679 15.9998 10.2223V0.444458C15.9998 0.198792 15.801 0 15.5553 0Z"
                fill="#05073C"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_142_28418">
                <rect width="16" height="16" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </Link>
  );
}
