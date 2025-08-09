import { axiosInstance } from "../AxiosInstance";
import { useQuery } from "@tanstack/react-query";

function getFeaturedBlogs() {
  return axiosInstance.get("/featuredPosts");
}

function getRecentBogs() {
  return axiosInstance.get("/recentPosts");
}

function getBlogs(blogId: string) {
  return axiosInstance.get(`/blogs/${blogId}`);
}

export function useGetFeaturedBlogs() {
  return useQuery({
    queryKey: ["featuredPosts"],
    queryFn: getFeaturedBlogs,
  });
}

export function useGetRecentBlogs() {
  return useQuery({
    queryKey: ["recentPosts"],
    queryFn: getRecentBogs,
  });
}

export function useGetBlogs(blogId: string) {
  return useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogs(blogId),
    enabled: !!blogId,
  });
}
