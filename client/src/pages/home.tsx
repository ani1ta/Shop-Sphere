import { Navbar } from "@/components/layout/Navbar";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { WishlistDrawer } from "@/components/layout/WishlistDrawer";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ui/product-card";
import { products, banners, categoryIcons } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Timer, Sparkles, Star, MapPin, Mail, Heart } from "lucide-react";
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
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3">Premium Products</h2>
            <p className="text-gray-400">Handpicked collection of trending fashion items loved by thousands of customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {womenProducts.slice(0, 5).map((product, index) => {
              const discount = Math.floor(Math.random() * 30) + 40;
              const rating = Math.floor(Math.random() * 2) + 4;
              const originalPrice = Math.floor(product.price / (1 - discount/100));
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={cn(
                    "rounded-3xl p-6 flex flex-col justify-between text-center relative overflow-hidden group cursor-pointer h-96 shadow-xl hover:shadow-2xl hover:scale-105 transition-all",
                    vibrantColors[index % vibrantColors.length]
                  )}
                >
                  {/* Discount Badge */}
                  <div className="absolute top-4 left-4 bg-red-500 text-white font-black text-sm px-3 py-1 rounded-full z-10 shadow-lg">
                    -{discount}%
                  </div>

                  {/* Wishlist Icon */}
                  <button className="absolute top-4 right-4 bg-white rounded-full p-2 hover:scale-110 transition-transform z-10 shadow-lg">
                    <Heart className="h-5 w-5 text-gray-800" />
                  </button>

                  {/* Product Image */}
                  <div className="flex-1 flex items-center justify-center">
                    <img 
                      src={product.image} 
                      className="h-40 w-40 object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-lg"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="space-y-3">
                    <h3 className="text-white font-bold text-sm md:text-base line-clamp-2">{product.name}</h3>
                    
                    {/* Rating */}
                    <div className="flex items-center justify-center gap-1">
                      {[...Array(rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-300 text-yellow-300" />
                      ))}
                      {[...Array(5 - rating)].map((_, i) => (
                        <Star key={i + rating} className="h-4 w-4 text-white/30" />
                      ))}
                      <span className="text-xs text-white font-bold ml-1">{rating}.{Math.floor(Math.random() * 10)}</span>
                    </div>

                    {/* Prices */}
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-white font-black text-lg">₹{product.price}</span>
                      <span className="text-white/60 text-sm line-through">₹{originalPrice}</span>
                    </div>

                    {/* Button */}
                    <Button className="w-full bg-orange-500 text-white hover:bg-orange-600 rounded-full py-2 text-sm font-bold shadow-lg transition-all">
                      Order Now
                    </Button>
                  </div>
                </motion.div>
              );
            })}
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
                Grab the best fashion deals of the season with massive discounts on premium clothing, footwear, and accessories. Limited time offer – shop now and save big!
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

        {/* Collections - Men, Women, Accessories, Footwear */}
        <section className="container mx-auto px-4 mb-24">
          <div className="text-center mb-12">
            <span className="text-orange-400 font-bold tracking-widest uppercase text-sm block mb-2">Shop by Collection</span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3">Explore Collections</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Men's Collection */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-blue-600 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group min-h-[350px] flex flex-col justify-between"
            >
              <div className="relative z-10">
                <span className="text-white text-xs font-bold px-3 py-1 bg-white/20 rounded-full mb-4 inline-block">Men's Fashion</span>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">Premium Collection</h3>
                <p className="text-white/90 mb-8 max-w-xs">Discover stylish and sophisticated clothing for the modern man.</p>
              </div>
              <div className="flex items-end justify-between relative z-10">
                <button onClick={() => window.location.href = '/shop?category=Men'} className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-6 py-2 font-bold transition-all hover:scale-105">
                  Explore
                </button>
                <img src={menProducts[0].image} className="h-40 w-40 object-contain group-hover:scale-110 transition-transform" />
              </div>
            </motion.div>

            {/* Women's Collection */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-purple-600 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group min-h-[350px] flex flex-col justify-between"
            >
              <div className="relative z-10">
                <span className="text-white text-xs font-bold px-3 py-1 bg-white/20 rounded-full mb-4 inline-block">Women's Fashion</span>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">Elegant Range</h3>
                <p className="text-white/90 mb-8 max-w-xs">Elevate your style with our exclusive women's collection.</p>
              </div>
              <div className="flex items-end justify-between relative z-10">
                <button onClick={() => window.location.href = '/shop?category=Women'} className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-6 py-2 font-bold transition-all hover:scale-105">
                  Explore
                </button>
                <img src={womenProducts[0].image} className="h-40 w-40 object-contain group-hover:scale-110 transition-transform" />
              </div>
            </motion.div>

            {/* Accessories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-pink-600 rounded-[2rem] p-8 relative overflow-hidden group min-h-[300px] flex flex-col justify-between"
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-white mb-4">Accessories</h3>
                <p className="text-white/90 text-sm mb-6">Complete your look with premium accessories.</p>
              </div>
              <div className="flex items-end justify-between relative z-10">
                <button onClick={() => window.location.href = '/shop?category=Accessories'} className="bg-white text-pink-600 hover:bg-gray-100 rounded-full px-5 py-2 text-sm font-bold transition-all hover:scale-105">
                  Shop
                </button>
                <img src={accessories[0].image} className="h-32 w-32 object-contain group-hover:scale-110 transition-transform" />
              </div>
            </motion.div>

            {/* Footwear */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-teal-600 rounded-[2rem] p-8 relative overflow-hidden group min-h-[300px] flex flex-col justify-between"
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-white mb-4">Footwear</h3>
                <p className="text-white/90 text-sm mb-6">Step into style with our shoe collection.</p>
              </div>
              <div className="flex items-end justify-between relative z-10">
                <button onClick={() => window.location.href = '/shop?category=Footwear'} className="bg-white text-teal-600 hover:bg-gray-100 rounded-full px-5 py-2 text-sm font-bold transition-all hover:scale-105">
                  Shop
                </button>
                <img src={footwear[0].image} className="h-32 w-32 object-contain group-hover:scale-110 transition-transform" />
              </div>
            </motion.div>
          </div>
        </section>

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

        {/* Product Reviews & Ratings */}
        <section className="container mx-auto px-4 mb-24">
          <div className="text-center mb-12">
            <span className="text-orange-400 font-bold tracking-widest uppercase text-sm block mb-2">Customer Feedback</span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3">Top Rated Products</h2>
            <p className="text-gray-400">Real ratings and reviews from our customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {womenProducts.slice(0, 6).map((product, idx) => {
              const rating = Math.floor(Math.random() * 2) + 4;
              const reviews = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
              const comments = [
                "Amazing quality and fast delivery! Highly recommend.",
                "Exactly as described. Great value for money.",
                "Perfect fit and beautiful design. Will buy again!",
                "Excellent customer service and great product.",
                "Best purchase I've made this season!",
                "Love it! The quality exceeded my expectations.",
              ];
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-orange-400 transition-all hover:shadow-lg hover:shadow-orange-400/20"
                >
                  {/* Product Image */}
                  <div className="mb-4 h-40 bg-gray-800 rounded-xl flex items-center justify-center overflow-hidden">
                    <img src={product.image} alt={product.name} className="h-full w-full object-contain" />
                  </div>

                  {/* Product Info */}
                  <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">{product.name}</h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      {[...Array(rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      {[...Array(5 - rating)].map((_, i) => (
                        <Star key={i + rating} className="h-4 w-4 text-gray-600" />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-white">{rating}.{Math.floor(Math.random() * 10)}</span>
                    <span className="text-xs text-gray-500">({reviews} reviews)</span>
                  </div>

                  {/* Price */}
                  <p className="text-orange-400 font-bold text-lg mb-4">₹{product.price.toLocaleString()}</p>

                  {/* Comment */}
                  <p className="text-gray-400 text-sm italic mb-4 border-l-4 border-orange-400 pl-4">
                    "{comments[idx % comments.length]}"
                  </p>

                  {/* Reviewer Name */}
                  <div className="flex items-center gap-2 pt-4 border-t border-gray-700">
                    <div className="h-8 w-8 rounded-full bg-orange-400 flex items-center justify-center text-white font-bold text-xs">
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <span className="text-gray-400 text-sm font-medium">Verified Buyer</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
