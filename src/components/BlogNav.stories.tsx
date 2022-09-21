import BlogNav from "./BlogNav";

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
  <BlogNav
    navItems={navItems}
  />
);

defaultStory.storyName = "default";

export const exampleStory = () => <BlogNav navItems={navItems} />;

exampleStory.storyName = "example";
