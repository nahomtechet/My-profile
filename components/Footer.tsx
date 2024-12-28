"use client";
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const socials = [
  { icon: Github, href: "https://github.com/nahomtechet", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/behailu-bekele-7b6baa2a8/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:exitvisionet@gmail.com", label: "Email" },
];

export const Footer = () => {
  return (
    <section>
      <div className="bg-[#0b0414] py-10 md:py-4 relative overflow-hidden">
        <div className="container mx-auto px-4 md:py-8">
          <div className="flex items-center justify-center md:justify-between">
            {/* Social Icons */}
            <ul className="hidden md:flex space-x-4">
              {socials.map((social) => (
                <motion.li
                  key={social.label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-200"
                    asChild
                  >
                    <Link
                      href={social.href}
                      aria-label={social.label}
                      role="link"
                      title={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="h-5 w-5" />
                    </Link>
                  </Button>
                </motion.li>
              ))}
            </ul>

            {/* Footer Text */}
            <p className="text-gray-400 md:text-xl md:mt-4">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
