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
import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-gray-900 to-black">
      <Navbar />
      <CartDrawer />
      
      <div className="pt-28 pb-20 container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="text-orange-400 font-bold tracking-widest uppercase text-sm block mb-4">Collection</span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">Premium Products</h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Explore our curated collection of {products.length} premium items
          </p>
        </motion.div>

        {/* Controls Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 sticky top-24 z-30 bg-gradient-to-r from-gray-950 via-black to-gray-950 backdrop-blur-xl py-4 px-6 rounded-2xl border border-gray-800"
        >
          
          {/* Mobile Filter Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden w-full flex gap-2 bg-orange-400 text-black hover:bg-orange-500 font-bold">
                <SlidersHorizontal className="h-4 w-4" /> Filters & Sort
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-gray-950 border-gray-800">
              <SheetHeader>
                <SheetTitle className="text-white text-2xl font-black">Filters</SheetTitle>
              </SheetHeader>
              <div className="mt-8 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-white font-bold">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {filters.map((filter) => (
                      <button
                        key={filter}
                        onClick={() => handleFilterChange(filter)}
                        className={cn(
                          "px-4 py-2 text-xs uppercase tracking-widest border rounded-lg transition-all font-bold",
                          activeFilter === filter
                            ? "bg-orange-400 text-black border-orange-400"
                            : "border-gray-700 text-gray-400 hover:text-orange-400"
                        )}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-white font-bold">Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</h3>
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
          <div className="hidden md:flex gap-2 overflow-x-auto pb-0 no-scrollbar">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={cn(
                  "px-5 py-2 text-xs uppercase tracking-widest transition-all border rounded-lg font-bold whitespace-nowrap",
                  activeFilter === filter
                    ? "bg-orange-400 text-black border-orange-400"
                    : "border-gray-700 text-gray-400 hover:text-white hover:border-orange-400"
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input 
                placeholder="Search products..." 
                className="pl-9 bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus-visible:border-orange-400 focus-visible:ring-orange-400 rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Sort */}
            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger className="w-full md:w-[180px] bg-gray-800 border-gray-700 text-white rounded-lg">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-800">
                <SelectItem value="featured" className="text-white">Featured</SelectItem>
                <SelectItem value="newest" className="text-white">Newest Arrivals</SelectItem>
                <SelectItem value="price-asc" className="text-white">Price: Low to High</SelectItem>
                <SelectItem value="price-desc" className="text-white">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Products Count */}
        <div className="mb-6 text-sm text-gray-400 font-medium">
          Showing <span className="text-orange-400 font-bold">{paginatedProducts.length}</span> of <span className="text-orange-400 font-bold">{filteredProducts.length}</span> products
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-[500px] mb-12">
          {paginatedProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-lg text-gray-400 mb-6">No products match your criteria.</p>
            <Button 
              onClick={() => {
                setSearchQuery("");
                setPriceRange([0, 3000]);
                setActiveFilter("All");
              }}
              className="bg-orange-400 text-black hover:bg-orange-500 font-bold rounded-full px-8"
            >
              Clear all filters
            </Button>
          </motion.div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center items-center gap-6 mt-16"
          >
            <Button
              onClick={() => {
                setCurrentPage(p => Math.max(1, p - 1));
                scrollToTop();
              }}
              disabled={currentPage === 1}
              className={cn(
                "rounded-full p-3 border transition-all",
                currentPage === 1 
                  ? "border-gray-700 text-gray-600 cursor-not-allowed" 
                  : "border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black"
              )}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-4">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    scrollToTop();
                  }}
                  className={cn(
                    "h-10 w-10 rounded-full font-bold transition-all",
                    currentPage === page
                      ? "bg-orange-400 text-black"
                      : "border border-gray-700 text-gray-400 hover:border-orange-400 hover:text-orange-400"
                  )}
                >
                  {page}
                </button>
              ))}
            </div>

            <Button
              onClick={() => {
                setCurrentPage(p => Math.min(totalPages, p + 1));
                scrollToTop();
              }}
              disabled={currentPage === totalPages}
              className={cn(
                "rounded-full p-3 border transition-all",
                currentPage === totalPages 
                  ? "border-gray-700 text-gray-600 cursor-not-allowed" 
                  : "border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black"
              )}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
