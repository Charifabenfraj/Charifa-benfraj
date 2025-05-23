import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const customInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  const particlesOptions = {
    background: {
      color: { value: "transparent" },
    },
    fullScreen: {
      enable: false,
      zIndex: -1,
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: "#FFFFFF",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.8,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.2,
          sync: false,
        },
      },
      size: {
        value: 1.5,
        random: {
          enable: true,
          minimumValue: 0.5,
        },
      },
      move: {
        enable: true,
        speed: 0.2,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "bounce",
        },
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.05,
          opacity: 1,
        },
      },
    },
    detectRetina: true,
  };

  const navLinks = [
    { to: 'home', label: 'Accueil' },
    { to: 'about', label: 'À propos' },
    { to: 'skills', label: 'Compétences' },
    { to: 'experience', label: 'Expériences' },
    { to: 'projects', label: 'Projets' },
    { to: 'education', label: 'Formation' },
    { to: 'contact', label: 'Contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Fond d'étoiles */}
      <div className="fixed top-0 left-0 w-full h-50 z-50 pointer-events-none">
        <Particles
          id="tsparticles-header"
          init={customInit}
          options={particlesOptions}
        />
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[var(--bleu-marine)] shadow-lg py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            <div className="text-2xl font-bold text-white">
              <span className="text-[var(--violet)]">C</span>
              <span>B</span>
            </div>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-white hover:text-[var(--violet-clair)] transition-colors duration-300 cursor-pointer"
                activeClass="text-[var(--violet)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Menu mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menu mobile déroulant */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[var(--bleu-marine)] shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-white hover:text-[var(--violet-clair)] transition-colors duration-300 cursor-pointer"
                  activeClass="text-[var(--violet)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
};

export default Header;