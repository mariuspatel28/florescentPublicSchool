'use client'

import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Footer() {
  // Reusable fade-up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <footer className="bg-charcoal text-white border border-black">
      {/* --------------------- Contact & Social Links --------------------- */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact */}
          <motion.div
            className="space-y-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <p className="text-gray-400 leading-relaxed">
                  Nr. Palladium mall, S.G. Highway Road,
                  <br />
                  Thaltej, Ahmedabad-380 054.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+18189801234"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  9724896330
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:info@florescentpublicschool.org"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  info@florescentpublicschool.org
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              {[
                { label: 'About', href: '/about' },
                { label: 'Admissions', href: '/admissions' },
                { label: 'Academics', href: '/schedules' },
                { label: 'Student Life', href: '/gallery' },
                { label: 'Contact', href: '/contact-us' },
              ].map((link, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Social Media */}
          <motion.div
            className="space-y-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="black text-sm mt-6 leading-relaxed">
              Stay updated with our latest news, events, and achievements by following us on social
              media.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ------------------------ Copyright ------------------------ */}
      <motion.div
        className="border-t border-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 py-6">
          <p className="text-center black text-sm text-gray-300">
            © {new Date().getFullYear()} Floroscent Public School. All rights reserved.
          </p> 
        </div>
      </motion.div>
    </footer>
  )
}
