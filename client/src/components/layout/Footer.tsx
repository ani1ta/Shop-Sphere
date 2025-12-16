import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 relative overflow-hidden">
      {/* Decorative City Skyline */}
      <div className="absolute bottom-0 right-0 left-0 h-24 opacity-20">
        <svg viewBox="0 0 1000 100" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="skylineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#F59E0B', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#D97706', stopOpacity: 0 }} />
            </linearGradient>
          </defs>
          
          {/* Buildings */}
          <rect x="0" y="60" width="60" height="40" fill="url(#skylineGradient)" />
          <rect x="70" y="40" width="70" height="60" fill="url(#skylineGradient)" />
          <rect x="150" y="50" width="50" height="50" fill="url(#skylineGradient)" />
          <rect x="210" y="30" width="80" height="70" fill="url(#skylineGradient)" />
          <rect x="300" y="45" width="55" height="55" fill="url(#skylineGradient)" />
          <rect x="365" y="35" width="85" height="65" fill="url(#skylineGradient)" />
          <rect x="460" y="50" width="50" height="50" fill="url(#skylineGradient)" />
          <rect x="520" y="40" width="70" height="60" fill="url(#skylineGradient)" />
          <rect x="600" y="55" width="45" height="45" fill="url(#skylineGradient)" />
          <rect x="655" y="30" width="75" height="70" fill="url(#skylineGradient)" />
          <rect x="740" y="50" width="60" height="50" fill="url(#skylineGradient)" />
          <rect x="810" y="40" width="75" height="60" fill="url(#skylineGradient)" />
          <rect x="895" y="55" width="50" height="45" fill="url(#skylineGradient)" />
          <rect x="955" y="30" width="45" height="70" fill="url(#skylineGradient)" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/">
              <div className="flex items-center gap-2 mb-4 cursor-pointer group">
                <div className="h-10 w-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center font-black text-black text-lg group-hover:brightness-110 transition-all">
                  P
                </div>
                <span className="font-black text-xl text-white">PRISMA</span>
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              PRISMA is your ultimate destination for premium fashion. Discover curated collections of clothing, footwear, and accessories that elevate your personal style.
            </p>

            {/* Address */}
            <div className="flex items-start gap-2 mt-6">
              <MapPin className="h-4 w-4 text-orange-400 mt-1 flex-shrink-0" />
              <p className="text-gray-400 text-sm">Mumbai, India</p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2 mt-3">
              <Phone className="h-4 w-4 text-orange-400 flex-shrink-0" />
              <p className="text-gray-400 text-sm">91 1234567890</p>
            </div>
          </motion.div>

          {/* Important Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Important Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Blog", href: "/blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-orange-400 transition-colors text-sm font-medium cursor-pointer">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Blog", href: "/blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-orange-400 transition-colors text-sm font-medium cursor-pointer">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2"
          >
            <h3 className="text-white font-bold text-lg mb-6">Follow Us</h3>
            <div className="flex gap-4 mb-8">
              {[
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="h-10 w-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-orange-400 hover:text-white transition-all"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm border border-gray-700">
              <p className="text-gray-300 text-sm font-medium mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-orange-400"
                />
                <button className="bg-orange-400 hover:bg-orange-500 text-black font-bold px-4 py-2 rounded-lg transition-colors text-sm">
                  →
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm">
            © 2025 PRISMA. All rights reserved. Designed with passion for fashion lovers.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
