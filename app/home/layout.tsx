import NavBar from '@/components/NavBar';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-7xl w-full mx-auto py-4.5">
      <NavBar />
      <div className="px-4.5">{children}</div>
    </div>
  );
}
