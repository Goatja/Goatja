import React from 'react';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaJsSquare, FaPhp, FaJava, FaAndroid, FaDatabase, FaNetworkWired, FaServer, FaLinux } from 'react-icons/fa';
import { SiCplusplus, SiCsharp, SiMongodb } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
        { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500" /> },
        { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
        { name: 'React', icon: <FaReact className="text-blue-300" /> },
        { name: 'PHP', icon: <FaPhp className="text-purple-400" /> },
        { name: 'Java', icon: <FaJava className="text-red-500" /> },
        { name: 'Android', icon: <FaAndroid className="text-green-500" /> },
        { name: 'C++', icon: <SiCplusplus className="text-blue-600" /> },
        { name: 'C#', icon: <SiCsharp className="text-purple-600" /> },
        { name: 'SQL', icon: <FaDatabase className="text-blue-400" /> },
        { name: 'Redes', icon: <FaNetworkWired className="text-gray-500" /> },
        { name: 'Servidores', icon: <FaServer className="text-gray-500" /> },
        { name: 'Linux', icon: <FaLinux className="text-black" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
    ];

    return (
        <section id="skills" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Mis Skills</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg shadow-md">
                            <div className="text-2xl">{skill.icon}</div>
                            <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;