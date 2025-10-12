import ProjectCard from './Card';
import projects from './data';
import CurrentProject from './CurrentProject';
const FeaturedProjects = () => {


  return (
    <section id="featured-projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map(({current, ...project}) => current ? <CurrentProject {...project} /> : <ProjectCard {...project} />)}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;