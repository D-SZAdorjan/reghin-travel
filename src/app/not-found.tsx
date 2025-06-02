import GridRow from "@/components/general/GridRow";
import Image from "next/image";
import Link from "next/link";

const NotFoundError = () => {
  return (
    <section className="h-screen w-full">
      <div className="container flex items-center md:block mx-auto h-full">
        <GridRow className="mx-[calc(30px*-0.5)] justify-between items-center h-fit md:h-full">
          <div className="px-[calc(30px*0.5)] flex-[0_0_auto] w-full h-fit lg:w-1/2 box-border">
            <div className="relative aspect-3/2 z-0 box-border">
              <div className="absolute top-0 left-0 w-full h-full z-[-1] box-border">
                <Image
                  src={"/images/decorations/404-error.svg"}
                  width={630}
                  height={401}
                  alt="image"
                  className="object-contain h-full w-full"
                />
              </div>
            </div>
          </div>
          <div className="px-[calc(30px*0.5)] flex-[0_0_auto] w-full lg:w-1/2 box-border">
            <div className="relative h-full z-0 box-border">
              <div className="realative items-center lg:items-start flex flex-col lg:block w-full h-full p-5 md:p-14 box-border">
                <h2 className="text-center lg:text-start text-3xl md:text-5xl font-bold text-primary-dark mb-4">
                  {/* Best staycation <br></br> deals */}
                  Oops! It looks like you&aposre lost.
                </h2>
                <div className="text-center lg:text-start box-border text-base md:text-lg">
                  {/* Enjoy these cool staycation promotions in Singapore */}
                  The page you&aposre looking for isn&apost available. Try to search again or use the go to.
                </div>
                <Link
                  href="/"
                  className="mt-8 py-4 px-9 cursor-pointer bg-primary-dark flex items-center justify-center text-center text-sm text-primary-light font-semibold rounded-xl border border-transparent transition duration-300 ease-[cubic-bezier(.165,.84,.44,1)] w-fit"
                >
                  Back to home
                  {/* <FontAwesomeIcon icon={faArrowUp} className="ms-2 rotate-45"/> */}
                </Link>
              </div>
            </div>
          </div>
        </GridRow>
      </div>
    </section>
  );
};

export default NotFoundError;
