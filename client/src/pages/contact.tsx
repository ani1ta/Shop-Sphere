import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-gray-900 to-black pb-20">
      <Navbar />

      <div className="pt-32 md:pt-40">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-orange-400 font-bold tracking-widest uppercase text-sm block mb-4">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              We'd Love to <span className="text-orange-400">Hear From You</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed">
              Have a question or feedback? Our team is here to help. Reach out to us anytime, and we'll get back to you as quickly as possible.
            </p>
          </motion.div>
        </section>

        {/* Contact Info */}
        <section className="container mx-auto px-4 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Mail, label: "Email", value: "hello@prisma.com", color: "bg-blue-500" },
              { icon: Phone, label: "Phone", value: "+91 123456789", color: "bg-orange-500" },
              { icon: MapPin, label: "Address", value: "Mumbai, India", color: "bg-purple-500" },
              { icon: Clock, label: "Support Hours", value: "24/7 Available", color: "bg-green-500" },
            ].map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center hover:border-orange-400 transition-all"
                >
                  <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${contact.color} text-white mx-auto mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{contact.label}</p>
                  <p className="text-white font-bold">{contact.value}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Contact Form */}
        <section className="container mx-auto px-4 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message..."
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-400 resize-none"
                    required
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-orange-400 text-black hover:bg-orange-500 rounded-lg py-3 font-bold text-lg flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </Button>
                {submitted && (
                  <p className="text-green-400 text-center font-semibold">Message sent successfully! 🎉</p>
                )}
              </form>
            </motion.div>

            {/* Map & FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                  <p className="text-gray-400">PRISMA Headquarters</p>
                  <p className="text-white font-bold mt-2">Mumbai, India</p>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">FAQ</h3>
                <div className="space-y-4">
                  {[
                    { q: "How long does delivery take?", a: "Standard delivery: 5-7 days, Express: 2-3 days" },
                    { q: "Can I return products?", a: "Yes, 30-day money-back guarantee on all items" },
                    { q: "Do you ship internationally?", a: "Currently shipping within India only" },
                  ].map((item, idx) => (
                    <div key={idx}>
                      <p className="text-white font-semibold mb-2">{item.q}</p>
                      <p className="text-gray-400 text-sm">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
