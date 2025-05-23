import React from 'react';
import { motion } from 'framer-motion';
import {Typed} from 'react-typed';
import { Link } from 'react-scroll';
import { FaArrowDown } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';
import TypedReact from './TypedReact';
import photo from '../photos/photos1.jpg';

<img 
  src={photo} 
  alt="Photo de Charifaa" 
  className="w-full h-full object-cover rounded-full animate-zoomOut"
/>


const Hero: React.FC = () => {
  return (
    <div className="h-screen bg-[var(--bleu-marine)] relative overflow-hidden">
      {/* Effet de particules en arrière-plan */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-20 items-center"> {/* Augmentation de l'espace avec gap-12 */}

          {/* Photo de profil */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end"
          >
<div className="w-60 h-65 md:w-80 md:h-82 rounded-full overflow-hidden border-4 border-[var(--violet)] shadow-xl">
  <img 
    src={photo} 
    alt="Photo de Charifaa" 
    className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-90"
  />
</div>


          </motion.div>

          {/* Texte de présentation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Charifa BEN FRAJ
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[var(--violet)]">
<TypedReact
    strings={[
      'Développeuse Web',
      'Développeuse Mobile',
      'Étudiante en Ingénierie',
    ]}
    typeSpeed={80}
    backSpeed={50}
    loop
  />
</h2>

            <p className="text-lg mb-8">
              Étudiante en première année du cycle d'ingénieur à ESPRIT, passionnée par le développement
              web et mobile. Sérieuse, motivée et curieuse, je cherche à renforcer mes compétences
              techniques à travers des projets concrets.
            </p>
            <div className="flex space-x-4">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button className="btn-primary">Me contacter</button>
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button className="border-2 border-[var(--violet)] text-white px-6 py-2 rounded-md hover:bg-[var(--violet)] transition-all duration-300">
                  Voir mes projets
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Flèche de défilement */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
        >
          <FaArrowDown className="h-6 w-6 animate-bounce" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;
