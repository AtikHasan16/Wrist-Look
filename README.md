# 🕐 WristLook - Premium Watch E-Commerce Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.17-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb)](https://www.mongodb.com/)

A modern, full-stack e-commerce platform for browsing and managing premium watches. Built with the latest Next.js 16 App Router, featuring server-side rendering, optimized image loading, authentication, and a beautiful UI powered by DaisyUI.

![WristLook Website Banner](/public/wristLook_banner.png)

---

## � Screenshots

<div align="center">

### Homepage with Hero Section

![Homepage](/public/Readme_homepage.png)

### All Watches Gallery

![Watches Grid](/public/watches.png)

### Watch Detail Page

![Watch Details](/public/watch_details.png)

### Product Management Dashboard

![Manage Products](/public/manage_products.png)

</div>

---

## ✨ Features

### 🛍️ E-Commerce Functionality

- **Product Catalog** - Browse premium watch collection with high-quality images
- **Detailed Product Pages** - Comprehensive watch details including price, brand, features, and stock status
- **Search & Filter** - Search watches and filter by category (Men, Women, Kids)
- **Trending Section** - Showcase featured and trending watches on homepage

### 🔐 Authentication & Authorization

- **NextAuth v5** - Secure authentication system with Google OAuth
- **Protected Routes** - Admin-only access to product management features
- **Session Management** - Persistent user sessions with avatar display

### 📦 Product Management

- **Add Products** - Create new watch listings with detailed information
- **Manage Inventory** - Edit and delete products through intuitive dashboard
- **Stock Tracking** - Real-time stock availability indicators
- **Image Upload** - Support for external image URLs

### 🎨 User Experience

- **Responsive Design** - Mobile-first approach, works seamlessly on all devices
- **Loading States** - React Spinners (MoonLoader) for route transitions and data fetching
- **Lazy Loading** - Optimized image loading for better performance on slow networks
- **Smooth Animations** - Hover effects, transitions, and scroll-triggered navbar blur
- **Toast Notifications** - React Hot Toast for user feedback
- **Sweet Alerts** - Beautiful confirmation dialogs for destructive actions

### ⚡ Performance Optimizations

- **Next.js Image Optimization** - Automatic WebP/AVIF format conversion
- **Server Components** - Reduced client-side JavaScript
- **Lazy Loading Images** - Images load only when entering viewport
- **Font Optimization** - Next.js font loading with Oxanium and Sawarabi Gothic

---

## 🛠️ Tech Stack

### Frontend

