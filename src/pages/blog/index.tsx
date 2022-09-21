import { GetStaticProps } from "next";
import BlogLayout from "../../components/BlogLayout";
import BlogNav from "../../components/BlogNav";
import BlogPostsList from "../../components/BlogPostsList";
import { BlogPostsListItemProps } from "../../components/BlogPostsListItem";
import { blogNavItems } from "../../helpers/constants";

export interface BlogIndexPageProps {
  posts: BlogPostsListItemProps[];
}

export const getStaticProps: GetStaticProps<BlogIndexPageProps> = async () => {
  const posts = [
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
  ];

  return {
    props: { posts },
  };
};

export default function BlogIndexPage(props: BlogIndexPageProps) {
  return (
    <BlogLayout navMenu={<BlogNav navItems={blogNavItems} />}>
      <div className="p-6">
        <BlogPostsList posts={props.posts} />
      </div>
    </BlogLayout>
  );
}
