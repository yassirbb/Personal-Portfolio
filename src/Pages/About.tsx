import { User, MapPin, Calendar, Mail, Github, Linkedin, Twitter, Code, Coffee, Heart, Wrench, BookOpen, Rocket, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {

  const experience = [
        {
        title: 'Frontend Engineer',
        company: 'Centreon',
        period: '2022 - Present',
        description: 'Owning and leading the development of Centreon-Map, a core observability product relied on by enterprise clients, using React, TypeScript, and modern visualization libraries.',
        achievements: [
            'Led the transition of legacy Backbone.js codebases to modern React functional components',
            'Implemented advanced data visualization features with D3.js, Visx, and Leaflet.js for real-time infrastructure monitoring',
            'Maintained high code quality with Cypress end-to-end tests and CI pipelines',
            'Integrated libraries like Formik, Material UI, React Query, and Jotai to streamline UI development and state management',
            'Collaborated with cross-functional teams to deliver customer-focused features and support backend integrations',
        ],
        },
        {
        title: 'Full Stack Developer (Intern)',
        company: 'APM Terminals',
        period: '2021 - 6 months',
        description: 'Developed a full-stack monitoring application for port equipment using ASP.NET MVC and JavaScript.',
        achievements: [
            'Designed and implemented complete application architecture and SQL Server database structure',
            'Expanded functionality to include driver, inspector, and maintenance modules',
            'Delivered a final solution approved by stakeholders and aligned with operational needs',
        ],
        }
    ];

  const interests = [
    { icon: Wrench, title: 'Refactoring', description: 'Passionate about improving codebases — making them cleaner, more maintainable, and scalable.' },
    { icon: BookOpen, title: 'Continuous Learning', description: 'Exploring new technologies, frameworks, and patterns to stay at the cutting edge of web development.' },
    { icon: Heart, title: 'Open Source', description: 'Contributing to the developer community' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center">
              <User size={64} className="text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I'm a passionate web developer with a love for creating beautiful, 
              functional web applications. With over 4 years of experience in the industry, 
              I specialize in React, and modern web technologies.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                Marrakech, Morocco
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                Available for opportunities
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:benboubker.yassir@gmail.com">benboubker.yassir@gmail.com</a>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+212 6 43 00 98 46">+212 6 43 00 98 46</a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Professional Experience
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {job.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {job.company}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                      {job.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {job.description}
                  </p>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {job.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                        >
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            When I'm Not Coding
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="text-center bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <interest.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {interest.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's connect and see how we can create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:benboubker.yassir@gmail.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;