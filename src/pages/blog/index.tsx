import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { GetStaticProps } from "next";
import { env } from "../../../helpers/env";
import Database from "../../services/Database";
import BlogLayout from "../../components/BlogLayout";
import BlogNav from "../../components/BlogNav";
import BlogPostsList from "../../components/BlogPostsList";
import { BlogPostsListItemProps } from "../../components/BlogPostsListItem";
import { blogNavItems } from "../../helpers/constants";

export interface BlogIndexPageProps {
  posts: BlogPostsListItemProps[];
}

export const getStaticProps: GetStaticProps<BlogIndexPageProps> = async () => {
  const response = await Database.query(env.NOTION_PAGE_ID);
  const posts = response.results.map((result) => {
    const cover = (result as PageObjectResponse).cover;

    return {
      title: (result as any).properties?.title?.title[0]?.text?.content ?? "",
      thumbnail:
        cover?.type === "external" ? cover.external.url : cover?.file.url ?? null,
      createdAt: (result as PageObjectResponse).created_time,
      updatedAt: (result as PageObjectResponse).last_edited_time,
      snippet: (result as any).properties?.snippet?.rich_text[0]?.text?.content ?? "",
      href: result.id,
    };
  });
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
