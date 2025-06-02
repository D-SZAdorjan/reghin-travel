"use client";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const MobileSideNav = ({
  logoImg,
  sideNavOpen,
  toggleSideNav,
}: {
  logoImg: StaticImageData | string | undefined;
  sideNavOpen: boolean;
  toggleSideNav: (value: boolean) => void;
}) => {
    useEffect(() => {
    if (sideNavOpen) {
      document.body.style.overflow = "hidden"; // Prevent scroll
    } else {
      document.body.style.overflow = ""; // Re-enable scroll
    }

    // Cleanup in case component is unmounted while open
    return () => {
      document.body.style.overflow = "";
    };
  }, [sideNavOpen]);
  const toggleComponent = () => {
    toggleSideNav(!sideNavOpen);
  };

  const closeSideNav = () => {
    toggleSideNav(false);
  };
  return (
    <div
      className={`absolute flex bg-black/60 top-0 left-0 w-full h-screen justify-end-safe ${
        sideNavOpen ? "" : "hidden"
      }`}
    >
      <div className="h-screen bg-primary-light w-96 border-l-2 border-solid border-primary-dark">
        <div className="flex flex-col h-full justify-between">
          <div className="">
            <div className="flex justify-between items-center px-10 py-5">
              <Link href={"/"} onClick={closeSideNav} className="flex align-center">
                <Image
                  width={147}
                  height={75}
                  src={logoImg ? logoImg : "/images/placeholder.png"}
                  alt="Webstie Logo"
                />
              </Link>
              <FontAwesomeIcon
                icon={faXmark}
                size="xl"
                onClick={toggleComponent}
                className="hover:cursor-pointer"
              />
            </div>
            <div className="flex items-center justify-between px-10 py-5">
              <div className={`text-primary-dark`}>
                <div className="dropdown-button flex items-center transition duration-200 cursor-pointer py-2 px-5 rounded-full hover:bg-white/[0.1]">
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
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between px-10 py-5">
            <div className={`text-primary-dark`}>
              <div className="dropdown-button flex items-center transition duration-200 cursor-pointer py-2 px-5 rounded-full hover:bg-white/[0.1]">
                Contact
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSideNav;
