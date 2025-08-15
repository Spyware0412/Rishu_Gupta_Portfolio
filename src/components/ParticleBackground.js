import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from "../context/ThemeContext";

export default function ParticleBackground() {
  const { isDark } = useTheme();

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      className="absolute top-0 left-0 w-full h-full z-0"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: isDark ? "#000000" : "#ffffff" },
        particles: {
          number: { value: 60 },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
          links: {
            enable: true,
            color: isDark ? "#ffffff" : "#000000",
            distance: 150,
          },
        },
      }}
    />
  );
}
