import { useState } from "react";

export interface NavItemProps {
  href: string;
  title: string;
  isCurrentPage: boolean;
}

function NavItem(props: NavItemProps) {
  return (
    <li
      className={`py-1 px-1.5 rounded-md bg-custom-primary ${
        props.isCurrentPage ? "font-medium bg-custom-primary" : ""
      }`}
    >
      <a href={props.href} className="hover:underline">
        {props.title}
      </a>
    </li>
  );
}

export interface NavProps {
  navItems: NavItemProps[];
}

function Nav(props: NavProps) {
  const [navMenuIsOpen, setNavMenuIsOpen] = useState<boolean>(false);

  return (
    <div className="h-16 md:h-screen p-3 flex md:flex-col z-50 bg-white md:overflow-y-auto">
      <div className="mr-auto md:mr-0 flex md:flex-col items-center gap-4">
        <div className="w-10 h-10 md:w-28 md:h-28 bg-gray-300 rounded-full flex-shrink-0"></div>
        <p className="font-medium">muhrizqiardi</p>
      </div>
      <div
        className={`w-full h-[calc(100%-64px)] bg-black md:bg-transparent bg-opacity-20 ${
          navMenuIsOpen ? "" : "hidden md:block"
        } fixed md:static top-16 right-0`}
        data-testid="navigation-menu"
      >
        <div className="bg-white">
          <ul className="py-12 flex flex-col justify-center items-center gap-4">
            {props.navItems.map((navItem, index) => (
              <NavItem key={index} {...navItem} />
            ))}
          </ul>
        </div>
      </div>
      <button
        onClick={() => setNavMenuIsOpen((x) => !x)}
        className="w-10 h-10 md:hidden bg-gray-300 rounded-md"
      >
        <span className="sr-only">Toggle Navigation Menu</span>
      </button>
    </div>
  );
}

export default Nav;
