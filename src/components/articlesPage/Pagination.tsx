import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default async function Pagination(){
  return (
    <div className="flex justify-center flex-col mt-16">
      <div className="pagination flex justify-center items-center">
        <button className="cursor-pointer me-4 justify-center w-10 h-10 rounded-full flex items-center text-center text-sm font-base">
          <FontAwesomeIcon
            className="font-normal text-primary-dark"
            icon={faArrowLeft}
            size="xs"
          />
        </button>
        <div className="flex items-center">
          <div className="cursor-pointer flex justify-center items-center shrink-0 w-10 h-10 rounded-full font-bold text-background bg-primary-dark">
            1
          </div>
          <div className="cursor-pointer flex justify-center items-center shrink-0 w-10 h-10 rounded-full font-medium">
            2
          </div>
          <div className="cursor-pointer flex justify-center items-center shrink-0 w-10 h-10 rounded-full font-medium">
            3
          </div>
          <div className="cursor-pointer flex justify-center items-center shrink-0 w-10 h-10 rounded-full font-medium">
            ...
          </div>
          <div className="cursor-pointer flex justify-center items-center shrink-0 w-10 h-10 rounded-full font-medium">
            10
          </div>
        </div>
        <button className="cursor-pointer me-4 justify-center w-10 h-10 rounded-full flex items-center text-center text-sm font-base">
          <FontAwesomeIcon
            className="font-normal text-primary-dark"
            icon={faArrowRight}
          />
        </button>
      </div>
      <div className="text-sm text-center mt-5">
        Showing results 1-30 of 1,415
      </div>
    </div>
  );
};
