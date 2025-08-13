'use client';

import { useGetBlogs } from '@/app/api/posts/query';
import { markdownToHtml } from '@/utils/markdownToHtml';
import { useEffect, useState } from 'react';
import GlobalError from '../global-error';

export default function BlogClient({ blogId }: { blogId: string }) {
  const { data, isError, error, refetch, isLoading } = useGetBlogs(blogId);
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    if (data?.data) {
      markdownToHtml(data.data)
        .then(setHtmlContent)
        .catch(() => setHtmlContent(data.data));
    }
  }, [data]);

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

  return <div className="blog-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
