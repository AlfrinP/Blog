import { The_Nautigal } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function Home() {
  const menuItems = [
    { title: "HomePage", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Features", href: "/features" },
    { title: "Blog", href: "/blog" },
    { title: "Contact Us", href: "/contact" },
  ];

  const postCardData = [
    {
      thumbNail: "",
      title: "",
    },
  ];

  return (
    <>
      <section>
        <Link href="/">
          {/* <Image /> */}
          <h1 className="text-3xl font-bold">My Website</h1>
        </Link>
        <div>
          {menuItems.map((item) => (
            <Link key={item.title} href={item.href}>
              {item.title}
            </Link>
          ))}
          <Button>Demo</Button>
          <button className="border-[1px] border-[#171717] bg-[#171717] rounded-xl px-4 py-2">
            Get Started
          </button>
        </div>
      </section>
      {/* Hero Section */}
      <section>
        <div>
          <div>
            <HeroImageCard thumbNail={""} title={""} badgeText={""} />
          </div>
          <div>
            <span>Other featured posts</span>
            <div>
              {postCardData.map((PostCardData) => (
                <PostCardMini
                  thumbNail={PostCardData.thumbNail}
                  title={PostCardData.title}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section>
        <div className="flex justify-between items-center">
          <h2 className="font-semibold">Recent Posts</h2>
          <Button>All Posts</Button>
        </div>
        <div></div>
      </section>
    </>
  );
}

type PostCardMiniPropType = {
  thumbNail: string;
  title: string;
};

function PostCardMini({ thumbNail, title }: PostCardMiniPropType) {
  return (
    <>
      <Image src={thumbNail} alt={title} />
      <span>{title}</span>
    </>
  );
}

function Badge({ text }: { text: string }) {
  return <span>{text}</span>;
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
    <div className="flex flex-col items-center justify-center gap-5">
      <Image src={thumbNail} alt={title} className="rounded-xl" />
      <p className="font-semibold">{title}</p>
      <p>{subTitle}</p>
      <div className="flex items-center justify-start gap-2">
        <Image src={profilePic} alt={profileName} />
        <span>{profileName}</span>
        <div className="rounded-full size-[1px]"></div>
        <span>{`${timeToRead} min read`}</span>
      </div>
    </div>
  );
}

function Button({ children }: { children: ReactNode }) {
  return (
    <button className="border-[1px] border-[#ededed] rounded-xl px-4 py-2">
      {children}
    </button>
  );
}

type HeroImageCardPropType = {
  thumbNail: string;
  title: string;
  badgeText: string;
};

function HeroImageCard({ thumbNail, title, badgeText }: HeroImageCardPropType) {
  return (
    <div className="realtive">
      <Image
        src={thumbNail}
        alt={title}
        className="relative size-full object-cover rounded-xl"
      />
      <div className="w-full absolute z-10 flex-col flex">
        <Badge text={badgeText} />
        <h1 className="font-bold">{title}</h1>
      </div>
    </div>
  );
}
