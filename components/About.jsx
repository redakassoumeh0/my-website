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
            I’m Reda Kassoumeh, a full-stack developer with over{" "}
            <strong>3 years</strong> of professional experience in developing
            and deploying complete web systems using JavaScript, Node.js, React,
            and Laravel. I specialize in building clean, scalable, and efficient
            applications tailored to real business needs.
          </p>

          <p className="text-md text-muted-foreground">
            At ALABUO Steel, I led the development of a full internal management
            system from scratch, covering suppliers, employees, banking, and
            classification modules—using Next.js, MongoDB, Bootstrap, and
            CapRover for deployment. Previously, I was the lead developer at
            Speed Marketing, where I built tools like Speed Whats and Speed
            Whats Plus for automating WhatsApp messaging using Chrome
            extensions, PHP, and Node.js.
          </p>

          <div className="space-y-2 text-muted-foreground">
            <p>
              • Strong ownership of the full development lifecycle:
              architecture, coding, testing, deployment
            </p>
            <p>
              • Focused on performance, usability, and multilingual support
              (Arabic & English)
            </p>
            <p>
              • Continuously growing through advanced tech stacks and real-world
              challenges
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "Node.js",
              "Express.js",
              "React",
              "Next.js",
              "MongoDB",
              "MySQL",
              "Laravel",
              "Tailwind",
              "CapRover",
              "Git",
              "Postman",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-accent px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

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
  