import { Navbar } from "@/components/layout/Navbar";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { ProductCard } from "@/components/ui/product-card";
import { products, banners, categoryIcons } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Timer, Sparkles, TrendingUp } from "lucide-react";
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

// Helper for horizontal scroll sections
function Section({ title, items, link, showTimer = false, subtitle }: { title: string, items: any[], link: string, showTimer?: boolean, subtitle?: string }) {
  // Set target date to end of current day for demo
  const targetDate = new Date();
  targetDate.setHours(24, 0, 0, 0);

  return (
    <section className="container mx-auto px-4 mb-16">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{title}</h2>
            {showTimer && (
              <div className="flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">
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
        {items.slice(0, 5).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
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
    <div className="min-h-screen bg-gray-50/50 pb-20">
      <Navbar />
      <CartDrawer />

      <div className="pt-24 md:pt-28 pb-12">
        
        {/* Hero Section - Modern & Immersive */}
        <div className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[400px] md:h-[500px]">
            {/* Main Carousel */}
            <div className="lg:col-span-9 h-full rounded-2xl overflow-hidden shadow-2xl relative group">
              <Carousel 
                plugins={[Autoplay({ delay: 5000 })]}
                className="w-full h-full"
              >
                <CarouselContent className="h-full">
                  {banners.map((banner, index) => (
                    <CarouselItem key={index} className="h-full">
                      <div className="relative h-full w-full">
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                         <img src={banner} alt="Sale Banner" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                         <div className="absolute bottom-8 left-8 z-20 text-white max-w-xl">
                            <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block border border-white/30">
                              Featured Collection
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight shadow-sm">
                              Summer Collection {new Date().getFullYear()}
                            </h2>
                            <p className="text-lg text-gray-200 mb-6 line-clamp-2">
                              Discover the latest trends in fashion and lifestyle. Up to 70% off on selected items.
                            </p>
                            <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 h-12 font-bold text-base transition-transform hover:scale-105">
                              Shop Now
                            </Button>
                         </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-8 border-white/20 bg-black/20 text-white hover:bg-white hover:text-black transition-all" />
                <CarouselNext className="right-8 border-white/20 bg-black/20 text-white hover:bg-white hover:text-black transition-all" />
              </Carousel>
            </div>

            {/* Side Banners - Desktop Only */}
            <div className="hidden lg:grid col-span-3 grid-rows-2 gap-6 h-full">
               <div className="rounded-2xl overflow-hidden relative group cursor-pointer">
                  <img src={menProducts[0].image} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-xs font-bold uppercase tracking-widest mb-1">New Arrival</p>
                    <h3 className="text-2xl font-bold">Men's Fashion</h3>
                  </div>
               </div>
               <div className="rounded-2xl overflow-hidden relative group cursor-pointer">
                  <img src={womenProducts[0].image} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-xs font-bold uppercase tracking-widest mb-1">Trending</p>
                    <h3 className="text-2xl font-bold">Women's Style</h3>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Categories - Modern Pills */}
        <div className="container mx-auto px-4 mb-20 overflow-x-auto no-scrollbar">
          <div className="flex justify-start md:justify-center gap-4 min-w-max pb-4">
            {categoriesBar.map((cat, idx) => (
              <Link key={idx} href="/shop">
                <div className="group flex flex-col items-center gap-3 cursor-pointer p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 w-28">
                  <div className={cn("h-14 w-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm", cat.color)}>
                    <img src={cat.icon} className="h-8 w-8 object-contain mix-blend-multiply opacity-80 group-hover:opacity-100" />
                  </div>
                  <span className="text-sm font-semibold text-gray-600 group-hover:text-primary transition-colors text-center">
                    {cat.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Deal Sections */}
        <Section 
          title="Flash Deals" 
          subtitle="Grab these limited-time offers before they expire" 
          items={menProducts} 
          link="/shop?category=Men" 
          showTimer={true} 
        />
        
        {/* Featured Banner Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="relative rounded-3xl overflow-hidden bg-primary h-[300px] flex items-center">
             <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-black/50 to-transparent"></div>
             
             <div className="relative z-10 px-8 md:px-16 max-w-2xl text-white">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-5 w-5 text-yellow-400" />
                  <span className="font-bold tracking-widest text-sm uppercase">Premium Selection</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Elevate Your Lifestyle</h2>
                <p className="text-blue-100 text-lg mb-8">Curated luxury items for the discerning shopper. Experience quality like never before.</p>
                <Button className="bg-white text-primary hover:bg-blue-50 border-none rounded-full px-8 h-12 font-bold shadow-lg">
                  Explore Premium
                </Button>
             </div>
             
             <img src={accessories[0].image} className="absolute right-10 md:right-32 bottom-0 h-[120%] object-contain drop-shadow-2xl transition-transform hover:scale-105 duration-700 hidden md:block" />
          </div>
        </section>

        <Section title="Trending Now" subtitle="The most coveted items of the season" items={womenProducts} link="/shop?category=Women" />

        {/* Grid Section */}
        <section className="container mx-auto px-4 mb-16">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between group cursor-pointer hover:shadow-md transition-all">
                 <div>
                    <h3 className="text-2xl font-bold mb-2">New in Footwear</h3>
                    <p className="text-gray-500 mb-6">Step up your game with our latest collection</p>
                    <Button variant="link" className="p-0 text-primary font-bold group-hover:translate-x-1 transition-transform">
                      Shop Sneakers <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                 </div>
                 <img src={footwear[0].image} className="h-40 w-40 object-contain group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between group cursor-pointer hover:shadow-md transition-all">
                 <div>
                    <h3 className="text-2xl font-bold mb-2">Smart Electronics</h3>
                    <p className="text-gray-500 mb-6">Upgrade your tech with smart devices</p>
                    <Button variant="link" className="p-0 text-primary font-bold group-hover:translate-x-1 transition-transform">
                      Discover Tech <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                 </div>
                 <img src={accessories[1].image} className="h-40 w-40 object-contain group-hover:scale-110 transition-transform duration-500" />
              </div>
           </div>
        </section>

        <Section title="Best Sellers" items={footwear} link="/shop?category=Footwear" />
      </div>
    </div>
  );
}
