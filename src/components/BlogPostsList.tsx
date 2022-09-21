import BlogPostsListItem, { BlogPostsListItemProps } from "./BlogPostsListItem";

interface BlogPostsListProps {
  posts: BlogPostsListItemProps[];
}

function BlogPostsList(props: BlogPostsListProps) {
  return (
    <div className="flex flex-col gap-10">
      {props.posts.map((post, index) => (
        <BlogPostsListItem key={index} {...post} />
      ))}
    </div>
  );
}

export type { BlogPostsListProps };
export default BlogPostsList;