- **Framework** - [Next.js 16.0.3](https://nextjs.org/) with App Router
- **UI Library** - [React 19.2.0](https://react.dev/)
- **Styling** - [TailwindCSS 4.1.17](https://tailwindcss.com/) + [DaisyUI 5.5.5](https://daisyui.com/)
- **Icons** - [React Icons 5.5.0](https://react-icons.github.io/react-icons/)
- **Loading Spinners** - [React Spinners 0.17.0](https://www.davidhu.io/react-spinners/)

### Backend & Database

- **Authentication** - [NextAuth v5.0.0-beta.30](https://next-auth.js.org/)
- **Database** - [MongoDB](https://www.mongodb.com/) (via Vercel deployment)
- **HTTP Client** - [Axios 1.13.2](https://axios-http.com/)

### UI/UX Libraries

- **Notifications** - [React Hot Toast 2.6.0](https://react-hot-toast.com/)
- **Modals** - [SweetAlert2 11.26.3](https://sweetalert2.github.io/)

### Development Tools

- **Linting** - ESLint 9 with Next.js config
- **Compiler** - Babel React Compiler 1.0.0

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm/yarn/pnpm** package manager
- **MongoDB** database (MongoDB Atlas recommended)
- **Google OAuth Credentials** (for authentication)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/AtikHasan16/Wrist-Look.git
   cd wristlook-cl
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # NextAuth Configuration
   AUTH_SECRET=your-secret-key-here
   AUTH_GOOGLE_ID=your-google-client-id
   AUTH_GOOGLE_SECRET=your-google-client-secret

   # MongoDB Connection
   MONGODB_URI=your-mongodb-connection-string

   # API URL (for development)
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

---

## � Project Structure

```
wristlook-cl/
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── actions/             # Server actions
│   │   ├── api/                 # API routes
│   │   ├── about/               # About page
│   │   ├── add-product/         # Add product page (protected)
│   │   ├── contact/             # Contact page
│   │   ├── login/               # Login page
│   │   ├── manage-products/     # Product management (protected)
│   │   ├── watches/             # Watches listing & details
│   │   │   ├── [id]/           # Dynamic watch detail page
│   │   │   ├── page.jsx        # All watches page
│   │   │   └── loading.js      # Loading state
│   │   ├── globals.css          # Global styles
│   │   ├── layout.js            # Root layout with fonts
│   │   ├── loading.js           # Global loading state
│   │   ├── not-found.jsx        # 404 page
│   │   └── page.jsx             # Homepage
│   ├── components/              # React components
│   │   ├── AddProductForm.jsx   # Product creation form
│   │   ├── Features.jsx         # Features section
│   │   ├── Footer.jsx           # Site footer
│   │   ├── Hero.jsx             # Hero section
│   │   ├── LoadingSpinner.jsx   # Reusable spinner
│   │   ├── ManageProductsClient.jsx # Product management UI
│   │   ├── Navbar.jsx           # Navigation bar
│   │   ├── NavbarWrapper.jsx    # Navbar with session
│   │   ├── Stats.jsx            # Statistics display
│   │   ├── Trending.jsx         # Trending watches
│   │   └── WatchesClient.jsx    # Watches grid
│   ├── lib/                     # Utility functions
│   │   ├── getAllWatches.js     # Fetch all watches
│   │   └── getWatchById.js      # Fetch single watch
│   └── auth.js                  # NextAuth configuration
├── public/                      # Static assets
├── .env.local                   # Environment variables (create this)
├── next.config.mjs              # Next.js configuration
├── package.json                 # Dependencies
├── tailwind.config.js           # Tailwind configuration
└── README.md                    # This file
```

---

## �️ Routes

### Public Routes

| Route           | Description                                               |
| --------------- | --------------------------------------------------------- |
| `/`             | Homepage with hero, trending watches, features, and stats |
| `/watches`      | Browse all watches with search and category filter        |
| `/watches/[id]` | Detailed view of individual watch                         |
| `/about`        | About page                                                |
| `/contact`      | Contact page                                              |
| `/login`        | Authentication page (Google OAuth)                        |

### Protected Routes (Requires Authentication)

| Route              | Description                             |
| ------------------ | --------------------------------------- |
| `/add-product`     | Add new watch products to inventory     |
| `/manage-products` | Manage existing products (view, delete) |

---

## 🎨 Design Features

### Color Scheme

- **Primary** - Blue/Purple gradient theme
- **Success** - Green (#10b981) for product management
- **Warning** - Amber for important notices
- **Error** - Red for destructive actions

### Typography

- **Headings** - Oxanium (Google Fonts)
- **Body** - Sawarabi Gothic (Google Fonts)

### Custom Components

- Scroll-triggered navbar blur effect
- Hover scale animations on product cards
- Gradient overlays on hero sections
- Custom loading spinners per route (color-coded)

---

## 🔧 Configuration

### Image Optimization

Configured to load images from:

- `images.unsplash.com`
- Your deployed backend server

`next.config.mjs`:

```javascript
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "images.unsplash.com",
    },
  ],
}
```

### Loading States

Route-specific loading spinners:

- **Watches** - Purple (#8b5cf6)
- **Products** - Green (#10b981)
- **General** - Blue (#3b82f6)

---

## � Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Add environment variables
   - Deploy!

3. **Set Environment Variables**
   Add all variables from `.env.local` to Vercel dashboard

### Alternative Deployments

- **Netlify** - Supports Next.js
- **Railway** - Full-stack deployment
- **Self-hosted** - Using `npm run build && npm start`

---

## 📝 Development Notes

### Key Implementation Details

1. **Server vs Client Components**

   - Data fetching in Server Components
   - Interactive UI in Client Components with `"use client"`

2. **Image Optimization**

   - All images use Next.js `Image` component
   - Lazy loading enabled for better performance
   - Priority loading only for above-the-fold content

3. **Authentication Flow**

   - Google OAuth through NextAuth v5
   - Session managed via server-side cookies
   - Protected routes check session in layout

4. **State Management**
   - Local state with React hooks
   - URL state for search/filters
   - Server state via Next.js data fetching

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is **private** and not licensed for public use. All rights reserved.

---

## 👤 Author

**Atik Hasan**

- GitHub: [@AtikHasan16](https://github.com/AtikHasan16)
- Project: [WristLook](https://github.com/AtikHasan16/Wrist-Look)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [DaisyUI](https://daisyui.com/) - Beautiful UI components
- [Unsplash](https://unsplash.com/) - High-quality images
- [MongoDB](https://www.mongodb.com/) - Database solution
- [Vercel](https://vercel.com/) - Deployment platform

---

<div align="center">

**Built with ❤️ using Next.js 16 and Modern Web Technologies**

[⬆ Back to Top](#-wristlook---premium-watch-e-commerce-platform)

</div>
