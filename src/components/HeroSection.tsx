import { Code, Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to My
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Digital Hub
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            A personal space where I showcase my projects, share my thoughts through blogs, 
            and document my continuous learning journey in the world of technology.
          </p>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <Code className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Projects Portfolio</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Explore my latest projects and see what I've been building
              </p>
            </div>
            
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <Lightbulb className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Learning Journey</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Follow along as I learn new technologies and skills
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#featured-projects"
              className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 group"
            >
              Go to Current Project
            </a>
            
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors duration-200"
            >
              Learn About Me
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;