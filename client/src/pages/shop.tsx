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

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    if (category && filters.includes(category)) {
      setActiveFilter(category);
    } else {
      setActiveFilter("All");
    }
    setCurrentPage(1);
  }, [location]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    const newUrl = filter === "All" ? "/shop" : `/shop?category=${filter}`;
    window.history.pushState(null, "", newUrl);
    setCurrentPage(1);
  };

  const filteredProducts = useMemo(() => {
    let result = products;

    if (activeFilter !== "All") {
      result = result.filter(p => p.category === activeFilter);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q)
      );
    }

    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (sortOrder === "price-asc") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-desc") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortOrder === "newest") {
      result = [...result].sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
    }

    return result;
  }, [activeFilter, sortOrder, searchQuery, priceRange]);

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
      
      <div className="pt-2 pb-20">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-6 mb-12"
        >
          <div className="text-center">
            <span className="text-orange-400 font-bold tracking-widest uppercase text-sm block mb-3">Collection</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-3">Shop All Products</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover {products.length} premium items curated for you
            </p>
          </div>
        </motion.div>

        {/* Filters & Controls */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="container mx-auto px-6 mb-10"
        >
          <div className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 border border-gray-800 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Mobile Filter */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="md:hidden w-full bg-orange-400 text-black hover:bg-orange-500 font-bold rounded-lg">
                    <SlidersHorizontal className="h-4 w-4 mr-2" /> Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-gray-950 border-gray-800">
                  <SheetHeader>
                    <SheetTitle className="text-white text-xl font-black">Filters & Sort</SheetTitle>
                  </SheetHeader>
                  <div className="mt-8 space-y-8">
                    <div>
                      <h3 className="text-white font-bold mb-3">Category</h3>
                      <div className="flex flex-wrap gap-2">
                        {filters.map((filter) => (
                          <button
                            key={filter}
                            onClick={() => handleFilterChange(filter)}
                            className={cn(
                              "px-3 py-2 text-xs uppercase tracking-widest rounded-lg border font-bold transition-all",
                              activeFilter === filter
                                ? "bg-orange-400 text-black border-orange-400"
                                : "border-gray-700 text-gray-400 hover:border-orange-400"
                            )}
                          >
                            {filter}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-3">Price: ₹{priceRange[0]} - ₹{priceRange[1]}</h3>
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

              {/* Desktop Categories */}
              <div className="hidden md:flex md:col-span-5 gap-2 flex-wrap items-center">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => handleFilterChange(filter)}
                    className={cn(
                      "px-4 py-2 text-xs uppercase tracking-widest rounded-lg border font-bold transition-all whitespace-nowrap",
                      activeFilter === filter
                        ? "bg-orange-400 text-black border-orange-400"
                        : "border-gray-700 text-gray-400 hover:border-orange-400"
                    )}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="md:col-span-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input 
                    placeholder="Search..." 
                    className="pl-9 bg-gray-800 border-gray-700 text-white placeholder-gray-500 rounded-lg focus-visible:border-orange-400 focus-visible:ring-orange-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Sort */}
              <div className="md:col-span-3">
                <Select value={sortOrder} onValueChange={setSortOrder}>
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white rounded-lg">
                    <SelectValue placeholder="Sort" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-gray-800">
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-asc">Low to High</SelectItem>
                    <SelectItem value="price-desc">High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <div className="container mx-auto px-6 mb-6">
          <p className="text-gray-400 text-sm">
            Showing <span className="text-orange-400 font-bold">{paginatedProducts.length}</span> of <span className="text-orange-400 font-bold">{filteredProducts.length}</span> products
          </p>
        </div>

        {/* Products Grid */}
        <div className="container mx-auto px-6 mb-16">
          {filteredProducts.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-400 text-lg mb-6">No products found</p>
              <Button 
                onClick={() => {
                  setSearchQuery("");
                  setPriceRange([0, 3000]);
                  setActiveFilter("All");
                }}
                className="bg-orange-400 text-black hover:bg-orange-500 font-bold rounded-lg"
              >
                Clear Filters
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container mx-auto px-6 flex justify-center items-center gap-4"
          >
            <Button
              onClick={() => {
                setCurrentPage(p => Math.max(1, p - 1));
                scrollToTop();
              }}
              disabled={currentPage === 1}
              className={cn(
                "rounded-lg px-4 py-2 border font-bold transition-all",
                currentPage === 1 
                  ? "border-gray-700 text-gray-600 bg-transparent cursor-not-allowed" 
                  : "border-orange-400 text-orange-400 bg-transparent hover:bg-orange-400 hover:text-black"
              )}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    scrollToTop();
                  }}
                  className={cn(
                    "h-9 w-9 rounded-lg font-bold transition-all text-sm",
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
                "rounded-lg px-4 py-2 border font-bold transition-all",
                currentPage === totalPages 
                  ? "border-gray-700 text-gray-600 bg-transparent cursor-not-allowed" 
                  : "border-orange-400 text-orange-400 bg-transparent hover:bg-orange-400 hover:text-black"
              )}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
