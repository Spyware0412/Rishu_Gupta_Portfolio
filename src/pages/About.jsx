import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import SkillCircle from "../components/SkillCircle";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white">
      <div className="w-full max-w-5xl px-6 py-20">
        {/* About Me */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            About <span className="text-gray-500"></span>
          </h1>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-8">Personal Infos</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 text-left text-gray-700 dark:text-gray-200">
              <p><span className="font-semibold">First Name :</span> Rishu</p>
              <p><span className="font-semibold">Last Name :</span> Gupta</p>
              <p><span className="font-semibold">Age :</span> 22 Years</p>
              <p><span className="font-semibold">Nationality :</span> Indian</p>
              <p><span className="font-semibold">Freelance :</span> Available</p>
              <p><span className="font-semibold">Address :</span> Simarahi, Supaul, Bihar</p>
              <p><span className="font-semibold">Phone :</span> +91 7903253649</p>
              <p><span className="font-semibold">Email :</span> rishuguptark@gmail.com</p>
              <p><span className="font-semibold">Hobbies :</span> Coding, Animation, Travelling</p>
              <p><span className="font-semibold">Languages :</span> English, Hindi</p>
            </div>

            <div className="max-w-3xl mx-auto mt-12 border-t border-gray-300/40 dark:border-gray-700/60" />
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          className="max-w-4xl mx-auto text-center mt-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6" data-aos="fade-up">My Skills</h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
            <SkillCircle data-aos="fade-left" label="C++" value={80} color="#00599C" delay={0} />
            <SkillCircle data-aos="fade-left" label="Python" value={75} color="#3776AB" delay={200} />
            <SkillCircle data-aos="fade-left" label="Qt" value={50} color="#41CD52" delay={400} />
            <SkillCircle data-aos="fade-left" label="Java" value={70} color="#f89820" delay={600} />
            <SkillCircle data-aos="fade-left" label="C" value={80} color="#A8B9CC" delay={800} />
            <SkillCircle data-aos="fade-left" label="Blender" value={85} color="#F5792A" delay={1000} />
          </div>

          <div className="max-w-3xl mx-auto mt-14 border-t border-gray-300/40 dark:border-gray-700/60" />
        </motion.div>

        {/* Education */}
        <div className="max-w-4xl mx-auto mt-14">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-10" data-aos="fade-up">
            Education
          </h1>

          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 items-start" data-aos="fade-up">
              <span className="inline-block self-start text-xs font-semibold px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                2026
              </span>
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Bachelor Degree – <span className="text-purple-500">Siliguri Institute of Technology</span>
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Bachelor of Technology in Computer Science Engineering | GPA: 7.0
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 items-start" data-aos="fade-up" data-aos-delay="120">
              <span className="inline-block self-start text-xs font-semibold px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                2022
              </span>
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Higher Secondary – <span className="text-purple-500">Bihar Board of Open Schooling and Examination</span>
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Percentage: 70.4%</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 items-start" data-aos="fade-up" data-aos-delay="240">
              <span className="inline-block self-start text-xs font-semibold px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"></span>
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Secondary School Board – <span className="text-purple-500">Central Board of Secondary Education</span>
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mt-1">CGPA: 10.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
