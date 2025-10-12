import { Calendar, ExternalLink, Github } from "lucide-react";
import { useMemo } from "react";

export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: Array<string>;
    image: string;
    githubUrl: string;
    liveUrl: string;
    date: string;
    featured?: boolean;
    company?: string;
}

const ProjectCard = ({
    id,
    title,
    description,
    technologies,
    image,
    githubUrl,
    liveUrl,
    date,
}: Project) => {

    const calendarDate = useMemo(() => new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }), [date])

    return (
        <div
            key={id}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
        >
            {/* Project Image */}
            <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                <img 
                    src={image}
                    alt="Project Screenshot" 
                    className="h-full w-full object-cover"
                />
            </div>

                {/* Project Content */}
                <div className="p-6">
                {/* Date */}
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <Calendar size={14} className="mr-1" />
                    {calendarDate}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech) => (
                    <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-md"
                    >
                        {tech}
                    </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                        <Github size={16} className="mr-1" />
                        <span className="text-sm">Code</span>
                    </a>
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                        <ExternalLink size={16} className="mr-1" />
                        <span className="text-sm">Live Demo</span>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;