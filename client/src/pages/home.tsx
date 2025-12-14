import { Navbar } from "@/components/layout/Navbar";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { ProductCard } from "@/components/ui/product-card";
import { products, banners, categoryIcons } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronRight, Smartphone, Shirt, Home as HomeIcon, Monitor, Gift, Utensils } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

// Helper for horizontal scroll sections
function Section({ title, items, link }: { title: string, items: any[], link: string }) {
  return (
    <div className="bg-white p-4 mb-4 shadow-sm">
      <div className="flex justify-between items-center mb-4 border-b pb-3">
        <div>
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-400">Best deals updated daily</p>
        </div>
        <Link href={link}>
          <Button variant="default" className="bg-primary hover:bg-blue-600 rounded-sm h-9 px-6 text-sm font-semibold shadow-md">
            VIEW ALL
          </Button>
        </Link>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
        {items.map((product) => (
          <div key={product.id} className="min-w-[200px] max-w-[200px] border border-gray-100 hover:shadow-lg transition-shadow rounded-sm p-3">
            <div className="aspect-square mb-3 p-2">
              <img src={product.image} alt={product.name} className="h-full w-full object-contain hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="text-center">
              <h3 className="font-medium text-sm text-gray-900 truncate mb-1">{product.name}</h3>
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
  { name: "Top Offers", icon: categoryIcons.Beauty }, // Using placeholder icons, mapping to closest match
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
                  <div className="flex flex-col items-center gap-1 cursor-pointer group min-w-[64px] flex-shrink-0">
                    <div className="h-16 w-16 overflow-hidden mb-1">
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
                  <div className="aspect-[21/9] md:aspect-[21/6] w-full relative overflow-hidden bg-gray-200">
                    <img src={banner} alt="Sale Banner" className="h-full w-full object-cover" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Deal Sections */}
        <div className="container mx-auto px-2">
           <Section title="Top Deals on Fashion" items={menProducts} link="/shop?category=Men" />
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
             <div className="col-span-1 md:col-span-2 bg-white p-4 shadow-sm">
                <h2 className="text-xl font-bold mb-4">Trending in Footwear</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {footwear.slice(0, 3).map(p => (
                    <ProductCard key={p.id} product={p} className="border border-gray-100 shadow-none hover:shadow-md" />
                  ))}
                </div>
             </div>
             <div className="bg-white p-4 shadow-sm flex flex-col justify-center items-center text-center">
                <h3 className="text-lg font-bold mb-2">New Season Arrivals</h3>
                <p className="text-sm text-gray-500 mb-4">Check out the latest styles</p>
                <img src={womenProducts[0]?.image} className="h-48 w-auto object-contain mb-4" />
                <Button className="w-full">Explore Now</Button>
             </div>
           </div>

           <Section title="Best of Electronics & Accessories" items={accessories} link="/shop?category=Accessories" />
           <Section title="Women's Fashion" items={womenProducts} link="/shop?category=Women" />
        </div>
      </div>
    </div>
  );
}
