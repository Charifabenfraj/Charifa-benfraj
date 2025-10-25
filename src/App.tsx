import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Element } from 'react-scroll';

// Components
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler un temps de chargement pour l'animation d'entrée
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="h-screen w-full flex items-center justify-center bg-[var(--bleu-marine)]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-white text-4xl font-montserrat font-bold"
          >
            <span className="text-[var(--violet)]">C</span>
            <span className="text-white">B</span>
          </motion.div>
        </div>
      ) : (
        <>
          <Header />
          
          <Element name="home">
            <Hero />
          </Element>
          
          <Element name="about">
            <About />
          </Element>
          
          <Element name="skills">
            <Skills />
          </Element>
          
          <Element name="experience">
            <Experience />
          </Element>
          
          <Element name="projects">
            <Projects />
          </Element>
          
          <Element name="education">
            <Education />
          </Element>
          
          <Element name="contact">
            <Contact />
          </Element>
          
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
