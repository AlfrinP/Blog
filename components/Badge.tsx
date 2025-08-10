export default function Badge({ text }: { text: string }) {
  return (
    <span className="p-1 sm:px-2 sm:py-1 text-xs text-black rounded-full border-[1px] border-gray-400">{text}</span>
  );
}
