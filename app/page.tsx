import Badge from "@/components/Badge";
import BlogCardMini from "@/components/BlogCardMini";
import Button from "@/components/Button";
import { blogsDataList } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const menuItems = [
    { title: "Homepage", href: "/" },
    { title: "About us", href: "/about" },
    { title: "Features", href: "/features" },
    { title: "Blog", href: "/blog" },
    { title: "Contact us", href: "/contact" },
  ];

  return (
    <div className="max-w-7xl w-full mx-auto space-y-10 py-5">
      <section className="flex">
        <Link href="/">
          {/* <Image /> */}
          <h1 className="text-2xl font-bold">My Website</h1>
        </Link>
        <div className="flex-1 flex items-center justify-end gap-5 ">
          <nav className="flex items-center justify-center gap-5">
            {menuItems.map((item) => (
              <Link key={item.title} href={item.href}>
                {item.title}
              </Link>
            ))}
          </nav>
          <Button variant="outline">Demo</Button>
          <Button>Get Started</Button>
        </div>
      </section>
      {/* Hero Section */}
      <section>
        <div className="flex gap-5">
          <div className="relative w-3/5 rounded-xl overflow-clip">
            <Image
              src="/images/sample-image.jpg"
              alt="hero image"
              width={1000}
              height={1000}
              className="relative size-full object-cover"
            />
            <div className="absolute w-full h-1/4 min-h-fit z-10 bottom-0 p-5 flex-col flex items-start justify-center backdrop-filter backdrop-blur-xs">
              <Badge text="Buisness" />
              <h1 className="font-semibold text-white text-2xl">
                A Beginner's Guide to Machine Learning
              </h1>
            </div>
          </div>
          <div className="flex flex-col w-2/5 items-start justify-between">
            <span className="font-medium text-2xl text-slate-800">
              Other featured posts
            </span>
            <div className="flex flex-col gap-2.5 divide-y-[1.5px] divide-gray-200 pt-2 *:pb-2 *:last:pb-0 w-full">
              {blogsDataList.slice(0, 5).map((blogData) => (
                <BlogCardMini
                  thumbNail={blogData.img}
                  title={blogData.title}
                  key={blogData.title}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section>
        <div className="flex justify-between items-center mb-10">
          <h2 className="font-semibold text-3xl">Recent Posts</h2>
          <Button variant="outline">All Posts</Button>
        </div>
        <div className="grid grid-cols-4 *:col-span-1 items-start gap-5 gap-y-10">
          {blogsDataList.slice(0, 4).map((blogData) => (
            <BlogCard
              thumbNail={blogData.img}
              title={blogData.title}
              subTitle={blogData.description}
              profilePic={blogData.author.profilePic}
              profileName={blogData.author.authorName}
              timeToRead={blogData.timeToRead}
              key={blogData.title}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

type BlogCardProp = {
  thumbNail: string;
  title: string;
  subTitle: string;
  profilePic: string;
  profileName: string;
  timeToRead: string;
};

function BlogCard({
  thumbNail,
  title,
  subTitle,
  profilePic,
  profileName,
  timeToRead,
}: BlogCardProp) {
  return (
    <div className="flex flex-col max-w-80 w-full items-start justify-center gap-3">
      <Image
        src={thumbNail}
        alt={title}
        className="rounded-xl"
        width={1000}
        height={1000}
      />
      <p className="font-semibold text-xl line-clamp-2 text-slate-900">
        {title}
      </p>
      <p className="leading-5 line-clamp-2 text-gray-700">{subTitle}</p>
      <div className="flex items-center justify-start gap-2">
        <Image
          src={profilePic}
          alt={profileName}
          width={100}
          height={100}
          className="rounded-full size-7 object-cover"
        />
        <span className="text-gray-700">{profileName}</span>
        <div className="rounded-full size-1 bg-gray-700"></div>
        <span className="text-gray-700">{`${timeToRead} min read`}</span>
      </div>
    </div>
  );
}
