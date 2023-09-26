import Link from "next/link";
export default function BlogPostPage({
  params,
}: {
  params: { postSlug: string };
}) {
  return (
    <div>
      <Link href="/blog">Back</Link>
      <h1>Blog Post Page</h1>
      <p>Blog post content for {params.postSlug}</p>
    </div>
  );
}
