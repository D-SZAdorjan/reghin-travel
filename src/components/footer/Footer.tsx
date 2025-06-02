import Image from "next/image";
import Link from "next/link";

import LogoImg from "@/../public/images/logos/reghin-travel-logo3.png";
import { faFacebookF, faInstagram, faPinterest, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-primary-light border-t-2 border-solid border-primary">
      <div className="container mx-auto py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href={"/"} className="flex align-center">
              <Image width={221} height={113} src={LogoImg} alt="Webstie Logo" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-text-secondary uppercase">
                Resources
              </h2>
              <ul className="text-text-secondary font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Flowbite
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-text-secondary uppercase">
                Follow us
              </h2>
              <ul className="text-text-secondary font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-text-secondary uppercase">
                Legal
              </h2>
              <ul className="text-text-secondary font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-primary sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-text-secondary sm:text-center">
            © {new Date().getFullYear()}{" "}
            <Link href="/'" className="hover:underline">
              Reghin Travel™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link
              href="#"
              className="text-text-secondary hover:text-text-secondary dark:hover:text-accent"
            >
              <FontAwesomeIcon icon={faFacebookF} />
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              href="#"
              className="text-text-secondary hover:text-text-secondary dark:hover:text-accent ms-5"
            >
              <FontAwesomeIcon icon={faXTwitter} />
              <span className="sr-only">X page</span>
            </Link>
            <Link
              href="#"
              className="text-text-secondary hover:text-text-secondary dark:hover:text-accent ms-5"
            >
              <FontAwesomeIcon icon={faInstagram} />
              <span className="sr-only">Instagram page</span>
            </Link>
            <Link
              href="#"
              className="text-text-secondary hover:text-text-secondary dark:hover:text-accent ms-5"
            >
              <FontAwesomeIcon icon={faPinterest} />
              <span className="sr-only">Pinterest page</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
