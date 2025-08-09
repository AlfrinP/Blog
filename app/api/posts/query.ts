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
  return axiosInstance.get("/featuredBlogs");
}

export function getRecentBlogs(): Promise<AxiosResponse<recentBlogResponse>> {
  return axiosInstance.get("/recentBlogs");
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
    select: (response) => response.data.data,
  });
}

export function useGetRecentBlogs() {
  return useQuery({
    queryKey: ["recentPosts"],
    queryFn: getRecentBlogs,
    select: (response) => response.data.data,
  });
}

export function useGetBlogs(blogId: string) {
  return useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogs(blogId),
    select: (response) => response.data.data,
    enabled: !!blogId,
  });
}
