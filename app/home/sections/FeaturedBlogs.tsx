import { useGetFeaturedBlogs } from "@/app/api/posts/query";
import { BlogPost } from "@/app/api/posts/type";
import Badge from "@/components/Badge";
import BlogCardMini from "@/components/BlogCardMini";
import { FeaturedBlogsSkeleton } from "@/components/FeaturedBlogsSkeleton";
import Image from "next/image";

export default function FeaturedBlogs() {
  const { isPending, isError, data, error } = useGetFeaturedBlogs();

  let featuredBlogs: BlogPost[] = [];

  if (isPending) return <FeaturedBlogsSkeleton />;

  if (error || isError) featuredBlogs = [];

  if (data) featuredBlogs = data;

  console.log(featuredBlogs);

  return (
    <section className="flex gap-5">
      <div className="relative w-3/5 flex-1 rounded-xl overflow-clip">
        {featuredBlogs[0] ? (
          <>
            <Image
              src={featuredBlogs[0].img}
              alt="hero image"
              width={1000}
              height={1000}
              className="relative size-full object-cover"
            />
            <div className="absolute w-full h-1/4 min-h-fit z-10 bottom-0 p-5 flex-col flex items-start justify-center backdrop-filter backdrop-blur-xs">
              <Badge text={featuredBlogs[0].category} />
              <h1 className="font-semibold text-white text-2xl">
                {featuredBlogs[0].title}
              </h1>
            </div>
          </>
        ) : null}
      </div>
      <div className="flex flex-col w-2/5 items-start justify-between">
        <span className="font-medium text-2xl text-slate-800">
          Other featured posts
        </span>
        <div className="flex flex-col gap-2.5 divide-y-[1.5px] divide-gray-200 pt-2 *:pb-2 *:last:pb-0 w-full">
          {featuredBlogs?.slice(1, 6).map((blogData: BlogPost) => (
            <BlogCardMini
              thumbNail={blogData.img}
              title={blogData.title}
              key={blogData.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
