import { GetStaticPaths, GetStaticProps } from "next";
import BlogLayout from "../../../components/BlogLayout";
import BlogNav from "../../../components/BlogNav";
import BlogPostDetail, {
  BlogPostDetailProps,
} from "../../../components/BlogPostDetail";
import { blogNavItems } from "../../../helpers/constants";
import { faker } from "@faker-js/faker";
import MultiLineToParagraphs from "../../../components/MultiLineToParagraphs";

export interface BlogPostDetailPageProps extends BlogPostDetailProps {}

export const getStaticPaths: GetStaticPaths = async () => {
  // TODO: remove placeholder
  const paths = Array(12).map((item, index) => ({
    params: {
      postSlug: index.toString(),
    },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<BlogPostDetailPageProps> = (
  context
) => {
  return {
    props: {
      // TODO: replace placeholder
      title: faker.lorem.sentence(10),
      content: faker.lorem.paragraphs(17),
      coverImage: faker.image.business(1920, 1080, true),
      createdAt: faker.date.recent(3).toISOString(),
      updatedAt: faker.date.recent(1).toISOString(),
      snippet: faker.lorem.paragraph(2),
    },
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
