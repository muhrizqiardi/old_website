import { Client } from "@notionhq/client";
import { env } from "../../helpers/env";

const notionClient = new Client({
  auth: env.NOTION_TOKEN,
});

export default notionClient;
