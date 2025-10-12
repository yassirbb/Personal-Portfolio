import { Briefcase, Calendar, ExternalLink, Github } from "lucide-react";
import type { Project } from "./Card";
import { useMemo } from "react";


const CurrentProject = ({
    title,
    description,
    technologies,
    githubUrl,
    company,
    liveUrl,
    date,
}: Project) => {

    const calendarDate = useMemo(() => new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }), [date])
    return (
        <div className="md:col-span-2 lg:col-span-3">
            <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
                    {/* Ribbon */}
                    <div className="absolute -top-3 left-6 inline-flex items-center gap-2 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                    <Briefcase size={14} />
                    <span>Current Company Project</span>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                    {/* Meta */}
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <Calendar size={16} className="mr-2" />
                        {calendarDate}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                    {company && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Building at {company}
                        </p>
                    )}

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        {description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
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
                        {githubUrl && (
                            <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                            >
                            <Github size={16} className="mr-1" />
                            <span className="text-sm">Code</span>
                            </a>
                        )}
                        {liveUrl && (
                            <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                            >
                            <ExternalLink size={16} className="mr-1" />
                            <span className="text-sm">Live Demo</span>
                            </a>
                        )}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentProject;