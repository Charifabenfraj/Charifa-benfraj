import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education: React.FC = () => {
  const educations = [
    {
      degree: 'Cycle d\'ingénieur en informatique',
      institution: 'ESPRIT',
      location: 'Tunis',
      period: 'Depuis septembre 2024',
      description: 'Formation d\'ingénieur en informatique avec spécialisation en développement logiciel.'
    },
    {
      degree: 'Licence en technologie de l\'informatique',
      institution: 'Institut Supérieur des Études Technologiques Kélibia',
      location: 'Kélibia',
      period: 'De septembre 2021 à juin 2024',
      description: 'Formation en informatique appliquée avec focus sur le développement web et mobile.'
    },
    {
      degree: 'Baccalauréat science expérimentale',
      institution: 'Lycée Mohamed Boudhina',
      location: 'Hammamet',
      period: 'Juin 2021',
      description: 'Diplôme de fin d\'études secondaires avec spécialisation en sciences expérimentales.'
    }
  ];

  return (
    <section className="light-section py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Formation</h2>
        </motion.div>

        <div className="mt-12 relative">
          {/* Ligne horizontale pour la timeline */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-[var(--violet-clair)] rounded-full"></div>

          <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0">
            {educations.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative md:w-[30%]"
              >
                {/* Point sur la timeline (visible uniquement en desktop) */}
                <div className="hidden md:flex absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[var(--violet)] border-4 border-[var(--gris-clair)] z-10 items-center justify-center">
                  <FaGraduationCap className="text-white text-sm" />
                </div>

                {/* Icône pour mobile */}
                <div className="md:hidden flex items-center mb-2">
                  <div className="bg-[var(--violet)] p-2 rounded-full text-white mr-2">
                    <FaGraduationCap className="h-4 w-4" />
                  </div>
                  <span className="text-[var(--violet)] font-semibold">{edu.period}</span>
                </div>

                {/* Contenu */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  {/* Période (visible uniquement en desktop) */}
                  <div className="hidden md:block text-[var(--violet)] font-semibold mb-4 text-center">
                    {edu.period}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <h4 className="text-[var(--bleu-marine)] font-semibold mb-3">
                    {edu.institution}, {edu.location}
                  </h4>
                  <p className="text-gray-700">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
