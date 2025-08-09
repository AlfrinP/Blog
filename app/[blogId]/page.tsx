"use client";

import { useGetBlogs } from "@/app/api/posts/query";
import Badge from "@/components/Badge";
import { blogsDataList } from "@/constants/data";
import { dataTagErrorSymbol } from "@tanstack/react-query";
import Image from "next/image";

export default function Blog(params: { blogId: string }) {
  const { blogId } = params;
  // const { isPending, isError, data, error } = useGetBlogs(blogId);
  return (
    <div className="max-w-7xl w-full mx-auto p-4.5 space-y-4.5">
      <h1 className="text-7xl">{blogsDataList[0].title}</h1>
      <div className="flex gap-5 items-center">
        <div className="flex items-center justify-start gap-2">
          <Image
            src={blogsDataList[0].author.profilePic}
            alt={blogsDataList[0].author.authorName}
            width={100}
            height={100}
            className="rounded-full size-7 object-cover"
          />
          <span className="text-gray-700">
            {blogsDataList[0].author.authorName}
          </span>
          <div className="rounded-full size-1 bg-gray-700"></div>
          <span className="text-gray-700">{`${blogsDataList[0].timeToRead} min read`}</span>
        </div>
        <div className="flex-1 h-[1px] bg-gray-700 rounded-2xl"></div>
        <Badge text={blogsDataList[0].category} />
      </div>
      <Image
        src={blogsDataList[0].img}
        alt={blogsDataList[0].title}
        width={1000}
        height={1000}
        className="w-full rounded-2xl h-[500px] object-cover"
      />

      <p className="text-xl text-left ">{blogsDataList[0].data}</p>
    </div>
  );
}
