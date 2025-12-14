import { Navbar } from "@/components/layout/Navbar";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { ProductCard } from "@/components/ui/product-card";
import { products, banners, categoryIcons } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronRight, Smartphone, Shirt, Home as HomeIcon, Monitor, Gift, Utensils, Timer } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { CountdownTimer } from "@/components/ui/countdown-timer";

// Helper for horizontal scroll sections
function Section({ title, items, link, showTimer = false }: { title: string, items: any[], link: string, showTimer?: boolean }) {
  // Set target date to end of current day for demo
  const targetDate = new Date();
  targetDate.setHours(24, 0, 0, 0);

  return (
    <div className="bg-white p-4 mb-4 shadow-sm">
      <div className="flex justify-between items-center mb-4 border-b pb-3">
        <div className="flex items-center gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
            <p className="text-sm text-gray-400">Best deals updated daily</p>
          </div>
          {showTimer && (
            <div className="hidden md:flex items-center gap-2">
              <Timer className="h-5 w-5 text-gray-400" />
              <CountdownTimer targetDate={targetDate} />
            </div>
          )}
        </div>
        <Link href={link}>
          <Button variant="default" className="bg-primary hover:bg-blue-600 rounded-sm h-9 px-6 text-sm font-semibold shadow-md">
            VIEW ALL
          </Button>
        </Link>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
        {items.map((product) => (
          <div key={product.id} className="min-w-[200px] max-w-[200px] border border-gray-100 hover:shadow-lg transition-shadow rounded-sm p-3 group cursor-pointer">
            <div className="aspect-square mb-3 p-2 relative">
               {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <img src={product.image} alt={product.name} className="h-full w-full object-contain hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="text-center">
              <h3 className="font-medium text-sm text-gray-900 truncate mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
              <p className="text-accent font-medium text-sm">Min. 50% Off</p>
              <p className="text-gray-400 text-xs mt-1">{product.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const categoriesBar = [
  { name: "Top Offers", icon: categoryIcons.Beauty }, 
  { name: "Mobiles & Tablets", icon: categoryIcons.Electronics },
  { name: "Fashion", icon: categoryIcons.Fashion },
  { name: "Electronics", icon: categoryIcons.Electronics },
  { name: "Home & Kitchen", icon: categoryIcons.Home },
  { name: "Beauty", icon: categoryIcons.Beauty },
  { name: "Toys & Baby", icon: categoryIcons.Toys },
  { name: "Furniture", icon: categoryIcons.Home },
  { name: "Grocery", icon: categoryIcons.Beauty },
];

export default function Home() {
  const menProducts = products.filter(p => p.category === "Men").slice(0, 8);
  const womenProducts = products.filter(p => p.category === "Women").slice(0, 8);
  const footwear = products.filter(p => p.category === "Footwear").slice(0, 8);
  const accessories = products.filter(p => p.category === "Accessories").slice(0, 8);

  return (
    <div className="min-h-screen bg-gray-100 pb-10">
      <Navbar />
      <CartDrawer />

      <div className="pt-16">
        {/* Category Bar */}
        <div className="bg-white shadow-sm mb-3">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between md:justify-center gap-4 md:gap-12 overflow-x-auto no-scrollbar">
              {categoriesBar.map((cat, idx) => (
                <Link key={idx} href="/shop">
                  <div className="flex flex-col items-center gap-1 cursor-pointer group min-w-[64px] flex-shrink-0 relative">
                    <div className="h-16 w-16 overflow-hidden mb-1 transition-transform group-hover:-translate-y-1 duration-300">
                      <img src={cat.icon} alt={cat.name} className="h-full w-full object-contain" />
                    </div>
                    <span className="text-xs font-semibold text-gray-700 group-hover:text-primary whitespace-nowrap">{cat.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Carousel */}
        <div className="container mx-auto px-2 mb-4">
          <Carousel 
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {banners.map((banner, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-[21/9] md:aspect-[21/6] w-full relative overflow-hidden bg-gray-200 cursor-pointer">
                    <img src={banner} alt="Sale Banner" className="h-full w-full object-cover" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 opacity-0 hover:opacity-100 transition-opacity h-20 w-10 rounded-sm bg-white/90 border-none shadow-md" />
            <CarouselNext className="right-4 opacity-0 hover:opacity-100 transition-opacity h-20 w-10 rounded-sm bg-white/90 border-none shadow-md" />
          </Carousel>
        </div>

        {/* Deal Sections */}
        <div className="container mx-auto px-2">
           <Section title="Deals of the Day" items={menProducts} link="/shop?category=Men" showTimer={true} />
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
             <div className="col-span-1 md:col-span-2 bg-white p-4 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Trending in Footwear</h2>
                  <Button variant="default" className="bg-primary hover:bg-blue-600 rounded-sm h-8 px-4 text-xs font-semibold shadow-md">VIEW ALL</Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {footwear.slice(0, 3).map(p => (
                    <ProductCard key={p.id} product={p} className="border border-gray-100 shadow-none hover:shadow-md" />
                  ))}
                </div>
             </div>
             <div className="bg-white p-4 shadow-sm flex flex-col justify-center items-center text-center relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
                <h3 className="text-lg font-bold mb-2">New Season Arrivals</h3>
                <p className="text-sm text-gray-500 mb-4">Check out the latest styles</p>
                <div className="relative mb-4 transition-transform duration-500 group-hover:scale-105">
                  <img src={womenProducts[0]?.image} className="h-48 w-auto object-contain" />
                </div>
                <Button className="w-full bg-primary hover:bg-blue-600">Explore Now</Button>
             </div>
           </div>

           <Section title="Best of Electronics & Accessories" items={accessories} link="/shop?category=Accessories" />
           <Section title="Women's Fashion" items={womenProducts} link="/shop?category=Women" />
        </div>
      </div>
    </div>
  );
}
