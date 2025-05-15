"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="min-h-screen px-4 py-20 bg-background text-foreground flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image
            src="/images/about-illustration.png"
            alt="About Reda"
            width={400}
            height={400}
            className="rounded-xl shadow-xl"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary">
            About Me
          </h2>

          <p className="text-lg">
            I am a passionate full-stack developer with a strong foundation in
            web development and a keen eye for creating elegant, efficient, and
            user-friendly applications.
          </p>

          <p className="text-md text-muted-foreground">
            With expertise in both front-end and back-end technologies, I strive
            to build robust and scalable solutions that make a real impact.
          </p>

          {/* Personal Values */}
          <div className="space-y-2 text-muted-foreground">
            <p>• Dedicated to writing clean, maintainable code</p>
            <p>• Committed to continuous learning and improvement</p>
            <p>• Focused on delivering exceptional user experiences</p>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "Node.js",
              "Express",
              "MongoDB",
              "React",
              "Next.js",
              "Tailwind",
              "PHP",
              "MySQL",
              "Laravel",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-accent  px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Download CV Button */}
          <div className="pt-6">
            <a
              href="/Reda Kassoumeh CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-primary text-primary-foreground rounded-lg shadow hover:opacity-90 transition"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
