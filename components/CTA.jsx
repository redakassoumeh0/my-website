"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function CTA() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      background: {
        color: {
          value: "transparent", // typo fixed here
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: false, mode: "push" },
          onHover: { enable: false, mode: "repulse" },
        },
      },
      particles: {
        color: {
          value: "#f00",
        },
        links: {
          color: "#f00",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden bg-background">
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="absolute inset-0 z-0"
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Hi, I&apos;m <span className="text-primary">Reda</span>.
        </h1>

        <p className="text-lg md:text-2xl text-foreground">
          <Typewriter
            words={[
              "Welcome to my portfolio",
              "Full-Stack Developer",
              "AI Builder",
              "Focused Dreamer",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        <p className="text-md md:text-xl max-w-2xl mx-auto text-foreground">
          I build modern web applications with cutting-edge technologies.
          Let&apos;s create something amazing together!
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="#contact"
            className="px-6 py-3 bg-primary text-white rounded-2xl shadow hover:bg-primary/80 transition"
          >
            Contact Me
          </Link>
        </div>

        <div className="mt-8 animate-bounce text-foreground text-xl">↓</div>
      </motion.div>
    </section>
  );
}
