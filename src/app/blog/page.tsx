import Link from "next/link";
import HGroup from "../components/hgroup";

export default function BlogPage() {
  return (
    <>
      <HGroup heading={"Blog Page"} paragraph={"List of blog posts"} />
      <ul>
        {POSTS.map((post) => (
          <li key={post.slug} className="mb-2">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

const POSTS = [
  { slug: "first-post", title: "First Post" },
  { slug: "second-post", title: "Second Post" },
  { slug: "third-post", title: "Third Post" },
];
