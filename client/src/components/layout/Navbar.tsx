import { Link, useLocation } from "wouter";
import { ShoppingCart, Search, Menu, Heart, Bell } from "lucide-react";
import { useCart } from "@/lib/cart";
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
  const { count, setIsOpen } = useCart();
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
      scrolled ? "glass h-16 shadow-sm" : "bg-transparent h-20"
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
            <SheetContent side="left" className="w-[300px] glass">
              <div className="flex flex-col gap-8 mt-8">
                <Link href="/" className="text-2xl font-bold text-primary tracking-tight">Shopping Hub</Link>
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
        <Link href="/" className="flex-shrink-0">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent tracking-tight">
            Shopping Hub
          </span>
        </Link>

        {/* Search Bar - Floating Style */}
        <div className="flex-1 max-w-2xl hidden md:block group">
          <div className="relative transition-all duration-300 transform focus-within:scale-[1.02]">
            <Input 
              className="w-full bg-gray-100/50 border-transparent rounded-full h-11 pl-12 pr-6 focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:bg-white transition-all shadow-inner hover:bg-white hover:shadow-md"
              placeholder="Search for products, brands and more..."
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          
          <LoginModal trigger={
             <Button variant="ghost" className="rounded-full px-6 font-medium text-gray-700 hover:text-primary hover:bg-blue-50">
               Login
             </Button>
          } />

          <Button variant="ghost" size="icon" className="rounded-full text-gray-600 hover:text-primary hover:bg-blue-50">
             <Heart className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" className="rounded-full text-gray-600 hover:text-primary hover:bg-blue-50">
             <Bell className="h-5 w-5" />
          </Button>

          <button 
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-full hover:bg-primary transition-all shadow-lg hover:shadow-primary/30 active:scale-95 ml-2"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="font-medium text-sm">Cart</span>
            {count > 0 && (
              <span className="bg-white text-primary text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                {count}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Cart */}
        <div className="flex md:hidden items-center gap-4 ml-auto">
          <Search className="h-6 w-6 text-gray-600" />
          <button 
            onClick={() => setIsOpen(true)}
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
