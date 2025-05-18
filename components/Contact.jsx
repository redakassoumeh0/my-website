"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import {
  FaWhatsapp,
  FaTelegram,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  const contactLinks = [
    {
      icon: FaGithub,
      label: "Github",
      href: "https://github.com/redakassoumeh0",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/963992962532",
    },
    {
      icon: FaTelegram,
      label: "Telegram",
      href: "https://t.me/redakassoumeh0",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/redakassoumeh/",
    },

    {
      icon: FaEnvelope,
      label: "Email",
      href: "mailto:redakassoumeh1@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen px-4 py-20 bg-background text-foreground flex flex-col items-center justify-center"
    >
      {/* Page Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-primary mb-12 text-center"
      >
        Contact Me
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-12 w-full max-w-6xl">
        {/* Contact Form */}
        <div className="flex-1">
          <ContactForm />
        </div>

        {/* Contact Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 space-y-6 bg-card p-8 rounded-2xl border border-border shadow"
        >
          <h3 className="text-2xl font-semibold text-primary mb-6">
            Contact Info
          </h3>

          <ul className="space-y-4">
            {contactLinks.map((link, index) => (
              <li key={index} className="flex items-center gap-4">
                <link.icon className="w-6 h-6 text-primary" />
                <Link
                  href={link.href}
                  target="_blank"
                  className="hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
