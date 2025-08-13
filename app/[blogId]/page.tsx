'use client';

import { useGetBlogs } from '@/app/api/posts/query';
import { markdownToHtml } from '@/utils/blogs';
import { use, useEffect, useState } from 'react';
import GlobalError from '../global-error';
import Head from 'next/head';
import { usePathname } from 'next/navigation';

type BlogPageProps = {
  params: Promise<{
    blogId: string;
  }>;
};

export default function Blog({ params }: BlogPageProps) {
  const { blogId } = use(params);
  const { data, isError, error, refetch, isLoading } = useGetBlogs(blogId);

  const [htmlContent, setHtmlContent] = useState<string>('');

  useEffect(() => {
    if (data) {
      const convertContent = async () => {
        try {
          const html = await markdownToHtml(data.data);
          setHtmlContent(html);
        } catch (err) {
          console.error('Error converting markdown to HTML:', err);
          setHtmlContent(data.data);
        }
      };
      convertContent();
    }
  }, [data]);

  const pathname = usePathname();

  if (isError) {
    return <GlobalError error={error as Error} reset={refetch} resetButtonText="Retry" />;
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full size-10 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{data?.title}</title>
        <meta name="description" content={data?.description} />
        <meta
          name="keywords"
          content={`blogs, stories, lifestyle, travel, technology, health, personal growth, creativity, ideas , ${data?.category}`}
        />
        <meta property="og:title" content={data?.title} />
        <meta property="og:description" content={data?.description} />
        <meta property="og:image" content="https://alfrin.vercel.app/favicon.ico" />
        <meta property="og:url" content={pathname} />
      </Head>
      <div className="blog-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </>
  );
}
