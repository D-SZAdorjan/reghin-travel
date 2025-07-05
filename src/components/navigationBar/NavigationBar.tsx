"use client";
import LogoImg from "@/../public/images/logos/reghin-travel-logo3.png";
import {
  faAngleDown,
  faAngleUp,
  faBars
} from "@fortawesome/free-solid-svg-icons";
// import RecentSearchImage from "../../../public/img/pexels-samsilitongajr-842687.jpg";
import languages from "@/i18n/getLanguages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import MobileSideNav from "./MobileSideNav";
import { usePathname } from "next/navigation";

const NavigationBar = ({ locale }: { locale: string }) => {

  const pathName = usePathname();

  const transparentNav: string[] = [
    "/",
    "/en",
    "/hu"
  ];

  const pages: string[] = [
      "articles",
      "city-history",
      "monuments",
      "trip-suggestions"
  ];

  const [scrollY, setScrollY] = useState(0);
  // Getting the scroll position
  const onScroll = useCallback(() => {
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, {
      passive: true,
    } as AddEventListenerOptions);
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll, {
        passive: true,
      } as AddEventListenerOptions);
    };
  }, [onScroll]);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openSideNav, setOpenSideNav] = useState<boolean>(false);

  function toggleSideNav() {
    console.log(openSideNav);
    setOpenSideNav(!openSideNav);
  }
  
  // const [searchOpen, serSearchOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  // const togleSearchDropdown = () => {
  //   serSearchOpen((old) => !old);
  // };
  const translations = useTranslations('NavigationBar');
  
  return (
    <header
      className={`fixed top-0 start-0 right-0 z-50 ${
        scrollY > 50 || !transparentNav.includes(pathName)
          ? "bg-primary-light border-b-2 border-primary border-solid shadow-md"
          : "bg-transparent"
      } transition duration-200`}
    >
      <div className="container relative mx-auto flex items-center justify-between min-h-20">
        <div className="header-left">
          <div className="flex align-center">
            <Link href={"/"} className="flex align-center">
              <Image width={147} height={75} src={LogoImg} alt="Webstie Logo" />
            </Link>
          </div>
        </div>
        <div className="header-center text-white left-1/2 opacity-0">
          {/* <div>
            <div className={`relative font-bold`}>
              <div
                className="dropdown-button flex items-center transition duration-200 cursor-pointer py-2 px-5 rounded-full hover:bg-white/[0.1]"
              >
                {languages.find((lang) => lang.slug === locale)?.abbreviation}
                <FontAwesomeIcon className="ms-1" icon={ faAngleDown } />
              </div>
            </div>
          </div> */}
          {/* <div className="header-search relative flex items-center bg-transparent">
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute top-3 start-4 me-2.5"
            />
            <input
              type="text"
              placeholder="Search destinations or activities"
              className="bg-transparent text-white w-80 rounded-[200px] py-2 ps-12 pe-3 border border-solid border-transparent transition duration-200 outline-0"
              onClick={togleSearchDropdown}
            />
            <div
              className={`search-recent absolute top-full start-0 pt-3.5 transition duration-200 ${
                searchOpen
                  ? "opacity-1 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="search-recent-conteiner overflow-hidden w-[490px] max-w-full bg-white border border-solid border-[#e7e6e6] shadow-lg rounded-xl">
                <div className="header-search-recent-title pt-8 px-8 pb-4">
                  <h4 className="font-medium text-lg text-black">
                    Recent Searches
                  </h4>
                </div>
                <div className="header-search-recent-list overflow-y-scroll h-[450px]">
                  <div className="header-search-recent-item flex items-center w-full px-8 h-24 text-left">
                    <div className="bg-white rounded-xl border border-solid border-[#e7e6e6] flex justify-center items-center w-12 h-12 shrink-0">
                      <FontAwesomeIcon
                        className="text-xl text-black"
                        icon={faLocationDot}
                      />
                    </div>
                    <div className="ms-2.5">
                      <div className="font-medium text-black">Phuket</div>
                      <div className="font-medium text-[#717171] text-sm leading-normal">
                        Thailand, Asia
                      </div>
                    </div>
                  </div>
                  <div className="header-search-recent-item flex items-center w-full px-8 h-24 text-left">
                    <div className="bg-white rounded-xl border border-solid border-[#e7e6e6] flex justify-center items-center w-12 h-12 shrink-0">
                      <FontAwesomeIcon
                        className="text-xl text-black"
                        icon={faTag}
                      />
                    </div>
                    <div className="ms-2.5">
                      <div className="font-medium text-black">
                        London Day Trips
                      </div>
                      <div className="font-medium text-[#717171] text-sm leading-normal">
                        England
                      </div>
                    </div>
                  </div>
                  <div className="header-search-recent-item flex items-center w-full px-8 h-24 text-left">
                    <div className="bg-white rounded-xl border border-solid border-[#e7e6e6] flex justify-center items-center w-12 h-12 shrink-0">
                      <FontAwesomeIcon
                        className="text-xl text-black"
                        icon={faFlag}
                      />
                    </div>
                    <div className="ms-2.5">
                      <div className="font-medium text-black">Europe</div>
                      <div className="font-medium text-[#717171] text-sm leading-normal">
                        Continent
                      </div>
                    </div>
                  </div>
                  <div className="header-search-recent-item flex items-center w-full px-8 h-24 text-left">
                    <div className="bg-white rounded-xl border border-solid border-[#e7e6e6] flex justify-center items-center w-12 h-12 shrink-0">
                      <Image
                        src={RecentSearchImage}
                        width={50}
                        height={50}
                        alt="Recent Search Image"
                      />
                    </div>
                    <div className="ms-2.5">
                      <div className="font-medium text-black">
                        Centipede Tour - Guided Arizona Desert Tour by ATV
                      </div>
                      <div className="font-medium text-[#717171] text-sm leading-normal">
                        State
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className=""></div> */}
        <div className="header-center text-white left-1/2 hidden md:block">
          <div className="">
            <div
              className={`relative flex ${
                scrollY > 50 || !transparentNav.includes(pathName) ? "text-primary-dark" : "text-primary-light"
              }`}
            >
              {pages.map((page, index) => (
                <Link
                  href={`/${page}`}
                  key={index}
                  className={`dropdown-button flex items-center transition duration-200 cursor-pointer py-2 px-5 rounded-full hover:bg-white/[0.1]`}
                >
                  {translations.raw(page)}
                </Link>
              ))}
              {/* <div className="dropdown-button flex items-center transition duration-200 cursor-pointer py-2 px-5 rounded-full hover:bg-white/[0.1]">
                About
              </div>
              <div className="dropdown-button flex items-center transition duration-200 cursor-pointer py-2 px-5 rounded-full hover:bg-white/[0.1]">
                City history
              </div>
              <div className="dropdown-button flex items-center transition duration-200 cursor-pointer py-2 px-5 rounded-full hover:bg-white/[0.1]">
                Monuments
              </div>
              <div className="dropdown-button flex items-center transition duration-200 cursor-pointer py-2 px-5 rounded-full hover:bg-white/[0.1]">
                Churches
              </div> */}
            </div>
          </div>
        </div>
        {/* <div className=""></div> */}
        <div className="header-right flex items-center">
          <div className={`font-bold ${scrollY > 50 || !transparentNav.includes(pathName) ? "text-primary-dark" : "text-primary-light"}`}>
            <div className={`relative font-bold ${scrollY > 50 || !transparentNav.includes(pathName) ? "text-primary-dark" : "text-primary-light"}`}>
              <div
                className="dropdown-button flex items-center transition duration-200 cursor-pointer py-2 px-5 rounded-full hover:bg-white/[0.1]"
                onClick={toggleDropdown}
              >
                {languages.find((lang) => lang.slug === locale)?.abbreviation}
                <FontAwesomeIcon
                  className="ms-1"
                  icon={isOpen ? faAngleDown : faAngleUp}
                />
              </div>
              <div
                className={`dropdown-content transition duration-200 ${
                  isOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="dropdown absolute top-full start-1/2 z-20 pt-2.5 -translate-x-1/2">
                  <div className="header-dropdown-container bg-primary-light w-56 rounded-xl py-5 px-10 border-2 border-solid border-primary shadow-md">
                    {languages.map((lang, index) => (
                      <div key={`${lang.abbreviation}_${index}`}>
                        <Link
                          href={lang.slug}
                          className="header-dropdown-item text-sm font-medium text-text-primary leading-[200%] hover:cursor-pointer hover:underline hover:decoration-1 hover:text-primary"
                        >
                          {lang.lang}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`font-bold md:hidden ${
              scrollY > 50 || !transparentNav.includes(pathName) ? "text-primary-dark" : "text-primary-light"
            }`}
          >
            <div
              className={`relative font-bold ${
                scrollY > 50 || !transparentNav.includes(pathName) ? "text-primary-dark" : "text-primary-light"
              }`}
            >
              <div
                className="dropdown-button flex items-center transition duration-200 cursor-pointer py-2 px-5 rounded-full hover:bg-white/[0.1]"
                onClick={toggleSideNav}
              >
                <FontAwesomeIcon icon={faBars} size="lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileSideNav
        logoImg={LogoImg}
        sideNavOpen={openSideNav}
        toggleSideNav={toggleSideNav}
      />
    </header>
  );
};

export default NavigationBar;
