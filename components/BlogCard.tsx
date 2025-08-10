import Image from 'next/image';
import Link from 'next/link';

type BlogCardProp = {
  thumbNail: string;
  title: string;
  subTitle: string;
  profilePic: string;
  profileName: string;
  timeToRead: string;
};

export function BlogCard({ thumbNail, title, subTitle, profilePic, profileName, timeToRead }: BlogCardProp) {
  return (
    <Link className="flex flex-col max-w-80 w-full items-start justify-center gap-2 sm:gap-3" href="123">
      <Image src={thumbNail} alt={title} className="rounded-xl w-full min-w-52 min-h-32" width={1000} height={1000} />
      <p className="font-semibold text-lg sm:text-xl line-clamp-2 text-slate-900">{title}</p>
      <p className="leading-5 line-clamp-2 text-gray-700 text-sm md:text-lg">{subTitle}</p>
      <div className="flex items-center justify-start gap-2">
        <Image
          src={profilePic}
          alt={profileName}
          width={100}
          height={100}
          className="rounded-full size-7 object-cover"
        />
        <span className="text-gray-700 text-sm md:text-lg text-nowrap truncate">{profileName}</span>
        <div className="rounded-full size-1 bg-gray-700"></div>
        <span className="text-gray-700 text-sm md:text-lg text-nowrap truncate">{`${timeToRead} min read`}</span>
      </div>
    </Link>
  );
}
