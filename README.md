# 🛍️ PRISMA - Premium E-Commerce Platform

**PRISMA** is a sophisticated, premium e-commerce platform featuring a bold dark theme with striking orange accents. Experience curated fashion, footwear, and accessories through a beautifully designed, fully responsive interface.

---

## ✨ Brand Identity

**PRISMA** represents the pinnacle of online shopping—a premium platform headquartered in **Mumbai, India**. 

### The Logo
Our signature logo features a distinctive **orange rounded square** with a **black star symbol** (✦), representing elegance, precision, and luxury.

---

## 🎨 Design Highlights

### Color Palette
- **Primary Background**: Navy/Slate-900 & Black for dark, premium feel
- **Accent Color**: Orange-400/Orange-500 for bold, eye-catching highlights
- **Text**: White & Light Gray for excellent contrast

### Typography
- **Display Font**: Playfair Display (serif) for headings and brand elements
- **Body Font**: Inter (sans-serif) for clean, readable content

### Visual Experience
- **Dark Theme**: Navy and black backgrounds create a luxury aesthetic
- **Orange Accents**: Strategic use of #ff8c00 (orange-400) throughout the interface
- **Responsive Design**: Fully optimized for mobile (sm), tablet (md), and desktop (lg/xl)
- **Micro-interactions**: Smooth transitions, hover effects, and animations

---

## 🛒 Features

### Product Showcase
- **Responsive Grid Layouts**: 
  - Mobile: 2 columns
  - Tablet: 3 columns
  - Desktop: 4-5 columns
- **Product Cards**: Detailed product information with images, pricing, and ratings
- **Category Filtering**: Browse fashion, footwear, and accessories by category

### Shopping Functionality
- **Shopping Cart**: Add/remove items with quantity adjustments
- **Wishlist**: Save favorite items for later
- **Product Details**: Comprehensive product pages with descriptions, images, and reviews
- **Checkout**: Streamlined purchase experience

### Navigation
- **Responsive Navbar**: Adaptive menu for all screen sizes
- **Mobile Menu**: Hamburger menu with full navigation
- **Footer Navigation**: Quick links to shop, about, contact
- **Category Links**: Direct access to product categories

---

## 🏗️ Project Structure

```
client/
├── src/
│   ├── pages/
│   │   ├── home.tsx          # Home/landing page
│   │   ├── shop.tsx          # Shop page with product listings
│   │   └── product.tsx       # Individual product detail page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx    # Navigation with logo
│   │   │   └── Footer.tsx    # Footer with logo and links
│   │   ├── CartDrawer.tsx    # Shopping cart sidebar
│   │   ├── WishlistDrawer.tsx # Wishlist sidebar
│   │   ├── product-card.tsx  # Product card component
│   │   └── ui/               # Shadcn UI components
│   ├── App.tsx               # Main app component with routing
│   └── main.tsx              # Entry point
├── index.html                # HTML template with meta tags
└── styles/                   # Global styles

public/
└── favicon.png              # PRISMA orange star logo
```

---

## 🚀 Technology Stack

- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom configurations
- **Routing**: Wouter for client-side navigation
- **Icons**: Lucide React for consistent iconography
- **UI Components**: Radix UI with Shadcn UI
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds
- **Animations**: Framer Motion for smooth transitions

---

## 📱 Responsive Breakpoints

PRISMA is built mobile-first with Tailwind breakpoints:

| Breakpoint | Size | Usage |
|-----------|------|-------|
| **sm** | 640px | Small phones |
| **md** | 768px | Tablets |
| **lg** | 1024px | Laptops |
| **xl** | 1280px | Large screens |

All components adapt seamlessly across these breakpoints.

---

## 🎯 Key Pages

### Home Page (`/`)
- Hero banner with PRISMA branding
- Featured products section
- Category highlights
- Call-to-action buttons

### Shop Page (`/shop`)
- Complete product catalog
- Category filtering
- Product grid with responsive layout
- Add to cart/wishlist from listings

### Product Detail Page (`/product/:id`)
- Detailed product information
- Product images and specifications
- Customer reviews and ratings
- Add to cart with quantity selector
- Similar products recommendation

---

## 🎨 Customization

### Updating Colors
Modify the Tailwind theme in `tailwind.config.js`:
```javascript
orange: '#ff8c00' // PRISMA primary accent
```

### Changing Typography
Update font imports in `client/index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter&display=swap" rel="stylesheet">
```

### Adding Products
Update the mock product data in component state or props.

---

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev:client
```

### Build
```bash
npm run build
```

---

## 📍 Location

**PRISMA** is headquartered in **Mumbai, India** and proudly serves customers globally.

---

## 📝 Design Philosophy

PRISMA embodies:
- **Premium Aesthetics**: Luxury dark theme with sophisticated design
- **User-Centric**: Intuitive navigation and seamless shopping experience
- **Responsive Excellence**: Perfect experience on every device
- **Performance**: Fast loading, smooth interactions, optimized assets
- **Accessibility**: Clear typography, sufficient contrast, keyboard navigation

---

## 🌟 Features in Development

- User accounts and authentication
- Order history and tracking
- Payment gateway integration
- Customer reviews and ratings
- Wishlist persistence
- Personalized recommendations

---

## 📄 License

This project is part of the PRISMA premium e-commerce initiative.

---

**Experience Premium Shopping with PRISMA** 🛍️✨
