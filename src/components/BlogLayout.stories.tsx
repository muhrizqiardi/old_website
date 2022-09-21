import BlogLayout from "./BlogLayout";
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
  <BlogLayout
    navMenu={
      <div className="h-full bg-red-500 flex justify-center items-center">
        Navigation Menu
      </div>
    }
  >
    <div className="h-72 bg-blue-500 flex justify-center items-center">
      Content
    </div>
  </BlogLayout>
);

export const exampleStory = () => (
  <BlogLayout navMenu={<Nav navItems={navItems} />}>
    <div className="h-72 bg-blue-500 flex justify-center items-center">
      Content
    </div>
    <div className="h-72 bg-blue-500 flex justify-center items-center">
      Content
    </div>
    <div className="h-72 bg-blue-500 flex justify-center items-center">
      Content
    </div>
    <div className="h-72 bg-blue-500 flex justify-center items-center">
      Content
    </div>
  </BlogLayout>
);
