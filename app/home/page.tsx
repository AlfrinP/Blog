import FeaturedBlogs from "./sections/FeaturedBlogs";
import RecentBlogs from "./sections/RecentBlogs";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="max-w-7xl w-full mx-auto space-y-10 py-5">
      <NavBar />

      {/* Hero Section */}
      <FeaturedBlogs />

      {/* Recent Posts Section */}
      <RecentBlogs />
    </div>
  );
}
