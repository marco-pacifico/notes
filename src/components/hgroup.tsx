export default function HGroup({
  heading,
  paragraph,
}: {
  heading: string;
  paragraph: string;
}) {
  return (
    <>
      <hgroup className="mb-4 flex flex-col gap-4">
        <h1 className="text-5xl font-semibold font-serif">{heading}</h1>
        <p className="text-gray-600 text-lg">{paragraph}</p>
      </hgroup>
    </>
  );
}
