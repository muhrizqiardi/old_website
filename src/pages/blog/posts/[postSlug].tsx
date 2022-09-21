import { GetStaticPaths, GetStaticProps } from "next";
import BlogLayout from "../../../components/BlogLayout";
import BlogNav from "../../../components/BlogNav";
import BlogPostDetail, {
  BlogPostDetailProps,
} from "../../../components/BlogPostDetail";
import { blogNavItems } from "../../../helpers/constants";
import Database from "../../../services/Database";
import Page from "../../../services/Page";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { env } from "../../../../helpers/env";

export interface BlogPostDetailPageProps extends BlogPostDetailProps {}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await Database.query(env.NOTION_PAGE_ID);
  const paths = response.results.map((result) => ({
    params: {
      postSlug: result.id,
    },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<BlogPostDetailPageProps> = async (
  context
) => {
  const postSlug = context.params?.postSlug as string;
  const contentMeta = await Page.retrieve(postSlug);
  const content = await Page.getMarkdownString(postSlug);
  const cover = (contentMeta as PageObjectResponse).cover;

  return {
    props: {
      title:
        (contentMeta as any).properties?.title?.title[0]?.text?.content ?? "",
      content,
      coverImage:
        cover?.type === "external" ? cover.external.url : cover?.file.url ?? "",
      createdAt: (contentMeta as PageObjectResponse).created_time,
      updatedAt: (contentMeta as PageObjectResponse).last_edited_time,
      snippet:
        (contentMeta as any).properties?.snippet?.rich_text[0]?.text?.content ??
        "",
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
