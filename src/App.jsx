import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Philosophy from './components/Philosophy'
import Blog from './components/Blog'
import Contact from './components/Contact'
import FooterComponent from './components/FooterComponent'

function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido principal
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Philosophy />
        <Blog />
        <Contact />
      </main>
      <FooterComponent />
    </>
  )
}

export default App
