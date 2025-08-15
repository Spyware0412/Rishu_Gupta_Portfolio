import React from "react";
import { useNavigate } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useTheme } from "../context/ThemeContext";
import ParticleBackground from "../components/ParticleBackground";
import profileImg from "../assets/rishu-profile.jpg"; // Make sure this image exists

export default function Home() {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-white dark:bg-black text-black dark:text-white">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-6 py-10">
        {/* Profile Image */}
        <motion.img
          src={profileImg}
          alt="Rishu"
          className="w-72 h-82 md:h-96 md:h-96 object-cover rounded-2xl shadow-lg mb-10 md:mb-0 md:mr-12"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Intro Text */}
        <motion.div
          className="text-center md:text-left max-w-xl"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 ">
            I'm Rishu Gupta.
          </h1>
          <h2 className="text-xl md:text-2xl text-purple-400 mb-6">
            <Typewriter
              words={[
                "Full-Stack Developer",
                "Competitive Programmer",
                "Blender Artist",
                "MERN Stack Dev",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1200}
            />
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            From logic to reality — transforming complex challenges into elegant solutions, one problem at a time..
          </p>
           <div className="flex justify- mt-10">
      <button
      onClick={() => navigate("/about")}
      className=" relative inline-flex items-center 
        px-6 py-3 
        border-2 border-black dark:border-white 
        text-black dark:text-white 
        font-semibold rounded-full 
        transition-all duration-300 ease-in-out
        bg-transparent 
        hover:bg-black hover:text-white 
        dark:hover:bg-white dark:hover:text-black
        group"
    >
      {/* Button Text */}
      <span className="z-10">Check My Profile</span>

    </button>
    </div>
        </motion.div>
        
      </div>
      <div>
      </div>
    </div>
    
  );
}
