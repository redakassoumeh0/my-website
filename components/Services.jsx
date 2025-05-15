// components/Services.jsx
"use client";
import { motion } from "framer-motion";
import { Code, Server, Zap, Brain } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code size={32} />,
      title: "Web App Development",
      desc: "Building responsive and scalable web apps using React, Next.js, and Laravel.",
    },
    {
      icon: <Server size={32} />,
      title: "API Design & Integration",
      desc: "Designing secure and performant REST APIs with Node.js and MongoDB.",
    },
    {
      icon: <Zap size={32} />,
      title: "Automation Tools",
      desc: "Creating tools like Chrome extensions and WhatsApp automation for productivity.",
    },
    {
      icon: <Brain size={32} />,
      title: "AI-Enhanced Prototypes",
      desc: "Integrating AI to build intelligent interfaces or backend tools.",
    },
  ];

  return (
    <section className="px-6 py-20 bg-background text-foreground text-center">
      <h2 className="text-3xl md:text-5xl  font-bold text-primary mb-12">
        What I Do
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="p-6 bg-card rounded-xl shadow-md text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4 text-primary">
              {service.icon}
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
            <p className="text-muted-foreground">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
