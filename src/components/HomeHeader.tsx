import Link from "next/link";
import {
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export interface NavMenuItem {
  href: string;
  title: string;
  target?: "_blank" | string;
  icon?: React.ReactNode;
}

export interface HomeHeaderProps {
  navMenuItems?: NavMenuItem[];
}

function HomeHeader(props: HomeHeaderProps) {
  const {
    navMenuItems = [
      {
        href: "#projects",
        title: "Projects",
      },
      {
        href: "/blog",
        title: "Blog",
        target: "_blank",
        icon: <ArrowRightOnRectangleIcon className="w-4 h-4" />,
      },
    ],
  } = props;
  
  const [isScrolled, setIsScrolled] = useState<boolean>();
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState<boolean>(false);

  const handleMobileNavToggler = () => setMobileNavIsOpen((x) => !x);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="header"
      className="px-5 md:px-20 sticky top-0 z-50 bg-custom-light"
    >
      <div className="navbar h-14 flex flex-row items-center justify-between py-2">
        <a href="/en">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/animated_signature.svg"
            alt="Rizqi's signature"
            className=" h-11"
          />
        </a>
        <div
          className={`w-full lg:w-min h-screen lg:h-min fixed ${
            mobileNavIsOpen ? "" : "hidden lg:block"
          } lg:static top-0 right-0 bg-black bg-opacity-20 lg:bg-transparent`}
        >
          <nav className="py-4 lg:py-0 bg-custom-light lg:bg-transparent text-custom-dark text-sm flex flex-col lg:flex-row items-center lg:items-start gap-4">
            {navMenuItems.map((navMenuItem, index) => (
              <Link
                key={index}
                href={navMenuItem.href}
                target={navMenuItem.target}
                title={navMenuItem.title}
              >
                <a className="px-3 py-2 hover:bg-gray-300 rounded-md">
                  {navMenuItem.title}
                </a>
              </Link>
            ))}
            <button
              onClick={handleMobileNavToggler}
              className="w-min p-2 lg:hidden rounded-full bg-custom-dark text-custom-light"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </nav>
        </div>
        <button
          onClick={handleMobileNavToggler}
          className="p-2 lg:hidden hover:bg-gray-300 rounded"
        >
          <Bars3Icon className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}

export default HomeHeader;
