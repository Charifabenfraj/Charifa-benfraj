import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-scroll';
import photo from '../photos/charifa_photo.jpg';
import TypedReact from './TypedReact';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a2a] via-[#1a1a4a] to-[#2d1b69] relative overflow-hidden flex items-center">
      {/* Ciel étoilé animé avec étoiles filantes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Étoiles fixes */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
            />
          ))}
        </div>

        {/* Étoiles filantes */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_10px_2px_white] animate-shooting-star"
            style={{
              top: `${Math.random() * 40}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
            }}
          />
        ))}

        {/* Grandes étoiles scintillantes */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-yellow-200 rounded-full animate-pulse-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}

        {/* Couche de gradient pour la profondeur */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-indigo-900/20" />
        
        {/* Effet de nébuleuse */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 sm:pt-28 md:pt-24 lg:pt-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          
          {/* Photo de profil */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center order-1 lg:order-1"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[var(--violet)] shadow-2xl relative z-10">
                <img 
                  src={photo} 
                  alt="Photo de Charifa Ben Fraj" 
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              {/* Effet de lueur amélioré */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--violet)]/30 to-[var(--bleu-marine)]/30 blur-xl -z-10 scale-110 animate-glow" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-blue-400/20 blur-lg -z-20 scale-125 animate-glow-slow" />
            </div>
          </motion.div>

          {/* Texte de présentation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-2"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-[0_2px_10px_rgba(139,92,246,0.3)]"
            >
              Charifa <span className="text-[var(--violet)] bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">BEN FRAJ</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-[var(--violet-clair)] min-h-[60px] flex items-center justify-center lg:justify-start drop-shadow-[0_2px_8px_rgba(139,92,246,0.2)]"
            >
              <TypedReact
                strings={[
                  'Développeuse Web Full Stack',
                  'Développeuse Mobile',
                  'Étudiante en Ingénierie',
                  'Passionnée par la Tech',
                ]}
                typeSpeed={60}
                backSpeed={40}
                loop
              />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg sm:text-xl mb-8 text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            >
              Étudiante en première année du cycle d'ingénieur à ESPRIT, passionnée par le développement
              web et mobile. Sérieuse, motivée et curieuse, je cherche à renforcer mes compétences
              techniques à travers des projets concrets et innovants.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
             
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Flèche de défilement */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-20"
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer flex justify-center"
        >
          <div className="bg-gradient-to-r from-[var(--violet)]/40 to-purple-600/40 hover:from-[var(--violet)]/60 hover:to-purple-600/60 rounded-full p-3 transition-all duration-300 backdrop-blur-sm">
            <FaArrowDown className="h-6 w-6 animate-bounce" />
          </div>
        </Link>
      </motion.div>

      {/* Styles CSS pour les animations */}
      <style >{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes shooting-star {
          0% {
            transform: translateX(0) translateY(0) rotate(45deg);
            opacity: 1;
          }
          100% {
            transform: translateX(-300px) translateY(300px) rotate(45deg);
            opacity: 0;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateX(0px) scale(1); }
          50% { transform: translateX(20px) scale(1.1); }
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        
        @keyframes glow-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        .animate-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }
        
        .animate-shooting-star {
          animation: shooting-star 3s ease-in infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .animate-glow-slow {
          animation: glow-slow 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;