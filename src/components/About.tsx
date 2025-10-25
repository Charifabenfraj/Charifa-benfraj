import { motion } from 'framer-motion';
import React from 'react';
import { FaLanguage, FaUser } from 'react-icons/fa';

const About: React.FC = () => {
  const languages = [
    { name: 'Français', level: 80 },
    { name: 'Arabe', level: 100 },
    { name: 'Anglais', level: 65 }
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
          <h2 className="section-title">À propos de moi</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          {/* Informations personnelles */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-[var(--violet)] p-3 rounded-full text-white">
                <FaUser className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Qui suis-je</h3>
                <p className="text-gray-800 text-justify sm:text-center lg:text-justify max-w-2xl mx-auto">
                  Étudiante en deuxième année du cycle d'ingénieur à ESPRIT, spécialisée en Business Intelligence, passionnée par le développement web et mobile. Sérieuse, motivée et curieuse, je cherche à renforcer mes compétences techniques à travers des projets concrets, notamment dans les domaines du développement full stack et de l'analyse de données.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-gray-50/90 dark:bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="font-semibold mb-1 dark:text-gray-200">Nom</h4>
                <p className="dark:text-gray-300">Charifa BEN FRAJ</p>
              </div>
              <div className="bg-gray-50/90 dark:bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="font-semibold mb-1">Email</h4>
                <p>charifabenfraj20@gmail.com</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold mb-1">Localisation</h4>
                <p>Nabeul, Hammamet</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold mb-1">Téléphone</h4>
                <p>27 998 555</p>
              </div>
            </div>
          </motion.div>

          {/* Langues */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-[var(--violet)] p-3 rounded-full text-white">
                <FaLanguage className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Langues</h3>
                <p className="text-gray-700">
                  Je maîtrise plusieurs langues qui me permettent de communiquer efficacement dans différents contextes professionnels.
                </p>
              </div>
            </div>

            <div className="space-y-4 mt-6">
              {languages.map((language, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{language.name}</span>
                    <span>{language.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${language.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                      viewport={{ once: true }}
                      className="h-2.5 rounded-full bg-[var(--violet)]"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
