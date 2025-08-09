import { axiosInstance } from "../AxiosInstance";
import { useQuery } from "@tanstack/react-query";
import {
  featuredBlogResponse,
  getBlogsResponse,
  recentBlogResponse,
} from "./type";
import { AxiosResponse } from "axios";

export function getFeaturedBlogs(): Promise<
  AxiosResponse<featuredBlogResponse>
> {
  return axiosInstance.get("/featuredPosts");
}

export function getRecentBlogs(): Promise<AxiosResponse<recentBlogResponse>> {
  return axiosInstance.get("/recentPosts");
}

export function getBlogs(
  blogId: string,
): Promise<AxiosResponse<getBlogsResponse>> {
  return axiosInstance.get(`/blogs/${blogId}`);
}

export function useGetFeaturedBlogs() {
  return useQuery({
    queryKey: ["featuredPosts"],
    queryFn: getFeaturedBlogs,
    select: (data) => data.data,
  });
}

export function useGetRecentBlogs() {
  return useQuery({
    queryKey: ["recentPosts"],
    queryFn: getRecentBlogs,
    select: (data) => data.data,
  });
}

export function useGetBlogs(blogId: string) {
  return useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogs(blogId),
    select: (data) => data.data,
    enabled: !!blogId,
  });
}
