
import { FaGithub } from 'react-icons/fa';

const GitHub = () => {
    return (
        <section id="github" className="py-20 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Mi Perfil de GitHub</h2>
                <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-700 dark:text-gray-300">
                    Puedes encontrar más de mis proyectos y contribuciones en mi perfil de GitHub.
                </p>
                <a
                    href="https://github.com/Goatja/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600"
                >
                    <FaGithub className="mr-3 -ml-1 h-5 w-5" />
                    Visitar GitHub
                </a>
            </div>
        </section>
    );
};

export default GitHub;
