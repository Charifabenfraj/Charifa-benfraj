import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";

const ParticlesBackground: React.FC = () => {
  const customInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  const particlesOptions = {
    background: {
      color: { value: "transparent" },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: false },
        resize: true,
      },
      modes: {
        push: { quantity: 2 },
      },
    },
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
      // Utilisation des "twinkle" pour un effet scintillant
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

  return (
    <Particles
      id="tsparticles"
      init={customInit}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticlesBackground;
