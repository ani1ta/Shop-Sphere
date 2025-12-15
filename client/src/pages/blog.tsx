import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Fashion Trends for 2025",
      excerpt: "Discover the hottest fashion trends that are dominating the runway and street style this season.",
      date: "Dec 15, 2025",
      author: "Sarah Fashion",
      image: "🌟",
      category: "Fashion",
    },
    {
      id: 2,
      title: "How to Build Your Perfect Wardrobe",
      excerpt: "Learn the essentials and tips for curating a timeless wardrobe that works for any occasion.",
      date: "Dec 12, 2025",
      author: "Alex Style",
      image: "👔",
      category: "Style Guide",
    },
    {
      id: 3,
      title: "Sustainable Fashion: Making a Difference",
      excerpt: "Explore how sustainable fashion is changing the industry and how you can make eco-friendly choices.",
      date: "Dec 10, 2025",
      author: "Emma Green",
      image: "🌿",
      category: "Sustainability",
    },
    {
      id: 4,
      title: "Winter Accessories You Need",
      excerpt: "Complete your winter look with these must-have accessories that combine style and warmth.",
      date: "Dec 8, 2025",
      author: "Mike Trends",
      image: "❄️",
      category: "Accessories",
    },
    {
      id: 5,
      title: "The Art of Layering",
      excerpt: "Master the technique of layering to create versatile and fashionable outfits for any weather.",
      date: "Dec 5, 2025",
      author: "Lisa Fashion",
      image: "🎨",
      category: "Fashion Tips",
    },
    {
      id: 6,
      title: "Interview: Meet Our Top Designers",
      excerpt: "Exclusive interview with the creative minds behind PRISMA's most popular collections.",
      date: "Dec 1, 2025",
      author: "Julia Stories",
      image: "🎤",
      category: "Interviews",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-gray-900 to-black pb-20">
      <Navbar />

      <div className="pt-32 md:pt-40">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-orange-400 font-bold tracking-widest uppercase text-sm block mb-4">The PRISMA Blog</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Style, Trends & <span className="text-orange-400">Inspiration</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed">
              Stay updated with the latest fashion trends, styling tips, and exclusive insights from the PRISMA community.
            </p>
          </motion.div>
        </section>

        {/* Featured Post */}
        <section className="container mx-auto px-4 mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl overflow-hidden p-8 md:p-12 min-h-[400px] flex flex-col justify-between group"
          >
            <div>
              <span className="inline-block bg-white/20 text-white text-xs font-bold px-4 py-1 rounded-full mb-6">Featured</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                {blogPosts[0].title}
              </h2>
              <p className="text-white/90 text-lg mb-6">{blogPosts[0].excerpt}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                  {blogPosts[0].image}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{blogPosts[0].author}</p>
                  <p className="text-white/70 text-xs">{blogPosts[0].date}</p>
                </div>
              </div>
              <Button className="bg-white text-orange-600 hover:bg-gray-100 rounded-full px-6 font-bold">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Blog Grid */}
        <section className="container mx-auto px-4 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-orange-400 transition-all group cursor-pointer"
              >
                <div className="h-40 bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                  {post.image}
                </div>
                <div className="p-6">
                  <span className="text-orange-400 font-bold text-xs uppercase tracking-wider">{post.category}</span>
                  <h3 className="text-xl font-bold text-white mt-3 mb-3 leading-tight group-hover:text-orange-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-2">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="flex items-center gap-3">
                      <User className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-400 text-xs">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span className="text-xs">{post.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="w-full bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 py-16 px-4 my-24"
        >
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Subscribe to Our Blog</h2>
            <p className="text-black/80 text-lg mb-8 max-w-xl mx-auto">
              Get the latest fashion tips, trends, and exclusive insights delivered to your inbox every week.
            </p>
            <div className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none font-medium"
              />
              <Button className="bg-black text-white hover:bg-gray-900 rounded-full px-8 font-bold">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
}
