'use client';
import { useGetRecentBlogs } from '@/app/api/posts/query';
import { BlogCard } from '@/app/components/BlogCard';
import Button from '@/app/components/Button';
import RecentBlogsSkeleton from '@/app/components/RecentBlogsSkeleton';
import React from 'react';
import { BlogPost } from '../type';

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
