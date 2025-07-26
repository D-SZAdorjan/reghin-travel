"use client"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

function generatePagination(totalPages: number, selectedPage: number){
  const pagination = [];
  
  if(Number(selectedPage) == Number(totalPages)){
    pagination.push(Number(selectedPage) - 2);
  }
  
  if(Number(selectedPage) > 1){
    pagination.push(Number(selectedPage) - 1);
  }

  pagination.push(selectedPage);
  
  if(Number(selectedPage) < (Number(totalPages))){
    pagination.push(Number(selectedPage) + 1);
  }

  if(Number(selectedPage) == 1){
    pagination.push(Number(selectedPage) + 2);
  }
  
  return pagination;
}

export default function Pagination({totalPages = 0, pageSize = 6, itemCount}: {totalPages?: number, pageSize?: number, itemCount?: number}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  
  const pagintaionPages = generatePagination(totalPages, currentPage);

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(pageNumber));
    return `${pathname}?${params}`;
  }

  return (
    <div className="flex justify-center flex-col mt-16">
      <div className="pagination flex justify-center items-center">
        {currentPage > 1 ?
          <Link 
            href={createPageURL(Number(currentPage) - 1)}
            className="cursor-pointer me-4 justify-center w-10 h-10 rounded-full flex items-center text-center text-sm font-base">
            <FontAwesomeIcon
              className="font-normal text-primary-dark"
              icon={faArrowLeft}
            />
          </Link>:
          <div className="me-4 justify-center w-10 h-10 rounded-full flex items-center text-center text-sm font-base">
            <FontAwesomeIcon
              className="font-normal text-secondary"
              icon={faArrowLeft}
            />
          </div>}
        <div className="flex items-center">
          {
            pagintaionPages.map((page, index) => ( 
              Number(page) !== 0 ?
              <Link 
                href={createPageURL(Number(page))}
                key={`page-${index}`} 
                className={`cursor-pointer flex justify-center items-center shrink-0 w-10 h-10 rounded-full ${currentPage === Number(page) ? "font-bold text-background bg-primary-dark" : "font-medium"}`}>
                {Number(page)}
              </Link>
              :
              <div
                key={`more-pages`}
                className="cursor-pointer flex justify-center items-center shrink-0 w-10 h-10 rounded-full font-medium">
                ...
              </div>
            ))
          }
          {/* <div className="cursor-pointer flex justify-center items-center shrink-0 w-10 h-10 rounded-full font-bold text-background bg-primary-dark">
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
          </div> */}
        </div>
        {currentPage < Number(totalPages) ?
          <Link 
            href={createPageURL(Number(currentPage) + 1)}
            className="cursor-pointer me-4 justify-center w-10 h-10 rounded-full flex items-center text-center text-sm font-base">
            <FontAwesomeIcon
              className="font-normal text-primary-dark"
              icon={faArrowRight}
            />
          </Link>:
          <div className="me-4 justify-center w-10 h-10 rounded-full flex items-center text-center text-sm font-base">
            <FontAwesomeIcon
              className="font-normal text-secondary"
              icon={faArrowRight}
            />
          </div>}
      </div>
      <div className="text-sm text-center mt-5">
        Showing results { String(currentPage * Number(pageSize) - Number(pageSize) + 1 )}-{String(pageSize)} of {String(itemCount)}
      </div>
    </div>
  );
};
