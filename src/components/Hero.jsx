
import './animations.css';

const Hero = () => {
    return (
        <section className="bg-center bg-no-repeat bg-cover bg-gray-700 bg-blend-multiply" style={{backgroundImage: "url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')"}}>
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl slide-in-left">
                    Hola, soy Jorge Galdamez
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 slide-in-right">
                    Desarrollador de Software Apasionado
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href="#projects" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Mis Proyectos
                    </a>
                    <a href="#contact" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        Contáctame
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
