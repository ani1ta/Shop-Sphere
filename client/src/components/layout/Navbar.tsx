import { Link, useLocation } from "wouter";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const { count, setIsOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location === "/";

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled || !isHome
          ? "bg-background/80 backdrop-blur-md border-border py-4"
          : "bg-transparent py-6 text-white"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(scrolled || !isHome ? "text-foreground" : "text-white")}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-10">
                <Link href="/" className="text-2xl font-serif">LUMIÈRE</Link>
                <div className="flex flex-col gap-4 text-lg">
                  <Link href="/">Home</Link>
                  <Link href="/shop">Shop All</Link>
                  <Link href="/shop?category=Men">Men</Link>
                  <Link href="/shop?category=Women">Women</Link>
                  <Link href="/shop?category=Accessories">Accessories</Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Link href="/" className={cn(
          "text-2xl md:text-3xl font-serif font-bold tracking-tighter transition-colors",
          scrolled || !isHome ? "text-primary" : "text-white"
        )}>
          LUMIÈRE
        </Link>

        {/* Desktop Links */}
        <div className={cn(
          "hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase transition-colors",
          scrolled || !isHome ? "text-foreground" : "text-white/90"
        )}>
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <Link href="/shop?category=Men" className="hover:text-primary transition-colors">Men</Link>
          <Link href="/shop?category=Women" className="hover:text-primary transition-colors">Women</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className={cn("relative", scrolled || !isHome ? "text-foreground hover:bg-secondary" : "text-white hover:bg-white/10")}
            onClick={() => setIsOpen(true)}
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-bold">
                {count}
              </span>
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}
