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

export type featuredBlogResponse = {
  data: BlogPost[];
};

export type recentBlogResponse = {
  data: BlogPost[];
};

export type getBlogsResponse = {
  data: BlogPost[];
};
