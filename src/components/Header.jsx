import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLinkClick = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-transparent'}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center">
                    <span className={`self-center text-2xl font-semibold whitespace-nowrap ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>Mi Portafolio</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ${isScrolled ? 'bg-gray-50 dark:bg-gray-800 md:dark:bg-gray-900' : 'bg-transparent'}`}>
                        <li>
                            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className={`block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 ${isScrolled ? 'text-gray-900' : 'text-white'}`} aria-current="page">Sobre mí</a>
                        </li>
                        <li>
                            <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')} className={`block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Proyectos</a>
                        </li>
                        <li>
                            <a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')} className={`block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Skills</a>
                        </li>
                        <li>
                            <a href="#blog" onClick={(e) => handleLinkClick(e, 'blog')} className={`block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Blog</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className={`block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Contacto</a>
                        </li>
                        <li>
                            <a href="#github" onClick={(e) => handleLinkClick(e, 'github')} className={`block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>GitHub</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;