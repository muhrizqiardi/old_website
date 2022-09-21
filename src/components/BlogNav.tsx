import { useState } from "react";

export interface BlogNavItemProps {
  href: string;
  title: string;
  isCurrentPage: boolean;
}

function BlogNavItem(props: BlogNavItemProps) {
  return (
    <li
      className={`py-1 px-1.5 rounded-md ${
        props.isCurrentPage ? "font-bold" : ""
      }`}
    >
      <a href={props.href} className="hover:underline">
        {props.title}
      </a>
    </li>
  );
}

export interface BlogNavProps {
  navItems: BlogNavItemProps[];
}

function BlogNav(props: BlogNavProps) {
  const [navMenuIsOpen, setNavMenuIsOpen] = useState<boolean>(false);

  return (
    <div className="h-16 md:h-screen p-3 flex md:flex-col z-50 bg-white md:overflow-y-auto">
      <div className="mr-auto md:mr-0 md:p-6 flex md:flex-col items-center gap-4">
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
              <BlogNavItem key={index} {...navItem} />
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

export default BlogNav;
