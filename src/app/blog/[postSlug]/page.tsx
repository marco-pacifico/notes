import Link from "next/link";
import HGroup from "@/app/components/hgroup";

export default function BlogPostPage({
  params,
}: {
  params: { postSlug: string };
}) {
  return (
    <>
      <Link href="/blog">Back</Link>
      <HGroup
        heading={"Blog Post Page"}
        paragraph={`Blog post content for ${params.postSlug}`}
      />
    </>
  );
}
