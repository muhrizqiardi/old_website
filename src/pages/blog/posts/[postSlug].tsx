import { GetStaticPaths, GetStaticProps } from "next";
import BlogLayout from "../../../components/BlogLayout";
import BlogNav from "../../../components/BlogNav";
import BlogPostDetail, {
  BlogPostDetailProps,
} from "../../../components/BlogPostDetail";
import { blogNavItems } from "../../../helpers/constants";
import blogPost from "../../../services/blogPost";

export interface BlogPostDetailPageProps extends BlogPostDetailProps {}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPost
    .getMany()
    .map((blogPost) => ({ params: { postSlug: blogPost.slug } }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<BlogPostDetailPageProps> = async (
  context
) => {
  const postSlug = context.params?.postSlug as string;
  const { title, content, coverImage, snippet, createdAt, updatedAt } =
    blogPost.getOne(postSlug);

  return {
    props: { title, content, coverImage, snippet, createdAt, updatedAt },
  };
};

export default function BlogPostDetailPage(props: BlogPostDetailPageProps) {
  return (
    <BlogLayout navMenu={<BlogNav navItems={blogNavItems} />}>
      <div className="p-6">
        <BlogPostDetail {...props} />
      </div>
    </BlogLayout>
  );
}
