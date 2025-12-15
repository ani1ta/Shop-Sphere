import { Navbar } from "@/components/layout/Navbar";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { WishlistDrawer } from "@/components/layout/WishlistDrawer";
import { ProductCard } from "@/components/ui/product-card";
import { products, banners, categoryIcons } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Timer, Sparkles, Star, MapPin, Mail } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { CountdownTimer } from "@/components/ui/countdown-timer";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const vibrantColors = [
  "bg-orange-400",
  "bg-blue-400",
  "bg-purple-400",
  "bg-pink-400",
  "bg-cyan-400",
  "bg-amber-400",
  "bg-teal-400",
  "bg-indigo-400",
];

function Section({ title, items, link, showTimer = false, subtitle }: { title: string, items: any[], link: string, showTimer?: boolean, subtitle?: string }) {
  const targetDate = new Date();
  targetDate.setHours(24, 0, 0, 0);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container mx-auto px-4 mb-20"
    >
      <div className="text-center mb-12">
        <span className="text-orange-400 font-bold tracking-widest uppercase text-sm block mb-2">Featured</span>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3">{title}</h2>
        {subtitle && <p className="text-gray-400 font-medium">{subtitle}</p>}
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {items.slice(0, 5).map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
      
      <div className="flex justify-center mt-12">
        <Link href={link}>
          <Button className="bg-orange-400 text-black hover:bg-orange-500 rounded-full px-10 font-bold text-lg shadow-lg">
            View All Products <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </motion.section>
  );
}

const categoriesBar = [
  { name: "Top Offers", icon: categoryIcons.Beauty, color: "bg-red-50 text-red-600" }, 
  { name: "Mobiles", icon: categoryIcons.Electronics, color: "bg-blue-50 text-blue-600" },
  { name: "Fashion", icon: categoryIcons.Fashion, color: "bg-purple-50 text-purple-600" },
  { name: "Electronics", icon: categoryIcons.Electronics, color: "bg-indigo-50 text-indigo-600" },
  { name: "Home", icon: categoryIcons.Home, color: "bg-orange-50 text-orange-600" },
  { name: "Beauty", icon: categoryIcons.Beauty, color: "bg-pink-50 text-pink-600" },
  { name: "Toys", icon: categoryIcons.Toys, color: "bg-yellow-50 text-yellow-600" },
];

