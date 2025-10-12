import FeaturedProjects from '@/components/FeaturedProjects';
import HeroSection from '@/components/HeroSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedProjects />
    </div>
  );
}

export default Home;