import BlogPostsListItem from "./BlogPostsListItem";
import { Story } from "@ladle/react";

export const defaultStory: Story<{
  thumbnail: string;
  title: string;
  snippet: string;
  createdAt: string;
  updatedAt: string;
  href: string;
}> = (props) => <BlogPostsListItem {...props} />;

defaultStory.args = {
  thumbnail: "https://picsum.photos/id/237/1600/900",
  title: "This is a Blog Post Title",
  href: "/blog/posts/1",
  snippet: "This is a snippet of a blog post, lorem ipsum dolor amet.",
  createdAt: "2022-08-28T14:01:00.00",
  updatedAt: "2022-08-28T14:01:00.00",
};

export const withoutUpdateAt = () => (
  <BlogPostsListItem
    {...{
      thumbnail: "https://picsum.photos/id/237/1600/900",
      title: "This is a Blog Post Title",
      href: "/blog/posts/1",
      snippet: "This is a snippet of a blog post, lorem ipsum dolor amet.",
      createdAt: "2022-08-28T14:01:00.00",
      updatedAt: null,
    }}
  />
);
