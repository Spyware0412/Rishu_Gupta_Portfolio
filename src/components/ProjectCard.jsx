import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ title, description, link, image, video }) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {video ? (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-48 object-cover border-b border-gray-700"
        />
      ) : image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover border-b border-gray-700"
        />
      ) : null}

      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-purple-500 hover:underline"
          >
            View Project →
          </a>
        )}
      </div>
    </motion.div>
  );
}
