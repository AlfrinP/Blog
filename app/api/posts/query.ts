import { BlogPost } from '@/app/type';
import { axiosInstance } from '../AxiosInstance';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export function getFeaturedBlogs(): Promise<AxiosResponse<BlogPost[]>> {
  return axiosInstance.get('/featured');
}

export function getRecentBlogs(): Promise<AxiosResponse<BlogPost[]>> {
  return axiosInstance.get('/recent');
}

export function getBlogs(blogId: string): Promise<AxiosResponse<BlogPost>> {
  return axiosInstance.get(`/${blogId}`);
}

export function useGetFeaturedBlogs() {
  return useQuery({
    queryKey: ['featuredPosts'],
    queryFn: getFeaturedBlogs,
    select: (response) => response.data,
  });
}

export function useGetRecentBlogs() {
  return useQuery({
    queryKey: ['recentPosts'],
    queryFn: getRecentBlogs,
    select: (response) => response.data,
  });
}

export function useGetBlogs(blogId: string) {
  return useQuery({
    queryKey: ['blog', blogId],
    queryFn: () => getBlogs(blogId),
    select: (response) => response.data,
    enabled: !!blogId,
  });
}
