import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Star, Award, Users, ShoppingCart } from "lucide-react";

export default function About() {
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
            <span className="text-orange-400 font-bold tracking-widest uppercase text-sm block mb-4">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Redefining Fashion <span className="text-orange-400">One Piece at a Time</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed">
              PRISMA is more than just an e-commerce platform. We're a movement dedicated to bringing premium fashion and lifestyle products to everyone, everywhere. Since our inception, we've been committed to quality, style, and exceptional customer experience.
            </p>
          </motion.div>
        </section>

        {/* Stats */}
        <section className="container mx-auto px-4 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Users, label: "Happy Customers", value: "50K+", color: "bg-blue-500" },
              { icon: ShoppingCart, label: "Orders Shipped", value: "100K+", color: "bg-orange-500" },
              { icon: Award, label: "Awards Won", value: "25+", color: "bg-purple-500" },
              { icon: Star, label: "Avg Rating", value: "4.8★", color: "bg-yellow-500" },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center hover:border-orange-400 transition-all"
                >
                  <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${stat.color} text-white mx-auto mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="container mx-auto px-4 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8"
            >
              <div className="h-12 w-12 bg-orange-400 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-6">
                🎯
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To revolutionize the way people shop by bringing curated, premium fashion and lifestyle products directly to their doorstep. We believe in empowering customers with choice, quality, and exceptional service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8"
            >
              <div className="h-12 w-12 bg-orange-400 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-6">
                ✨
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To become the world's most trusted fashion and lifestyle destination, where quality meets affordability, and every customer feels valued. We aspire to inspire confidence in everyone through fashion.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="container mx-auto px-4 mb-24">
          <div className="text-center mb-12">
            <span className="text-orange-400 font-bold tracking-widest uppercase text-sm block mb-2">What We Stand For</span>
            <h2 className="text-4xl md:text-5xl font-black text-white">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Quality First", desc: "We never compromise on quality. Every product is carefully curated and inspected." },
              { title: "Customer Focused", desc: "Your satisfaction is our top priority. We listen, adapt, and improve daily." },
              { title: "Innovation", desc: "We constantly innovate to bring new experiences and technologies to shopping." },
              { title: "Sustainability", desc: "We care about our planet and promote eco-friendly fashion choices." },
              { title: "Transparency", desc: "We believe in honest communication and transparent pricing." },
              { title: "Community", desc: "We build a community of fashion enthusiasts who support each other." },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-orange-400 transition-all group"
              >
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="relative rounded-2xl overflow-hidden h-[400px] flex items-center justify-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-400"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Shop with Us?</h2>
              <p className="text-black/80 text-lg mb-8 max-w-xl mx-auto">Join thousands of happy customers and discover your favorite fashion pieces today.</p>
              <Link href="/shop">
                <Button className="bg-black text-white hover:bg-gray-900 rounded-full px-10 h-14 font-bold text-lg">
                  Start Shopping
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
