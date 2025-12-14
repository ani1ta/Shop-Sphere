import { Link, useLocation } from "wouter";
import { ShoppingCart, Search, User, Store, MoreVertical, Menu } from "lucide-react";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
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

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center gap-4 md:gap-8">
        
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <div className="flex flex-col gap-6 mt-6">
                <Link href="/" className="text-xl font-bold text-primary italic">Shopping Hub</Link>
                <div className="flex flex-col gap-4 text-base font-medium">
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
          <div className="flex flex-col leading-none">
            <span className="text-xl md:text-2xl font-bold text-primary italic tracking-tight">Shopping Hub</span>
            <span className="text-[10px] text-gray-400 font-medium italic hover:underline">Explore <span className="text-secondary font-bold">Plus</span></span>
          </div>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl hidden md:block">
          <div className="relative">
            <Input 
              className="w-full bg-blue-50/50 border-none rounded-sm h-9 pl-4 pr-10 focus-visible:ring-0 placeholder:text-gray-500 shadow-sm"
              placeholder="Search for Products, Brands and More"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          
          <LoginModal />

          <div className="group relative cursor-pointer flex items-center gap-1 hover:text-primary transition-colors">
             <span>More</span>
             <MoreVertical className="h-4 w-4 rotate-90" />
          </div>

          <button 
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 hover:text-primary transition-colors relative"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Cart</span>
            {count > 0 && (
              <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center font-bold">
                {count}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Search & Cart */}
        <div className="flex md:hidden items-center gap-4 ml-auto">
          <Search className="h-5 w-5 text-gray-600" />
          <button 
            onClick={() => setIsOpen(true)}
            className="relative"
          >
            <ShoppingCart className="h-5 w-5 text-gray-600" />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center font-bold">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
