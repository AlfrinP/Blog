export default function Badge({ text }: { text: string }) {
  return (
    <span className="px-2 py-1 text-xs text-black rounded-full border-[1px] border-gray-400">
      {text}
    </span>
  );
}
