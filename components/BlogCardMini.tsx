import Image from "next/image";

type BlogCardMiniPropType = {
  thumbNail: string;
  title: string;
};

export default function BlogCardMini({
  thumbNail,
  title,
}: BlogCardMiniPropType) {
  return (
    <div className="flex items-center justify-start gap-3">
      <Image
        src={thumbNail}
        alt={title}
        width={120}
        height={120}
        className="rounded-2xl object-cover h-16 w-20"
      />
      <p className="font-medium">{title}</p>
    </div>
  );
}
