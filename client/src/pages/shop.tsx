import { Navbar } from "@/components/layout/Navbar";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { ProductCard } from "@/components/ui/product-card";
import { products } from "@/lib/products";
import { useState, useEffect, useMemo } from "react";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight, Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const filters = ["All", "Men", "Women", "Footwear", "Accessories"];
const ITEMS_PER_PAGE = 12;

export default function Shop() {
  const [location] = useLocation();
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 3000]);

  // Sync state with URL query params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    if (category && filters.includes(category)) {
      setActiveFilter(category);
    } else {
      setActiveFilter("All");
    }
    setCurrentPage(1); // Reset page on filter change
  }, [location]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    const newUrl = filter === "All" ? "/shop" : `/shop?category=${filter}`;
    window.history.pushState(null, "", newUrl);
    setCurrentPage(1);
  };

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    let result = products;

    // Category Filter
    if (activeFilter !== "All") {
      result = result.filter(p => p.category === activeFilter);
    }

    // Search Filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q)
      );
    }

    // Price Filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sorting
    if (sortOrder === "price-asc") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-desc") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortOrder === "newest") {
      result = [...result].sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
    }

    return result;
  }, [activeFilter, sortOrder, searchQuery, priceRange]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />
      
      <div className="pt-32 pb-12 container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">The Collection</h1>
          <p className="text-muted-foreground max-w-2xl">
            Explore our extensive catalog of {products.length} curated luxury items.
          </p>
        </div>

        {/* Desktop Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 sticky top-24 z-30 bg-background/95 backdrop-blur-sm py-4 border-b border-border/50">
          
          {/* Mobile Filter Sheet Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden w-full flex gap-2">
                <SlidersHorizontal className="h-4 w-4" /> Filters & Sort
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="font-serif text-2xl">Filters</SheetTitle>
              </SheetHeader>
              <div className="mt-8 space-y-8">
                <div className="space-y-4">
                  <h3 className="font-medium">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {filters.map((filter) => (
                      <button
                        key={filter}
                        onClick={() => handleFilterChange(filter)}
                        className={cn(
                          "px-4 py-2 text-xs uppercase tracking-widest border transition-all",
                          activeFilter === filter
                            ? "bg-primary text-white border-primary"
                            : "border-border text-muted-foreground"
                        )}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-medium">Price Range: ${priceRange[0]} - ${priceRange[1]}</h3>
                  <Slider
                    defaultValue={[0, 3000]}
                    max={3000}
                    step={50}
                    value={priceRange}
                    onValueChange={setPriceRange}
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Categories (Desktop) */}
          <div className="hidden md:flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={cn(
                  "px-5 py-2 text-xs uppercase tracking-widest transition-all border",
                  activeFilter === filter
                    ? "bg-primary text-white border-primary"
                    : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
             {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search collection..." 
                className="pl-9 bg-secondary/20 border-border"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Sort */}
            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="newest">Newest Arrivals</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 min-h-[500px]">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg">No products match your criteria.</p>
            <Button 
              variant="link" 
              onClick={() => {
                setSearchQuery("");
                setPriceRange([0, 3000]);
                setActiveFilter("All");
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-20">
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                setCurrentPage(p => Math.max(1, p - 1));
                scrollToTop();
              }}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="text-sm font-medium tracking-wide">
              Page {currentPage} of {totalPages}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                setCurrentPage(p => Math.min(totalPages, p + 1));
                scrollToTop();
              }}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
        
        <div className="text-center mt-6 text-xs text-muted-foreground">
          Showing {paginatedProducts.length} of {filteredProducts.length} items
        </div>
      </div>
    </div>
  );
}
