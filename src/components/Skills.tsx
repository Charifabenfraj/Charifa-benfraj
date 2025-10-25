import { motion } from 'framer-motion';
import React from 'react';
import { FaCode, FaDatabase } from 'react-icons/fa';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frameworks',
      icon: <FaCode className="h-6 w-6" />,
      skills: [
        { name: 'React.js', level: 80 },
        { name: 'Angular', level: 60 },
        { name: 'Symfony', level: 70 },
        { name: 'Flutter', level: 85 },
        { name: 'Android', level: 65 }
      ]
    },
    {
      title: 'Langages de programmation',
      icon: <FaCode className="h-6 w-6" />,
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'PHP', level: 85 },
        { name: 'Java', level: 80 }
      ]
    },
    {
      title: 'Bases de données',
      icon: <FaDatabase className="h-6 w-6" />,
      skills: [
        { name: 'SQL', level: 85 },
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'Oracle', level: 70 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="bg-white py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Mes compétences</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 space-y-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-[var(--violet)] p-3 rounded-full text-white">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="h-2.5 rounded-full bg-gradient-to-r from-[var(--bleu-marine)] to-[var(--violet)]"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
