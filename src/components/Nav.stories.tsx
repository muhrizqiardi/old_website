import Nav from "./Nav";

const navItems = [
  {
    href: "/",
    title: "Home",
    isCurrentPage: true,
  },
  {
    href: "/blog",
    title: "Blog",
    isCurrentPage: false,
  },
  {
    href: "/resume",
    title: "Resume",
    isCurrentPage: false,
  },
];

export const defaultStory = () => (
  <Nav
    navItems={navItems}
  />
);

defaultStory.storyName = "default";

export const exampleStory = () => <Nav navItems={navItems} />;

exampleStory.storyName = "example";
