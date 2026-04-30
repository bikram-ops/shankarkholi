import ClientPage from "./ClientPage";
import { getAllPosts } from "@/lib/mdx";

export const metadata = {
  title: "Luxury Real Estate in Gurugram | Shankar Kohli",
  description:
    "Buy luxury apartments in Gurugram including Lamborghini Residences & branded homes.",
};

export default function Page() {
  const posts = getAllPosts();

  const latestPosts = posts
    .sort(
      (a, b) =>
        new Date(b.date || "").getTime() -
        new Date(a.date || "").getTime()
    )
    .slice(0, 3);

  return <ClientPage posts={latestPosts} />;
}