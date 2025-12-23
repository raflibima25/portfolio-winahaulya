'use client';

import { useState } from 'react';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            category: 'web',
            description: 'A modern e-commerce platform with seamless shopping experience and secure payment integration.',
            tags: ['React', 'Node.js', 'MongoDB'],
        },
        {
            id: 2,
            title: 'Task Management App',
            category: 'app',
            description: 'Productivity application for managing tasks and projects with real-time collaboration features.',
            tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
        },
        {
            id: 3,
            title: 'Portfolio Website',
            category: 'web',
            description: 'Creative portfolio website with stunning animations and modern design aesthetics.',
            tags: ['HTML', 'CSS', 'JavaScript'],
        },
        {
            id: 4,
            title: 'Weather Dashboard',
            category: 'app',
            description: 'Real-time weather application with beautiful visualizations and accurate forecasts.',
            tags: ['React', 'API', 'Chart.js'],
        },
        {
            id: 5,
            title: 'Brand Identity Design',
            category: 'design',
            description: 'Complete brand identity package including logo, color palette, and brand guidelines.',
            tags: ['Figma', 'Branding', 'UI/UX'],
        },
        {
            id: 6,
            title: 'Social Media Dashboard',
            category: 'web',
            description: 'Analytics dashboard for tracking social media metrics and engagement.',
            tags: ['Vue.js', 'D3.js', 'Firebase'],
        },
    ];

    const filters = [
        { id: 'all', label: 'All' },
        { id: 'web', label: 'Web' },
        { id: 'app', label: 'App' },
        { id: 'design', label: 'Design' },
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <section id="projects" className="py-24 bg-[#FFE4EF]">
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <p className="section-subtitle">
                    Explore my recent work and the projects I'm most proud of
                </p>

                {/* Filter Buttons */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            className={`px-7 py-3 text-[0.95rem] font-medium rounded-full transition-all ${activeFilter === filter.id
                                    ? 'gradient-primary text-[#2D2D2D] shadow-pink'
                                    : 'bg-white text-[#6B6B6B] hover:border-[#F6B1CE] hover:text-[#2D2D2D] border-2 border-transparent'
                                }`}
                            onClick={() => setActiveFilter(filter.id)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="group bg-white rounded-3xl overflow-hidden shadow-pink transition-all duration-300 hover:-translate-y-2 hover:shadow-pink-lg">
                            {/* Project Image */}
                            <div className="relative overflow-hidden">
                                <div className="w-full aspect-video gradient-primary flex items-center justify-center text-white">
                                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <rect x="2" y="3" width="20" height="14" rx="2" />
                                        <path d="M8 21h8M12 17v4" />
                                    </svg>
                                </div>
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-[#2D2D2D]/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <a href="#" className="w-12 h-12 flex items-center justify-center bg-white text-[#2D2D2D] rounded-full hover:bg-[#F6B1CE] hover:scale-110 transition-all translate-y-5 group-hover:translate-y-0">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                            <polyline points="15 3 21 3 21 9" />
                                            <line x1="10" y1="14" x2="21" y2="3" />
                                        </svg>
                                    </a>
                                    <a href="#" className="w-12 h-12 flex items-center justify-center bg-white text-[#2D2D2D] rounded-full hover:bg-[#F6B1CE] hover:scale-110 transition-all translate-y-5 group-hover:translate-y-0">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                                <p className="text-[#6B6B6B] text-[0.95rem] leading-relaxed mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="px-4 py-1.5 text-xs font-medium bg-[#FFE4EF] text-[#2D2D2D] rounded-full">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
