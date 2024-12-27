'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const socials = [
  { icon: Github, href: "https://github.com/nahomtechet", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/behailu-bekele-7b6baa2a8/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:exitvisionet@gmail.com", label: "Email" }
]

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full backdrop-blur-sm bg-[#1A0B2E]/20 border-b border-white/10 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-xl font-bold tracking-tighter">
              IM<span className="text-purple-400">.</span>
            </Link>
          </motion.div>

         
          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <ul className="hidden md:flex space-x-1 sm:space-x-2">
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
                  <Link href={social.href} aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.li>
            ))}
          </ul>

          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

     
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#1A0B2E] border-b border-white/10"
          >
            <nav className="flex flex-col space-y-4 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex space-x-4 pt-4 border-t border-white/10">
                {socials.map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-200"
                    asChild
                  >
                    <Link href={social.href} aria-label={social.label}>
                      <social.icon className="h-5 w-5" />
                    </Link>
                  </Button>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

