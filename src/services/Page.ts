import { GetPageResponse } from "@notionhq/client/build/src/api-endpoints";
import notionClient from "../helpers/notionClient";
import notionToMarkdown from "../helpers/notionToMarkdown";

async function retrieve(pageId: string): Promise<GetPageResponse> {
  const response = await notionClient.pages.retrieve({
    page_id: pageId,
  });

  return response;
}

async function getMarkdownString(pageId: string): Promise<string> {
  const markdownBlocks = await notionToMarkdown.pageToMarkdown(pageId);
  const markdownString = notionToMarkdown.toMarkdownString(markdownBlocks);

  return markdownString;
}

const Page = { retrieve, getMarkdownString };

export default Page;
