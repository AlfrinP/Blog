export default function Badge({ text }: { text: string }) {
  return (
    <div className="p-[1px] rounded-full .gradient-border">
      <span className="text-xs text-black">{text}</span>
    </div>
  );
}
