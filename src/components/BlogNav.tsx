import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

export interface BlogNavItemProps {
  href: string;
  title: string;
}

function BlogNavItem(props: BlogNavItemProps) {
  const router = useRouter();

  return (
    <li className="py-1 px-1.5 rounded-md">
      <Link href={props.href} passHref>
        <a
          href={props.href}
          className={`hover:underline ${
            router.pathname === props.href ? "font-bold" : ""
          }`}
        >
          {props.title}
        </a>
      </Link>
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
        <img
          src="/assets/animated_signature.svg"
          className="w-10 h-10 md:w-28 md:h-28 rounded-full flex-shrink-0"
          alt="Rizqi's animated signature"
        />
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
        className="w-10 h-10 md:hidden rounded-md"
      >
        <Bars3Icon />
        <span className="sr-only">Toggle Navigation Menu</span>
      </button>
    </div>
  );
}

export default BlogNav;
