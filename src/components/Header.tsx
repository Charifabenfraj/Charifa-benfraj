import { Briefcase, Code, FolderOpen, GraduationCap, Home, Mail, Menu, User, X, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from '../hooks/useTranslation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { language, toggleLanguage, t } = useTranslation();

  const navLinks = [
    { to: 'home', label: t('home'), icon: Home },
    { to: 'about', label: t('about'), icon: User },
    { to: 'skills', label: t('skills'), icon: Code },
    { to: 'experience', label: t('experience'), icon: Briefcase },
    { to: 'projects', label: t('projects'), icon: FolderOpen },
    { to: 'education', label: t('education'), icon: GraduationCap },
    { to: 'contact', label: t('contact'), icon: Mail },
  ];

  const handleSetActive = (to: string) => {
    setActiveSection(to);
  };

  return (
    <>
      {/* Fond d'étoiles animé */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Header flottant */}
      <header
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled ? 'w-[95%] max-w-5xl' : 'w-[90%] max-w-6xl'
        }`}
      >
        <div
          className={`bg-gradient-to-r from-[var(--bleu-marine)] via-[var(--violet)] to-[var(--bleu-marine)] rounded-full border border-[var(--violet)]/50 shadow-2xl transition-all duration-500 ${
            isScrolled ? 'py-3 shadow-[var(--violet)]/30' : 'py-4 shadow-[var(--violet)]/40'
          }`}
          style={{
            boxShadow: '0 8px 32px 0 rgba(139, 92, 246, 0.2), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="px-6 flex justify-between items-center">
            {/* Logo avec effet néon */}
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={() => handleSetActive('home')}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-purple-600/50 blur-xl rounded-full group-hover:bg-purple-500/70 transition-all duration-300"></div>
              <div className="relative text-2xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                  C
                </span>
                <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                  B
                </span>
              </div>
            </Link>

            {/* Navigation desktop avec icônes */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={() => handleSetActive(link.to)}
                    className={`group relative px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                      activeSection === link.to
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    style={{
                      animation: `fadeInDown 0.5s ease-out ${index * 0.1}s both`
                    }}
                  >
                    {/* Effet de fond au survol */}
                    <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      activeSection === link.to
                        ? 'bg-[var(--violet)] scale-100'
                        : 'bg-[var(--violet)]/0 group-hover:bg-[var(--violet)]/20 scale-95 group-hover:scale-100'
                    }`}></div>
                    
                    {/* Icône */}
                    <Icon className="w-4 h-4 relative z-10" />
                    
                    {/* Label */}
                    <span className="relative z-10 text-sm font-medium">
                      {link.label}
                    </span>

                    {/* Indicateur actif */}
                    {activeSection === link.to && (
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Bouton menu mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative group p-2"
            >
              <div className="absolute inset-0 bg-purple-600/30 blur-lg rounded-full group-hover:bg-purple-500/50 transition-all duration-300"></div>
              <div className="relative text-white">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </div>
            </button>
          </div>
        </div>

        {/* Menu mobile flottant */}
        {isMenuOpen && (
          <div
            className="lg:hidden mt-4 bg-[var(--bleu-marine)] rounded-3xl border border-[var(--violet)]/30 shadow-xl overflow-hidden"
            style={{
              animation: 'slideDown 0.4s ease-out'
            }}
          >
            <div className="p-4 space-y-2">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={() => handleSetActive(link.to)}
                    onClick={() => setIsMenuOpen(false)}
                    className={`w-full group relative px-4 py-3 rounded-2xl transition-all duration-300 flex items-center gap-3 cursor-pointer ${
                      activeSection === link.to
                        ? 'text-white bg-[var(--violet)]'
                        : 'text-gray-300 hover:text-white hover:bg-[var(--violet)]/20'
                    }`}
                    style={{
                      animation: `fadeInLeft 0.3s ease-out ${index * 0.05}s both`
                    }}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{link.label}</span>
                    
                    {activeSection === link.to && (
                      <div className="ml-auto w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Styles CSS */}
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Étoiles animées */
        .stars, .stars2, .stars3 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
        }

        .stars {
          background-image: 
            radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 60px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 50px 50px, #ddd, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 130px 80px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 10px, #eee, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: twinkle 5s ease-in-out infinite;
          opacity: 0.4;
        }

        .stars2 {
          background-image: 
            radial-gradient(1px 1px at 100px 120px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 150px 160px, #ddd, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 180px 50px, #eee, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 300px 300px;
          animation: twinkle 7s ease-in-out infinite;
          opacity: 0.3;
        }

        .stars3 {
          background-image: 
            radial-gradient(1px 1px at 200px 150px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 250px 200px, #ddd, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 400px 400px;
          animation: twinkle 10s ease-in-out infinite;
          opacity: 0.2;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </>
  );
};

export default Header;