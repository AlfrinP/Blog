'use client';
import { useGetFeaturedBlogs } from '@/app/api/posts/query';
import Badge from '@/app/components/Badge';
import BlogCardMini from '@/app/components/BlogCardMini';
import { FeaturedBlogsSkeleton } from '@/app/components/FeaturedBlogsSkeleton';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '../type';

export default function FeaturedBlogs() {
  const { isPending, isError, data, error } = useGetFeaturedBlogs();

  let featuredBlogs: BlogPost[] = [];

  if (isPending) return <FeaturedBlogsSkeleton />;

  if (error || isError) featuredBlogs = [];

  if (data) featuredBlogs = data;

  return (
    <section className="md:flex-row flex-col flex gap-5">
      <Link className="relative w-full md:w-3/5 flex-1 rounded-xl overflow-clip" href={`/${featuredBlogs[0].blogId}`}>
        {featuredBlogs[0] ? (
          <>
            <Image
              src={featuredBlogs[0].img}
              alt={featuredBlogs[0].title}
              width={1000}
              height={1000}
              className="relative size-full object-cover"
            />
            <div className="absolute w-full h-1/5 sm:h-1/4 min-h-fit z-10 bottom-0 p-2 sm:p-5 flex-col flex items-start justify-center backdrop-filter backdrop-blur-xs">
              <Badge text={featuredBlogs[0].category} />
              <h1 className="font-semibold text-white text-lg xs:text-xl sm:text-2xl">{featuredBlogs[0].title}</h1>
            </div>
          </>
        ) : null}
      </Link>
      <div className="flex flex-col w-full md:w-2/5  md:gap-0 gap-3 items-start justify-between">
        <span className="font-medium text-lg sm:text-xl md:text-2xl text-slate-800">Other featured posts</span>
        <div className="flex flex-col gap-2.5 divide-y-[1.5px] divide-gray-200 pt-2 *:pb-2 *:last:pb-0 w-full">
          {featuredBlogs?.slice(1, 6).map((blogData: BlogPost) => (
            <BlogCardMini
              blogId={blogData.blogId}
              thumbNail={blogData.img}
              title={blogData.title}
              key={blogData.blogId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
