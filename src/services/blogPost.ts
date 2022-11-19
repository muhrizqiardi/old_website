import fs from "fs";
import matter from "gray-matter";
import path from "path";

const contentsDirectory = path.join(process.cwd(), "src", "contents");
const blogPostDirectory = path.join(contentsDirectory, "blog");

export interface BlogPost {
  slug: string;
  title: string;
  coverImage?: string;
  snippet: string;
  content: string;
  createdAt: string;
  updatedAt?: string | null;
}

export function getMany(page: number = 1, limit: number = 10): BlogPost[] {
  try {
    const fileNames = fs.readdirSync(blogPostDirectory);

    const posts: BlogPost[] = fileNames.map((fileName) => {
      const file = fs.readFileSync(path.join(blogPostDirectory, fileName));
      const { data, content } = matter(file);

      const slug = fileName.replace(".md", "");
      const createdAt = data["createdAt"] ?? "";
      const updatedAt = data["updatedAt"] ?? "";
      const snippet = data["snippet"] ?? "";
      const title = data["title"] ?? "";
      const coverImage = data["coverImage"] ?? null;

      return {
        slug,
        createdAt,
        updatedAt,
        snippet,
        title,
        coverImage,
        content,
      };
    });

    if (page && limit) return posts.slice(limit * (page - 1), limit * page);

    return posts;
  } catch (error) {
    throw error;
  }
}

export function getOne(slug: string) {
  try {
    const file = fs.readFileSync(path.join(blogPostDirectory, `${slug}.md`));
    const { data, content } = matter(file);

    return {
      slug: slug,
      createdAt: data["createdAt"] ?? "",
      updatedAt: data["updatedAt"] ?? "",
      snippet: data["snippet"] ?? "",
      title: data["title"] ?? "",
      coverImage: data["coverImage"] ?? null,
      content,
    };
  } catch (error) {
    throw error;
  }
}

const blogPost = { getMany, getOne };

export default blogPost;
