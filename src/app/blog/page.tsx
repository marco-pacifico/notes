import Link from "next/link";
export default function BlogPage() {
  return (
    <main>
      <h1>Blog Page</h1>
      <p>List of blog posts</p>
      <ul>
        {POSTS.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

const POSTS = [
  { slug: "first-post", title: "First Post" },
  { slug: "second-post", title: "Second Post" },
  { slug: "third-post", title: "Third Post" },
];
