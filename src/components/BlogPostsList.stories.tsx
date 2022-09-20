import BlogPostsList from "./BlogPostsList";

const blogPostsListProps = {
  posts: [
    {
      thumbnail: "https://picsum.photos/id/237/200/300",
      title: "title 1",
      href: "/blog/posts/1",
      snippet: "snippet 1",
      createdAt: "2022-08-28T14:01:00.00",
      updatedAt: "2022-08-28T14:01:00.00",
    },
    {
      thumbnail: "https://picsum.photos/id/237/200/300",
      title: "title 2",
      href: "/blog/posts/2",
      snippet: "snippet 2",
      createdAt: "2022-08-28T14:01:00.00",
      updatedAt: "2022-08-28T14:01:00.00",
    },
    {
      thumbnail: "https://picsum.photos/id/237/200/300",
      title: "title 3",
      href: "/blog/posts/3",
      snippet: "snippet 3",
      createdAt: "2022-08-28T14:01:00.00",
      updatedAt: "2022-08-28T14:01:00.00",
    },
    {
      thumbnail: "https://picsum.photos/id/237/200/300",
      title: "title 4",
      href: "/blog/posts/4",
      snippet: "snippet 4",
      createdAt: "2022-08-28T14:01:00.00",
      updatedAt: "2022-08-28T14:01:00.00",
    },
  ],
};

export const defaultStory = () => <BlogPostsList {...blogPostsListProps} />;
