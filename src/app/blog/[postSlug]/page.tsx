export default function BlogPostPage({
  params,
}: {
  params: { postSlug: string };
}) {
  return (
    <div>
      <h1>Blog Post Page</h1>
      <p>Blog post content for {params.postSlug}</p>
    </div>
  );
}
