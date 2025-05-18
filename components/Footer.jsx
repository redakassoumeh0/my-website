"use client";

import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { SiMailboxdotorg, SiTelegram, SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const socialLinks = [
    {
      icon: <SiWhatsapp className="w-5 h-5" />,
      href: "https://wa.me/963992962532",
      label: "Whatsapp",
    },
    {
      icon: <SiTelegram className="w-5 h-5" />,
      href: "https://t.me/redakassoumeh0",
      label: "Telegram",
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/redakassoumeh/",
      label: "LinkedIn",
    },
    {
      icon: <SiMailboxdotorg className="w-5 h-5" />,
      href: "mailto:redakassoumeh@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition"
                aria-label={link.label}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
