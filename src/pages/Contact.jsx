import React, { useState } from "react";
import { motion } from "framer-motion";
import GradientOutlineButton from "./GradientOutlineButton";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_parc3eb", // Service ID
        "template_129gio6", // Template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        "N45Ktmx8wtYtliECi" // Public Key
      )
      .then(() => {
        alert("✅ Thanks for reaching out! I'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("❌ Oops! Something went wrong. Please try again.");
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen px-6 py-20 bg-white dark:bg-black text-black dark:text-white">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-3">
          Contact Me
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-center mb-12">
          Have a question, idea, or just want to say hello? Fill out the form
          below and I’ll get in touch!
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold mb-6">Connect with me :</h2>
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <a
                href="https://www.linkedin.com/in/rishu-gupta-3b6b4b179"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full p-4 border rounded-lg shadow-md hover:bg-purple-100 transition"
              >
                <div className="text-lg font-semibold text-blue-700">
                  Rishu Gupta
                </div>
                <div className="text-sm text-gray-600">
                  Full-Stack Developer | LinkedIn Profile
                </div>
              </a>

              <a
                href="https://www.instagram.com/rishu.blend"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full p-4 border rounded-lg shadow-md hover:bg-purple-100 transition"
              >
                <div className="text-lg font-semibold text-blue-700">
                  Rishu Gupta
                </div>
                <div className="text-sm text-gray-600">
                  Blender Profile | Instagram
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 text-sm">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Message</label>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
                required
              ></textarea>
            </div>

            {/* Gradient Button Centered */}
            <div className="flex justify-center mt-8">
              <GradientOutlineButton
                label={loading ? "Sending..." : "Send Message"}
                type="submit"
                disabled={loading}
              />
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
