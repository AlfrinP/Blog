"use client";

import { useGetBlogs } from "@/app/api/posts/query";

export default function Blog(params: { blogId: string }) {
  const { blogId } = params;
  const { isPending, isError, data, error } = useGetBlogs(blogId);
  return <div>page</div>;
}
