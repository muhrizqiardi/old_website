import { NotionToMarkdown } from "notion-to-md";
import notionClient from "./notionClient";

const notionToMarkdown = new NotionToMarkdown({ notionClient });

export default notionToMarkdown;
