'use client';
import { useGetRecentBlogs } from '@/app/api/posts/query';
import { BlogPost } from '@/app/api/posts/type';
import { BlogCard } from '@/components/BlogCard';
import Button from '@/components/Button';
import RecentBlogsSkeleton from '@/components/RecentBlogsSkeleton';
import React from 'react';

export default function RecentBlogs() {
  const { isPending, isError, data, error } = useGetRecentBlogs();

  let recentBlogs: BlogPost[] = [];

  if (isPending) return <RecentBlogsSkeleton />;

  if (error || isError) recentBlogs = [];

  if (data) recentBlogs = data;
  return (
    <section>
      <div className="flex justify-between items-center mb-10">
        <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl">Recent Posts</h2>
        <Button variant="outline">All Posts</Button>
      </div>
      <div className="flex  overflow-y-auto justify-start items-start gap-5 gap-y-10">
        {recentBlogs.slice(0, 4).map((blogData) => (
          <BlogCard
            thumbNail={blogData.img}
            title={blogData.title}
            subTitle={blogData.description}
            profilePic={blogData.author.profilePic}
            profileName={blogData.author.authorName}
            timeToRead={blogData.timeToRead}
            key={blogData.blogId}
            blogId={blogData.blogId}
          />
        ))}
      </div>
    </section>
  );
}
