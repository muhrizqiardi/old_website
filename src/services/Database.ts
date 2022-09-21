import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import notionClient from "../helpers/notionClient";

async function query(databaseId: string): Promise<QueryDatabaseResponse> {
  const response = await notionClient.databases.query({
    database_id: databaseId,
  });

  return response;
}

const Database = { query };

export default Database;
