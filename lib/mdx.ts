import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

type Frontmatter = {
  title: string;
  date?: string;
  readTime?: string;
  excerpt?: string;
  image?: string; // ✅ supports any extension
};

export type Post = {
  slug: string;
  title: string;
  date?: string;
  readTime?: string;
  excerpt?: string;
  image?: string; // ✅ available in UI
};

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(contentDir);

  return files.map((file) => {
    const filePath = path.join(contentDir, file);
    const source = fs.readFileSync(filePath, "utf8");

    const { data } = matter(source);
    const fm = data as Frontmatter;

    return {
      slug: file.replace(".mdx", ""),
      title: fm.title || "Untitled",
      date: fm.date,
      readTime: fm.readTime,
      excerpt: fm.excerpt,
      image: fm.image, // ✅ controlled source
    };
  });
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");

  const { content, data } = matter(source);
  const fm = data as Frontmatter;

  return {
    content,
    frontmatter: fm,
  };
}