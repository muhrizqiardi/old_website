import { GetStaticProps } from "next";
import BlogLayout from "../../components/BlogLayout";
import BlogNav from "../../components/BlogNav";
import BlogPostsList from "../../components/BlogPostsList";
import { BlogPostsListItemProps } from "../../components/BlogPostsListItem";
import { blogNavItems } from "../../helpers/constants";
import blogPost from "../../services/blogPost";

export interface BlogIndexPageProps {
  posts: BlogPostsListItemProps[];
}

export const getStaticProps: GetStaticProps<BlogIndexPageProps> = () => {
  const posts = blogPost.getMany().map((post) => ({
    snippet: post.snippet,
    href: post.slug,
    title: post.title,
    thumbnail: post.coverImage,
    createdAt: post.createdAt,
    updatedAt: post.updatedAt,
  }));
  
  return {
    props: {
      posts,
    },
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
