import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUp, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bleu-marine)] text-white py-12">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm">&copy; {currentYear} All rights reserved.</p>
        <div className="flex flex-col items-center">
          {/* Flèche vers le haut */}
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-[var(--violet)] p-3 rounded-full mb-8 hover:bg-[var(--violet-clair)] transition-colors duration-300"
            >
              <FaArrowUp className="h-5 w-5" />
            </motion.div>
          </Link>

          {/* Logo */}
          <div className="text-3xl font-bold mb-6">
            <span className="text-[var(--violet)]">C</span>
            <span>B</span>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-[var(--violet-clair)] transition-colors duration-300 cursor-pointer"
            >
              Accueil
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-[var(--violet-clair)] transition-colors duration-300 cursor-pointer"
            >
              À propos
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-[var(--violet-clair)] transition-colors duration-300 cursor-pointer"
            >
              Compétences
            </Link>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-[var(--violet-clair)] transition-colors duration-300 cursor-pointer"
            >
              Expériences
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-[var(--violet-clair)] transition-colors duration-300 cursor-pointer"
            >
              Projets
            </Link>
            <Link
              to="education"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-[var(--violet-clair)] transition-colors duration-300 cursor-pointer"
            >
              Formation
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-[var(--violet-clair)] transition-colors duration-300 cursor-pointer"
            >
              Contact
            </Link>
          </div>

          {/* Réseaux sociaux */}
<div className="flex space-x-4 mb-8">
  <a
    href="https://linkedin.com/in/charifa-ben-fraj"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[var(--bleu-marine-clair)] p-3 rounded-full hover:bg-[var(--violet)] transition-colors duration-300"
  >
    <FaLinkedin className="h-5 w-5" />
  </a>
  <a
    href="https://github.com/votre-username"  // Remplacez par votre lien GitHub
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[var(--bleu-marine-clair)] p-3 rounded-full hover:bg-[var(--violet)] transition-colors duration-300"
  >
    <FaGithub className="h-5 w-5" />  {/* Icône GitHub */}
  </a>
  <a
    href="mailto:charifabenfraj20@gmail.com"
    className="bg-[var(--bleu-marine-clair)] p-3 rounded-full hover:bg-[var(--violet)] transition-colors duration-300"
  >
    <FaEnvelope className="h-5 w-5" />
  </a>
</div>

{/* Copyright */}
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
