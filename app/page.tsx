import NavBar from '@/app/components/NavBar';
import FeaturedBlogs from './sections/FeaturedBlogs';
import RecentBlogs from './sections/RecentBlogs';

export default function App() {
  return (
    <div className="max-w-7xl w-full mx-auto py-4.5">
      <NavBar />
      <div className="px-4.5 space-y-5 md:space-y-10">
        <FeaturedBlogs />
        <RecentBlogs />
      </div>
    </div>
  );
}
