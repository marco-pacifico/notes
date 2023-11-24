export function GridBackground() {
  return (
    <div className="">
       <div
          aria-hidden
          className="absolute top-0 w-[1000px] h-[800px] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.25] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#ff0000, transparent 50%)",
          }}
        />
      <svg
        className="absolute pointer-events-none inset-0 h-full w-full stroke-red-500 [mask-image:radial-gradient(100%_50%_at_top_center,white,transparent)]"
        aria-hidden
      >
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5 .5 M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
        />
      </svg>
     
    </div>
  );
}
