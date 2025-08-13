export function FeaturedBlogsSkeleton() {
  return (
    <section>
      <div className="flex gap-5">
        {/* Main featured post skeleton */}
        <div className="w-3/5 rounded-xl bg-gray-200 animate-pulse"></div>

        {/* Side posts skeleton */}
        <div className="flex flex-col w-2/5 items-start justify-between">
          <div className="w-48 h-8 bg-gray-300 rounded animate-pulse mb-4"></div>
          <div className="flex flex-col gap-2.5 pt-2 w-full :animate-pulse *:rounded-xl *:bg-gray-100 *:h-20">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
