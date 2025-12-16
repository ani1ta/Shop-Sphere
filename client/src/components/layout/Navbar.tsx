import { Link, useLocation } from "wouter";
import { ShoppingCart, Search, Menu, Heart, Hexagon } from "lucide-react";
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
      scrolled 
        ? "bg-gray-950/95 backdrop-blur-xl border-b border-gray-800 h-20 shadow-lg" 
        : "bg-gradient-to-b from-black to-transparent h-24"
    )}>
      <div className="container mx-auto px-6 h-full flex items-center gap-6">
        
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-gray-950 border-r border-gray-800">
              <div className="flex flex-col gap-8 mt-8">
                <Link href="/" className="flex items-center gap-2">
                  <div className="h-8 w-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center font-black text-black text-sm">
                    P
                  </div>
                  <span className="text-2xl font-black text-white tracking-tighter">PRISMA</span>
                </Link>
                <div className="flex flex-col gap-6 text-lg font-bold text-gray-300">
                  <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
                  <Link href="/about" className="hover:text-orange-400 transition-colors">About</Link>
                  <Link href="/contact" className="hover:text-orange-400 transition-colors">Contact</Link>
                  <Link href="/blog" className="hover:text-orange-400 transition-colors">Blog</Link>
                  <Link href="/shop" className="hover:text-orange-400 transition-colors">Shop</Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Link href="/" className="flex-shrink-0 group">
          <div className="flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
            <div className="h-8 w-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center font-black text-black text-base group-hover:brightness-110 transition-all">
              P
            </div>
            <span className="text-2xl font-black text-white tracking-tighter">PRISMA</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-300 hover:text-orange-400 font-bold transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-orange-400 font-bold transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-orange-400 font-bold transition-colors">
            Contact
          </Link>
          <Link href="/blog" className="text-gray-300 hover:text-orange-400 font-bold transition-colors">
            Blog
          </Link>
        </div>

        {/* Search Bar - Hidden on Mobile */}
        <div className="flex-1 max-w-xl hidden lg:block group">
          <div className="relative transition-all duration-300">
            <Input 
              className="w-full bg-gray-800/50 border border-gray-700 rounded-full h-11 pl-12 pr-6 text-white placeholder-gray-500 hover:border-orange-400/50 focus-visible:ring-1 focus-visible:ring-orange-400 focus-visible:border-orange-400 transition-all"
              placeholder="Search fashion..."
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 group-focus-within:text-orange-400 transition-colors" />
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          
          <LoginModal trigger={
             <Button className="rounded-full px-6 font-bold text-gray-300 hover:text-white hover:bg-orange-400/20 transition-all bg-transparent border border-transparent hover:border-orange-400">
               Sign In
             </Button>
          } />

          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full h-10 w-10 text-gray-400 hover:text-orange-400 relative transition-all hover:scale-110"
            onClick={() => setIsWishlistOpen(true)}
          >
             <Heart className={cn("h-5 w-5", wishlistItems.length > 0 && "fill-current text-orange-400")} />
             {wishlistItems.length > 0 && (
               <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-orange-400 border-2 border-gray-950 animate-pulse" />
             )}
          </Button>

          <button 
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-3 bg-orange-400 text-black px-6 py-3 rounded-full hover:bg-orange-500 transition-all shadow-lg hover:shadow-orange-500/30 active:scale-95 ml-2 group font-bold"
          >
            <ShoppingCart className="h-5 w-5 group-hover:animate-bounce" />
            <span className="hidden sm:inline">Bag</span>
            {count > 0 && (
              <span className="bg-black text-orange-400 text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full">
                {count}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Cart */}
        <div className="flex md:hidden items-center gap-3 ml-auto">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full h-10 w-10 text-gray-400 hover:text-orange-400 relative"
            onClick={() => setIsWishlistOpen(true)}
          >
             <Heart className={cn("h-5 w-5", wishlistItems.length > 0 && "fill-current text-orange-400")} />
          </Button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative"
          >
            <ShoppingCart className="h-6 w-6 text-gray-400 hover:text-orange-400 transition-colors" />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-orange-400 text-black text-[10px] flex items-center justify-center font-bold">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