export default function Home() {
  const menProducts = products.filter(p => p.category === "Men").slice(0, 10);
  const womenProducts = products.filter(p => p.category === "Women").slice(0, 10);
  const footwear = products.filter(p => p.category === "Footwear").slice(0, 10);
  const accessories = products.filter(p => p.category === "Accessories").slice(0, 10);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-gray-900 to-black pb-20 overflow-x-hidden">
      <Navbar />
      <CartDrawer />
      <WishlistDrawer />

      <div className="pt-24 md:pt-28 pb-12">
        
        {/* Marquee Section */}
        <div className="w-full overflow-hidden bg-orange-400 text-black py-3 mb-8 shadow-lg">
          <div className="animate-marquee whitespace-nowrap flex gap-16 items-center font-bold tracking-wider">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 text-sm md:text-base">
                <Sparkles className="h-5 w-5" />
                <span>70% OFF ON ALL PRODUCTS</span>
                <Sparkles className="h-5 w-5" />
              </div>
            ))}
          </div>
        </div>

        {/* Hero Section - Bold & Geometric */}
        <div className="container mx-auto px-4 mb-24">
          <div className="relative h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden">
            {/* Diagonal Geometric Shape */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-orange-400 via-amber-400 to-orange-500 clip-path-polygon transform -skew-x-12 z-0"></div>
            
            {/* Dark Background */}
            <div className="absolute inset-0 bg-black z-0"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center px-8 md:px-16">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
              >
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-orange-400 font-bold tracking-widest uppercase text-sm block mb-4"
                >
                  Super Offer
                </motion.span>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-6xl md:text-7xl font-black text-white mb-6 leading-none tracking-tighter"
                >
                  70% off on<br/> All Products<br/> <span className="text-orange-400">Sale</span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-300 text-lg mb-8 max-w-xl leading-relaxed"
                >
                  Lorem nibh adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button className="bg-orange-400 text-black hover:bg-orange-500 rounded-full px-10 h-14 font-bold text-lg shadow-lg transition-all hover:scale-105">
                    Order Now
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Carousel - Positioned on right */}
            <Carousel 
              plugins={[Autoplay({ delay: 5000 })]}
              className="absolute right-0 top-0 w-full md:w-1/2 h-full z-5"
            >
              <CarouselContent className="h-full">
                {banners.map((banner, index) => (
                  <CarouselItem key={index} className="h-full">
                    <img src={banner} alt="Sale" className="h-full w-full object-cover" />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        {/* Categories */}
        <div className="container mx-auto px-4 mb-24">
          <div className="flex justify-start md:justify-center gap-4 overflow-x-auto no-scrollbar pb-4">
            {categoriesBar.map((cat, idx) => (
              <Link key={idx} href="/shop">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="group flex flex-col items-center gap-2 cursor-pointer min-w-fit"
                >
                  <div className={cn(
                    "h-16 w-16 rounded-xl flex items-center justify-center transition-all shadow-lg group-hover:shadow-xl",
                    cat.color
                  )}>
                    <img src={cat.icon} className="h-8 w-8 object-contain" />
                  </div>
                  <span className="text-xs font-bold text-gray-300 group-hover:text-orange-400 transition-colors text-center">
                    {cat.name}
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Best Products */}
        <section className="container mx-auto px-4 mb-24">
          <div className="text-center mb-12">
            <span className="text-orange-400 font-bold tracking-widest uppercase text-sm block mb-2">Top Selling</span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3">Products</h2>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 50 experience needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {womenProducts.slice(0, 5).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  "rounded-2xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group cursor-pointer h-72 shadow-xl hover:shadow-2xl transition-all",
                  vibrantColors[index % vibrantColors.length]
                )}
              >
                <img 
                  src={product.image} 
                  className="h-40 w-40 object-contain mb-4 group-hover:scale-110 transition-transform duration-500 drop-shadow-lg"
                />
                <h3 className="text-white font-bold text-sm md:text-base mb-2 line-clamp-2">{product.name}</h3>
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-yellow-300 text-yellow-300" />
                  ))}
                  <span className="text-xs text-white font-bold ml-1">4.{Math.floor(Math.random() * 10)}</span>
                </div>
                <Button className="bg-orange-500 text-white hover:bg-orange-600 rounded-full px-6 py-1 text-xs font-bold">
                  Order Now
                </Button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Winter Sale Banner */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="rounded-2xl overflow-hidden h-64 md:h-80 bg-orange-400"
            >
              <img src={womenProducts[0].image} className="w-full h-full object-cover" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
            >
              <span className="text-orange-400 font-bold tracking-widest uppercase text-sm block mb-4">Special Offer</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Winter Sale upto<br/> <span className="text-orange-400">50% Off</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit hendrerit sed tempore. Donec imperdiet viverra sollicitudes sed tempore.
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {[
                  { icon: "✓", label: "Quality Products", color: "bg-purple-500" },
                  { icon: "⚡", label: "Fast Delivery", color: "bg-orange-500" },
                  { icon: "✓", label: "Easy Payment method", color: "bg-green-500" },
                  { icon: "🎁", label: "Get Offers", color: "bg-yellow-500" },
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={cn("h-10 w-10 rounded-full flex items-center justify-center text-white font-bold", feature.color)}>
                      {feature.icon}
                    </div>
                    <span className="text-gray-300 font-medium">{feature.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Newsletter */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="w-full bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 py-12 md:py-16 my-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2230%22 fill=%22white%22/></svg>')]" />
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Get Notified About New Products</h2>
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-3 rounded-full bg-white text-gray-900 placeholder-gray-500 font-medium focus:outline-none"
              />
              <Button className="bg-black text-white hover:bg-gray-900 rounded-full px-8 font-bold">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.section>

        {/* Flash Deals */}
        <Section 
          title="Flash Deals" 
          subtitle="Grab these limited-time offers before they expire" 
          items={menProducts} 
          link="/shop?category=Men" 
          showTimer={true} 
        />

        {/* Best Sellers */}
        <Section title="Best Sellers" items={footwear} link="/shop?category=Footwear" />

        {/* Testimonials */}
        <section className="container mx-auto px-4 mb-24">
          <div className="text-center mb-12">
            <span className="text-orange-400 font-bold tracking-widest uppercase text-sm block mb-2">Feedback</span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3">Testimonials</h2>
            <p className="text-gray-400">What our customers are saying about experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Victor", text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit. Hiberis nobis hoc impendium.", avatar: "👨" },
              { name: "Satya Nadella", text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit. Hiberis nobis hoc impendium.", avatar: "👨" },
              { name: "Viral Kohli", text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit. Hiberis nobis hoc impendium.", avatar: "👨" },
            ].map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-orange-400 transition-all"
              >
                <p className="text-gray-400 text-sm mb-6">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-orange-400 flex items-center justify-center text-xl">
                    {testimonial.avatar}
                  </div>
                  <span className="text-white font-bold">{testimonial.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
