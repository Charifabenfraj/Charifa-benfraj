import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Application de réservation de transport',
      description: 'Développement en équipe d\'une application web de réservation de trajets en ligne (transport privé et public), avec gestion des utilisateurs, des trajets et des réservations.',
      technologies: ['Java', 'Symfony'],
      image: 'transport-app.jpg', // Placeholder
      /*links: {
        demo: '#',
        code: '#'
      }*/
    },
    {
      title: 'Plateforme de gestion de salle de sport',
      description: 'Création d\'un site web permettant aux clients de consulter les cours disponibles, réserver des séances, et prendre des rendez-vous avec des coachs privés.',
      technologies: ['PHP', 'MySQL'],
      image: 'gym-app.jpg', // Placeholder
      /*links: {
        demo: '#',
        code: '#'
      }*/
    }
  ];

  // Ajouter des projets fictifs pour remplir la grille
  const additionalProjects = [
    {
      title: 'Application de gestion de tâches',
      description: 'Application permettant de créer, organiser et suivre des tâches avec des fonctionnalités de rappel et de catégorisation.',
      technologies: ['React', 'Firebase'],
      image: 'task-app.jpg', // Placeholder
      /*links: {
        demo: '#',
        code: '#'
      }*/
    },
    {
      title: 'Portfolio personnel',
      description: 'Site web portfolio présentant mes compétences, expériences et projets dans un design moderne et interactif.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      image: 'portfolio.jpg', // Placeholder
     /* links: {
        demo: '#',
        code: '#'
      }*/
    }
  ];

  const allProjects = [...projects, ...additionalProjects];

  return (
    <section className="bg-white py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Mes projets</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {allProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[var(--gris-clair)] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image du projet */}
              <div className="h-48 bg-gradient-to-r from-[var(--bleu-marine)] to-[var(--violet)] relative">
                <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold opacity-80">
                  <FaCode />
                </div>
              </div>

              {/* Contenu du projet */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-[var(--violet)] text-white text-xs font-semibold py-1 px-2 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Liens 
                <div className="flex space-x-3">
                  <a 
                    href={project.links.demo} 
                    className="text-[var(--violet)] hover:text-[var(--violet-clair)] transition-colors duration-300 flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="mr-1" /> Demo
                  </a>
                  <a 
                    href={project.links.code} 
                    className="text-[var(--violet)] hover:text-[var(--violet-clair)] transition-colors duration-300 flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="mr-1" /> Code
                  </a>
                </div>*/}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
