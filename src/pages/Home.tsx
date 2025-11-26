import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      {/* <FeaturedProjects /> */}
    </div>
  );
};

export default Home;