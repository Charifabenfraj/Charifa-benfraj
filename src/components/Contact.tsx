import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin ,FaGithub} from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="dark-section py-20 bg-gradient-to-b from-[var(--bleu-marine)] to-[var(--violet)]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16" // Retiré text-center pour aligner à gauche
        >
          <h2 className="section-title text-white">Contactez-moi</h2>
          <p className="text-gray-300 mt-4 max-w-2xl">
            Vous pouvez me contacter directement par email, téléphone ou via LinkedIn.
          </p>
        </motion.div>

        {/* Section des coordonnées prenant toute la largeur */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg w-full" // w-full pour prendre toute la largeur
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Mes coordonnées</h3>

          <div className="space-y-6"> {/* Conteneur principal avec espacement vertical */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Grille pour 2 colonnes sur desktop */}
    
    {/* Email */}
    <div className="flex items-start space-x-4">
      <div className="bg-white p-3 rounded-full text-[var(--violet)] flex-shrink-0">
        <FaEnvelope className="h-5 w-5" />
      </div>
      <div>
        <h4 className="text-white font-semibold">Email</h4>
        <a href="mailto:charifabenfraj20@gmail.com" className="text-gray-300 hover:text-white transition-colors">
          charifabenfraj20@gmail.com
        </a>
      </div>
    </div>
    
    {/* Téléphone */}
    <div className="flex items-start space-x-4">
      <div className="bg-white p-3 rounded-full text-[var(--violet)] flex-shrink-0">
        <FaPhone className="h-5 w-5" />
      </div>
      <div>
        <h4 className="text-white font-semibold">Téléphone</h4>
        <a href="tel:+21627998555" className="text-gray-300 hover:text-white transition-colors">
          +216 27 998 555
        </a>
      </div>
    </div>
    
    {/* Localisation */}
    <div className="flex items-start space-x-4">
      <div className="bg-white p-3 rounded-full text-[var(--violet)] flex-shrink-0">
        <FaMapMarkerAlt className="h-5 w-5" />
      </div>
      <div>
        <h4 className="text-white font-semibold">Localisation</h4>
        <p className="text-gray-300">Nabeul, Hammamet, Tunisie</p>
      </div>
    </div>
     {/* GitHub */}
    <div className="flex items-start space-x-4">
      <div className="bg-white p-3 rounded-full text-[var(--violet)] flex-shrink-0">
        <FaGithub className="h-5 w-5" />
      </div>
      <div>
        <h4 className="text-white font-semibold">GitHub</h4>
        <a 
          href="https://github.com/Charifabenfraj"
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
        >
          charifa ben fraj
        
        </a>
      </div>
    </div>
    
    {/* LinkedIn */}
    <div className="flex items-start space-x-4">
      <div className="bg-white p-3 rounded-full text-[var(--violet)] flex-shrink-0">
        <FaLinkedin className="h-5 w-5" />
      </div>
      <div>
        <h4 className="text-white font-semibold">LinkedIn</h4>
        <a 
          href="https://www.linkedin.com/in/charifa-ben-fraj-919074233/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
        >
          charifa-ben-fraj
        </a>
      </div>
    </div>
    
   
    
  </div>
</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;