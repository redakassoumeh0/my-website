"use client";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiLaravel,
  SiMongodb,
  SiNodedotjs,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Laravel", icon: SiLaravel },
];

export default function Skills() {
  return (
    <section className="px-4 py-5 bg-background text-foreground flex flex-col items-center justify-center">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-primary mb-12"
      >
        My Skills
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col items-center justify-center 
            bg-card text-foreground p-6 rounded-xl 
            shadow-lg hover:shadow-2xl 
            hover:border-primary border border-border 
            transition transform hover:scale-105 cursor-pointer"
            >
              {/* Technology Icon */}
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <Icon className="w-12 h-12 text-primary" />
              </div>

              {/* Skill Name */}
              <p className="text-md font-semibold select-none">{skill.name}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
