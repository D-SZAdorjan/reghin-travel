import Image from 'next/image';
import HeroBgImage from "@/../public/images/home-hero-ana-landscape.png";

export default function HomeHeroSection(){
  return (
    <section className="relative h-lvh z-20">
      <div className="hero-shape absolute bottom-0 start-0 right-0 h-20 bg-background rounded-t-[20px] sm:rounded-t-[40px] md:rounded-t-[80px] z-20"></div>
      <div className="hero-content h-full">
        <div className="absolute top-0 start-0 bg-[#000000] opacity-20 w-full h-full z-10"></div>
        <div className="hero-bg absolute top-0 start-0 w-full h-full -z-10">
          <Image
            className="w-full h-full object-cover"
            src={HeroBgImage}
            width={1920}
            height={960}
            alt="Hero Background Image"
          />
        </div>
      </div>
    </section>
  );
}
