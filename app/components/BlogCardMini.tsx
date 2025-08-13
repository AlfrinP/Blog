import Image from 'next/image';
import Link from 'next/link';
import { BlogCardMiniPropType } from '../type';

export default function BlogCardMini({ thumbNail, title, blogId }: BlogCardMiniPropType) {
  return (
    <Link className="flex items-center justify-start gap-3" href={`/${blogId}`}>
      <Image
        src={thumbNail}
        alt={title}
        width={120}
        placeholder="blur"
        blurDataURL="/images/blur-image.webp"
        height={120}
        className="rounded-2xl object-cover h-16 w-20"
      />
      <p className="font-medium text-base sm:text-lg">{title}</p>
    </Link>
  );
}
