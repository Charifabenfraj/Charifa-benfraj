import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane, FaPhone } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:charifabenfraj20@gmail.com?subject=Contact from Portfolio&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="dark-section py-20 bg-gradient-to-b from-[var(--bleu-marine)] to-[var(--violet)]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="section-title text-white">Contactez-moi</h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Vous pouvez me contacter directement par email, téléphone ou via LinkedIn.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Section des coordonnées à gauche */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Mes coordonnées</h3>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
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

          {/* Section formulaire à droite */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Envoyez-moi un message</h3>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-white text-[var(--violet)] font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <span>Envoyer</span>
                <FaPaperPlane />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;