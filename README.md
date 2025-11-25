# WristLook 🕐

A modern, premium watch e-commerce platform built with Next.js 16, featuring a sleek design system powered by DaisyUI and TailwindCSS.

## 📖 Project Description

WristLook is a full-featured e-commerce application for browsing and purchasing premium watches. The application features a responsive design, optimized image loading, smooth animations, and a modern UI with custom typography using Oxanium and Sawarabi Gothic fonts.

### Key Features

- **Responsive Design** - Mobile-first layout that works on all screen sizes
- **Image Optimization** - Next.js Image component with automatic optimization for fast loading
- **Dynamic Navbar** - Scroll-triggered blur effect with backdrop filter
- **Modern UI** - Custom styling with DaisyUI components and TailwindCSS utilities
- **Premium Fonts** - Oxanium and Sawarabi Gothic from Google Fonts
- **React Icons** - Professional icon set for enhanced UX

## 🚀 Setup & Installation

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun package manager

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd wristlook-cl
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
npm run build
npm run start
```

## 🗺️ Route Summary

### Public Routes

| Route           | Description                                                       |
| --------------- | ----------------------------------------------------------------- |
| `/`             | Homepage with hero section, trending watches, features, and stats |
| `/watches`      | Browse all available watches                                      |
| `/watches/[id]` | Individual watch details page                                     |
| `/login`        | User login page                                                   |
| `/register`     | User registration page                                            |

### Admin/Management Routes

| Route              | Description              |
| ------------------ | ------------------------ |
| `/add-product`     | Add new watch products   |
| `/manage-products` | Manage existing products |

## 🎨 Tech Stack

- **Framework**: Next.js 16.0.3 (React 19.2.0)
- **Styling**: TailwindCSS 4.1.17 + DaisyUI 5.5.5
- **Icons**: React Icons 5.5.0
- **Fonts**: Next.js Font Optimization (Oxanium, Sawarabi Gothic)
- **Image Optimization**: Next.js Image component with Unsplash integration

## 📁 Project Structure

```
wristlook-cl/
├── src/
│   ├── app/
│   │   ├── add-product/      # Add product page
│   │   ├── login/            # Login page
│   │   ├── manage-products/  # Product management
│   │   ├── register/         # Registration page
│   │   ├── watches/          # Watches listing & details
│   │   ├── globals.css       # Global styles
│   │   ├── layout.js         # Root layout with fonts
│   │   └── page.jsx          # Homepage
│   └── components/
│       ├── Navbar.jsx        # Navigation with scroll effect
│       ├── Hero.jsx          # Hero section
│       ├── Trending.jsx      # Trending watches section
│       ├── Features.jsx      # Features grid
│       ├── Stats.jsx         # Statistics display
│       └── Footer.jsx        # Footer component
├── next.config.mjs           # Next.js configuration
├── package.json              # Dependencies
└── README.md                 # This file
```

## 🛠️ Configuration

### Image Domains

The application is configured to load images from:

- `images.unsplash.com`

Configuration in `next.config.mjs`:

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

## 📝 Development Notes

- The navbar includes a scroll-triggered blur effect using React hooks
- All images use Next.js `Image` component for automatic optimization
- Custom button styles are defined in `globals.css`
- Theme is managed by DaisyUI with light theme as default

## 📄 License

This project is private and not licensed for public use.

---

Built with ❤️ using Next.js and DaisyUI
