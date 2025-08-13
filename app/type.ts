import { DefaultError } from '@tanstack/react-query';
import { ReactNode } from 'react';

export type GlobalErrorProps = {
  error: DefaultError;
  reset: () => void;
  resetButtonText?: string;
};

export type BlogPageProps = {
  params: Promise<{
    blogId: string;
  }>;
};

export type Author = {
  profilePic: string;
  authorName: string;
};

export type BlogPost = {
  blogId: string;
  title: string;
  description: string;
  author: Author;
  timeToRead: string;
  category: string;
  data: string;
  img: string;
};

export type BlogCardProp = BlogCardMiniPropType & {
  subTitle: string;
  profilePic: string;
  profileName: string;
  timeToRead: string;
};

export type BlogCardMiniPropType = {
  thumbNail: string;
  title: string;
  blogId: string;
};

export type ButtonPropType = {
  children: ReactNode;
  variant?: 'primary' | 'outline';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
