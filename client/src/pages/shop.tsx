import { Navbar } from "@/components/layout/Navbar";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { ProductCard } from "@/components/ui/product-card";
import { products } from "@/lib/products";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";

const filters = ["All", "Men", "Women", "Footwear", "Accessories"];

export default function Shop() {
  const [location] = useLocation();
  const [activeFilter, setActiveFilter] = useState("All");

  // Sync state with URL query params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    if (category && filters.includes(category)) {
      setActiveFilter(category);
    } else {
      setActiveFilter("All");
    }
  }, [location]); // Re-run when wouter location updates (navigation)

  const filteredProducts = activeFilter === "All" 
    ? products 
    : products.filter(p => p.category === activeFilter);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    // Optional: update URL without reloading
    const newUrl = filter === "All" ? "/shop" : `/shop?category=${filter}`;
    window.history.pushState(null, "", newUrl);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />
      
      <div className="pt-32 pb-12 container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-serif text-center mb-6">The Collection</h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          Explore our latest arrivals, featuring timeless silhouettes and premium materials designed for the modern wardrobe.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={cn(
                "px-6 py-2 text-sm uppercase tracking-widest transition-all",
                activeFilter === filter
                  ? "bg-primary text-white"
                  : "bg-transparent text-muted-foreground hover:text-foreground border border-transparent hover:border-border"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No products found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
