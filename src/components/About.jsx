
import jrImage from '../assets/jr.png';
import './animations.css';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="slide-in-left">
                        <img src={jrImage} alt="JR" className="rounded-full w-64 h-64 sm:w-80 sm:h-80 mx-auto object-cover shadow-lg" />
                    </div>
                    <div className="slide-in-right">
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Sobre mí</h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            Hola, soy un desarrollador de software apasionado por la tecnología y el aprendizaje continuo.
                            Tengo experiencia en el desarrollo de aplicaciones web utilizando tecnologías como React, Node.js y más.
                            Me encanta enfrentar nuevos desafíos y crear soluciones innovadoras.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;