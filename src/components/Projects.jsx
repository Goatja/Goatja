import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'Proyecto 1',
            description: 'Descripción del proyecto 1. Una breve explicación de qué se trata y las tecnologías utilizadas.',
            link: '#',
            image: 'https://via.placeholder.com/500x300'
        },
        {
            title: 'Proyecto 2',
            description: 'Descripción del proyecto 2. Una breve explicación de qué se trata y las tecnologías utilizadas.',
            link: '#',
            image: 'https://via.placeholder.com/500x300'
        },
        {
            title: 'Proyecto 3',
            description: 'Descripción del proyecto 3. Una breve explicación de qué se trata y las tecnologías utilizadas.',
            link: '#',
            image: 'https://via.placeholder.com/500x300'
        }
    ];

    return (
        <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">Mis Proyectos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
                           {/*  <a href={project.link}>
                                <img className="rounded-t-lg" src={project.image} alt={project.title} />
                            </a> */}
                            <div className="p-5">
                                <a href={project.link}>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                                <a href={project.link} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Ver más
                                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
