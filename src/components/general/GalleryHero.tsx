import Gallery from "@/components/general/gallery/Gallery";
import GridRow from "@/components/general/GridRow";
import { faDoorOpen, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default async function GalleryHero() {
  return (
    <>
      <section className="w-full md:w-11/12 flex mx-auto mt-20">
        <GridRow>
          <div className="flex-[0_0_auto] w-full px-8 md:px-4">
            <div className="flex items-center justify-start">
              <span className="rounded-3xl hover:text-primary-dark hover:cursor-pointer text-sm font-medium bg-primary-light px-4 py-1.5 me-3">
                Church
              </span>
              <span className="rounded-3xl hover:text-primary-dark hover:cursor-pointer text-sm font-medium bg-primary-light px-4 py-1.5">
                Monument
              </span>
            </div>
            <h1 className="mt-5 text-2xl text-primary-dark sm:text-3xl md:text-4xl xl:text-5xl font-bold m-0">
              Molokini and Turtle Town Snorkeling Adventure Aboard
            </h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start pt-5">
              <div className="flex items-center text-text-secondary text-base font-semibold mb-0">
                <FontAwesomeIcon
                  className="me-1"
                  color="#6e6e6e"
                  icon={faLocationDot}
                  size="xs"
                />
                Reghin, Str. Iernuteni nr. 65
              </div>
              <div className="flex items-center text-text-secondary ext-base font-semibold mb-0 sm:ms-5">
                <FontAwesomeIcon
                  className="me-1"
                  color="#6e6e6e"
                  icon={faDoorOpen}
                  size="xs"
                />
                Visitable on weekdays
              </div>
            </div>
          </div>
        </GridRow>
      </section>
      <section className="w-full md:w-11/12 flex mx-auto">
        <Gallery />
      </section>
    </>
  );
}
