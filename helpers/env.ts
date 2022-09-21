import { str, envsafe } from "envsafe";

export const env = envsafe({
  NOTION_TOKEN: str({
    desc: "Notion's secret token",
  }),
  NOTION_PAGE_ID: str({
    desc: "Notion page where blog post data are stored"
  })
});
