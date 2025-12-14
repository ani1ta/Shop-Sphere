import { Link, useLocation } from "wouter";
import { ShoppingCart, Search, Menu, Heart, Bell, Hexagon } from "lucide-react";
import { useCart } from "@/lib/cart";
import { useWishlist } from "@/lib/wishlist";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LoginModal } from "@/components/auth/LoginModal";
import { useAuth } from "@/lib/auth";

export function Navbar() {
  const { count, setIsOpen: setIsCartOpen } = useCart();
  const { items: wishlistItems, setIsOpen: setIsWishlistOpen } = useWishlist();
  const [location] = useLocation();
  const { user } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "glass h-20 shadow-lg border-b border-white/10" : "bg-transparent h-24"
    )}>
      <div className="container mx-auto px-6 h-full flex items-center gap-8">
        
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] glass border-r border-white/20">
              <div className="flex flex-col gap-8 mt-8">
                <Link href="/" className="flex items-center gap-2">
                  <Hexagon className="h-8 w-8 text-primary fill-primary/20" />
                  <span className="text-2xl font-black tracking-tighter">PRISMA</span>
                </Link>
                <div className="flex flex-col gap-6 text-lg font-medium text-gray-600">
                  <Link href="/">Home</Link>
                  <Link href="/shop">All Products</Link>
                  <Link href="/shop?category=Men">Fashion</Link>
                  <Link href="/shop?category=Electronics">Electronics</Link>
                  <Link href="/shop?category=Accessories">Accessories</Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Link href="/" className="flex-shrink-0 group">
          <div className="flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
            <div className="relative">
              <Hexagon className="h-8 w-8 text-primary fill-primary/20 stroke-[2.5px]" />
              <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent tracking-tighter">
              PRISMA
            </span>
          </div>
        </Link>

        {/* Search Bar - Floating Style */}
        <div className="flex-1 max-w-2xl hidden md:block group">
          <div className="relative transition-all duration-300 transform focus-within:scale-[1.02]">
            <Input 
              className="w-full bg-white/50 backdrop-blur-md border-white/50 rounded-2xl h-12 pl-12 pr-6 focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:bg-white transition-all shadow-sm hover:shadow-lg hover:bg-white/80"
              placeholder="Search for something extraordinary..."
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          
          <LoginModal trigger={
             <Button variant="ghost" className="rounded-full px-6 font-bold text-gray-700 hover:text-primary hover:bg-primary/5 transition-all">
               Sign In
             </Button>
          } />

          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full h-10 w-10 text-gray-600 hover:text-red-500 hover:bg-red-50 relative transition-all hover:scale-110"
            onClick={() => setIsWishlistOpen(true)}
          >
             <Heart className={cn("h-5 w-5", wishlistItems.length > 0 && "fill-current text-red-500")} />
             {wishlistItems.length > 0 && (
               <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white animate-pulse" />
             )}
          </Button>

          <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 text-gray-600 hover:text-primary hover:bg-blue-50 relative hover:scale-110 transition-all">
             <Bell className="h-5 w-5" />
             <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-orange-400 border border-white" />
          </Button>

          <button 
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full hover:bg-primary transition-all shadow-xl hover:shadow-primary/30 active:scale-95 ml-2 group"
          >
            <ShoppingCart className="h-4 w-4 group-hover:animate-bounce" />
            <span className="font-bold text-sm">Bag</span>
            {count > 0 && (
              <span className="bg-white text-black text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full">
                {count}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Cart */}
        <div className="flex md:hidden items-center gap-4 ml-auto">
          <Search className="h-6 w-6 text-gray-600" />
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative"
          >
            <ShoppingCart className="h-6 w-6 text-gray-600" />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-primary text-white text-[10px] flex items-center justify-center font-bold">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

