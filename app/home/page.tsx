import FeaturedBlogs from './sections/FeaturedBlogs';
import RecentBlogs from './sections/RecentBlogs';

export default function Home() {
  return (
    <div className="space-y-5 md:space-y-10">
      {/* Hero Section */}
      <FeaturedBlogs />

      {/* Recent Posts Section */}
      <RecentBlogs />
    </div>
  );
}
