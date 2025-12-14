import { Navbar } from "@/components/layout/Navbar";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { WishlistDrawer } from "@/components/layout/WishlistDrawer";
import { ProductCard } from "@/components/ui/product-card";
import { products, banners, categoryIcons } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Timer, Sparkles, TrendingUp, CheckCircle2 } from "lucide-react";
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

// Helper for horizontal scroll sections
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
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{title}</h2>
            {showTimer && (
              <div className="flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100 animate-pulse">
                <Timer className="h-4 w-4" />
                <span className="text-sm font-bold">Ending Soon</span>
                <CountdownTimer targetDate={targetDate} />
              </div>
            )}
          </div>
          {subtitle && <p className="text-gray-500 font-medium">{subtitle}</p>}
        </div>
        <Link href={link}>
          <Button variant="outline" className="group rounded-full border-gray-300 hover:border-primary hover:text-primary transition-all">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
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
  { name: "Furniture", icon: categoryIcons.Home, color: "bg-teal-50 text-teal-600" },
];

export default function Home() {
  const menProducts = products.filter(p => p.category === "Men").slice(0, 10);
  const womenProducts = products.filter(p => p.category === "Women").slice(0, 10);
  const footwear = products.filter(p => p.category === "Footwear").slice(0, 10);
  const accessories = products.filter(p => p.category === "Accessories").slice(0, 10);

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20 overflow-x-hidden">
      <Navbar />
      <CartDrawer />
      <WishlistDrawer />

      <div className="pt-24 md:pt-28 pb-12">
        
        {/* Marquee Section */}
        <div className="w-full overflow-hidden bg-primary text-white py-2 mb-8 transform -rotate-1 origin-left scale-110 shadow-lg">
          <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest">
                <Sparkles className="h-4 w-4 text-yellow-300" />
                <span>Super Sale Live Now</span>
                <span className="text-yellow-300">Up to 80% Off</span>
                <Sparkles className="h-4 w-4 text-yellow-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Hero Section - Modern & Immersive */}
        <div className="container mx-auto px-4 mb-20">
          <div className="h-[500px] md:h-[600px] w-full">
            {/* Main Carousel - Full Width */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl relative group perspective-1000"
            >
              <Carousel 
                plugins={[Autoplay({ delay: 5000 })]}
                className="w-full h-full"
              >
                <CarouselContent className="h-full">
                  {banners.map((banner, index) => (
                    <CarouselItem key={index} className="h-full">
                      <div className="relative h-full w-full">
                         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10" />
                         <img src={banner} alt="Sale Banner" className="h-full w-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
                         <div className="absolute inset-0 z-20 flex flex-col justify-center px-12 md:px-24 max-w-4xl text-white">
                            <motion.div
                              initial={{ opacity: 0, x: -50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 }}
                              className="flex items-center gap-4 mb-6"
                            >
                              <span className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-sm font-bold uppercase tracking-[0.2em] border border-white/20 text-yellow-300 shadow-lg">
                                New Season 2025
                              </span>
                              <div className="h-[1px] w-20 bg-white/30 hidden md:block"></div>
                            </motion.div>
                            
                            <motion.h2 
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 }}
                              className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter drop-shadow-2xl"
                            >
                              Redefine <br/>
                              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-white to-blue-200">Your Style</span>
                            </motion.h2>
                            
                            <motion.p 
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 }}
                              className="text-xl text-gray-200 mb-10 max-w-lg font-light leading-relaxed border-l-4 border-yellow-400 pl-6"
                            >
                              Discover the latest trends in fashion and lifestyle. curated for the bold and the beautiful.
                            </motion.p>

                            <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.7 }}
                              className="flex gap-4"
                            >
                              <Button className="bg-white text-black hover:bg-yellow-300 hover:scale-105 rounded-full px-12 h-16 font-bold text-lg transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                                Shop Now
                              </Button>
                              <Button variant="outline" className="text-white border-white/30 hover:bg-white/10 hover:border-white rounded-full px-8 h-16 font-bold text-lg backdrop-blur-sm transition-all">
                                View Lookbook
                              </Button>
                            </motion.div>
                         </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-8 h-16 w-16 border-white/10 bg-black/20 text-white hover:bg-white hover:text-black transition-all backdrop-blur-md hidden md:flex" />
                <CarouselNext className="right-8 h-16 w-16 border-white/10 bg-black/20 text-white hover:bg-white hover:text-black transition-all backdrop-blur-md hidden md:flex" />
              </Carousel>
            </motion.div>
          </div>
        </div>

        {/* Categories - Floating Cards */}
        <div className="container mx-auto px-4 mb-24">
          <div className="flex justify-start md:justify-center gap-6 overflow-x-auto no-scrollbar pb-8 px-4">
            {categoriesBar.map((cat, idx) => (
              <Link key={idx} href="/shop">
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, type: "spring" }}
                  whileHover={{ y: -10 }}
                  className="group flex flex-col items-center gap-4 cursor-pointer min-w-[100px]"
                >
                  <div className={cn(
                    "h-20 w-20 rounded-2xl flex items-center justify-center transition-all shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/20", 
                    cat.color.replace('text-', 'bg-').replace('bg-', 'bg-opacity-10 text-')
                  )}>
                    <div className={cn("h-full w-full rounded-2xl opacity-10 absolute", cat.color.split(' ')[0])}></div>
                    <img src={cat.icon} className="h-10 w-10 object-contain relative z-10 drop-shadow-md group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-sm font-bold text-gray-700 group-hover:text-primary transition-colors text-center">
                    {cat.name}
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Flash Deals */}
        <Section 
          title="Flash Deals" 
          subtitle="Grab these limited-time offers before they expire" 
          items={menProducts} 
          link="/shop?category=Men" 
          showTimer={true} 
        />
        
        {/* New Arrivals Section - Moved Down & Redesigned */}
        <section className="container mx-auto px-4 mb-24">
           <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
             <div>
               <motion.span 
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block"
               >
                 Just Dropped
               </motion.span>
               <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">New Arrivals</h2>
             </div>
             <Button variant="outline" className="rounded-full">View All New Items</Button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Featured New Item */}
              <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="md:col-span-2 bg-black rounded-[2rem] p-8 md:p-12 relative overflow-hidden group min-h-[400px] flex flex-col justify-end"
              >
                 <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0" />
                 <img 
                    src={menProducts[0].image} 
                    className="absolute right-[-20%] top-[-10%] w-[80%] h-full object-contain opacity-80 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700 z-10" 
                 />
                 <div className="relative z-20 max-w-md">
                   <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider mb-4 inline-block">
                     Editor's Pick
                   </span>
                   <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                     {menProducts[0].name}
                   </h3>
                   <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 mt-4">
                     Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                   </Button>
                 </div>
              </motion.div>

              {/* Standard New Items */}
              {womenProducts.slice(0, 2).map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <ProductCard product={product} className="h-full bg-gray-50 border-none shadow-none hover:shadow-xl hover:bg-white" />
                </motion.div>
              ))}
           </div>
        </section>

        {/* Featured Banner Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 mb-24"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden bg-black h-[400px] flex items-center shadow-2xl">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
             <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
             
             <div className="relative z-10 px-8 md:px-20 max-w-2xl text-white">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-yellow-400 text-black text-xs font-black px-3 py-1 uppercase tracking-widest rounded-sm">Exclusive</span>
                  <span className="text-yellow-400 font-bold tracking-widest text-sm uppercase">Limited Edition</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none tracking-tight">
                  Premium <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600">Luxury</span>
                </h2>
                <p className="text-gray-300 text-lg mb-10 max-w-md leading-relaxed">
                  Experience the pinnacle of craftsmanship. Our curated selection of premium goods defines sophistication.
                </p>
                <Button className="bg-white text-black hover:bg-yellow-400 border-none rounded-full px-10 h-14 font-bold text-lg shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all hover:scale-105">
                  Explore Collection
                </Button>
             </div>
             
             <motion.img 
               initial={{ x: 200, opacity: 0, rotate: 10 }}
               whileInView={{ x: 0, opacity: 1, rotate: 0 }}
               transition={{ duration: 1, type: "spring" }}
               src={accessories[0].image} 
               className="absolute -right-10 md:right-20 bottom-[-10%] h-[130%] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] hidden md:block" 
             />
          </div>
        </motion.section>

        {/* Trending Now Section - Moved Down */}
        <section className="container mx-auto px-4 mb-24">
           <div className="text-center mb-12">
             <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">What's Hot</span>
             <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-4">Trending Now</h2>
             <p className="text-gray-500 max-w-2xl mx-auto text-lg">
               The most coveted items of the season, curated just for you. Don't miss out on these viral favorites.
             </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Trending Large Card 1 */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-orange-50 rounded-[2rem] p-8 relative overflow-hidden group min-h-[300px]"
              >
                 <div className="relative z-10">
                   <h3 className="text-2xl font-bold mb-2 text-orange-900">Summer Essentials</h3>
                   <Button variant="link" className="text-orange-600 p-0 font-bold">Shop Collection <ArrowRight className="ml-1 h-4 w-4" /></Button>
                 </div>
                 <img src={womenProducts[0].image} className="absolute right-0 bottom-0 w-48 h-48 object-contain group-hover:scale-110 transition-transform duration-500" />
              </motion.div>

              {/* Trending Large Card 2 */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-blue-50 rounded-[2rem] p-8 relative overflow-hidden group min-h-[300px]"
              >
                 <div className="relative z-10">
                   <h3 className="text-2xl font-bold mb-2 text-blue-900">Tech Upgrades</h3>
                   <Button variant="link" className="text-blue-600 p-0 font-bold">View Gadgets <ArrowRight className="ml-1 h-4 w-4" /></Button>
                 </div>
                 <img src={accessories[1].image} className="absolute right-0 bottom-0 w-48 h-48 object-contain group-hover:scale-110 transition-transform duration-500" />
              </motion.div>

              {/* Trending Large Card 3 */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-purple-50 rounded-[2rem] p-8 relative overflow-hidden group min-h-[300px] md:col-span-2 lg:col-span-1"
              >
                 <div className="relative z-10">
                   <h3 className="text-2xl font-bold mb-2 text-purple-900">Accessories</h3>
                   <Button variant="link" className="text-purple-600 p-0 font-bold">See More <ArrowRight className="ml-1 h-4 w-4" /></Button>
                 </div>
                 <img src={accessories[0].image} className="absolute right-0 bottom-0 w-48 h-48 object-contain group-hover:scale-110 transition-transform duration-500" />
              </motion.div>
           </div>
           
           {/* Additional Trending List */}
           <div className="mt-12">
             <Section title="" items={womenProducts} link="/shop?category=Women" />
           </div>
        </section>

        {/* Grid Section - Bento Style */}
        <section className="container mx-auto px-4 mb-24">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gray-100 p-10 rounded-[2.5rem] shadow-none hover:shadow-2xl transition-all duration-500 flex items-center justify-between group cursor-pointer relative overflow-hidden"
              >
                 <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full blur-[80px] opacity-0 group-hover:opacity-50 transition-opacity" />
                 <div className="relative z-10">
                    <h3 className="text-4xl font-bold mb-4 text-gray-900">Footwear</h3>
                    <p className="text-gray-500 mb-8 max-w-[200px]">Step into the future with our latest kicks.</p>
                    <Button className="bg-black text-white rounded-full px-8 group-hover:px-10 transition-all">
                      Shop Now
                    </Button>
                 </div>
                 <img src={footwear[0].image} className="h-48 w-48 object-contain group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500 relative z-10 drop-shadow-xl" />
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-black p-10 rounded-[2.5rem] shadow-none hover:shadow-2xl transition-all duration-500 flex items-center justify-between group cursor-pointer relative overflow-hidden"
              >
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity" />
                 <div className="relative z-10">
                    <h3 className="text-4xl font-bold mb-4 text-white">Tech</h3>
                    <p className="text-gray-400 mb-8 max-w-[200px]">Next-gen gadgets for the modern pro.</p>
                    <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 group-hover:px-10 transition-all">
                      Discover
                    </Button>
                 </div>
                 <img src={accessories[1].image} className="h-48 w-48 object-contain group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 relative z-10 drop-shadow-xl" />
              </motion.div>
           </div>
        </section>

        <Section title="Best Sellers" items={footwear} link="/shop?category=Footwear" />
      </div>
    </div>
  );
}
