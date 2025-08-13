// app/blog/[blogId]/page.tsx
import { getBlogs } from '@/app/api/posts/query';
import { BlogPageProps } from '../type';
import BlogClient from './BlogClient';

export async function generateMetadata({ params }: BlogPageProps) {
  const { blogId } = params;
  const response = await getBlogs(blogId);
  const blog = response.data;

  return {
    title: blog.title,
    description: blog.description,
    keywords: [blog.category, blog.title, 'blog', 'OpenMind'],
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [{ url: blog.img, alt: blog.title }],
      url: `https://your-domain.com/blog/${blogId}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description,
      images: [blog.img],
    },
    alternates: {
      canonical: `https://your-domain.com/blog/${blogId}`,
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  return <BlogClient blogId={params.blogId} />;
}
