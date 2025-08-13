export default function RecentBlogsSkeleton() {
  return (
    <section>
      {/* Header skeleton */}
      <div className="flex justify-between items-center mb-10">
        <div className="w-48 h-9 bg-gray-300 rounded animate-pulse"></div>
        <div className="w-24 h-10 bg-gray-300 rounded-xl animate-pulse"></div>
      </div>

      {/* Grid skeleton */}
      <div className="grid grid-cols-4 gap-5 gap-y-10 *:col-span-1 *:rounded-xl *:bg-gray-100 *:h-36">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index}></div>
        ))}
      </div>
    </section>
  );
}
