# 🚀 Raju Kanchan Portfolio

A modern, interactive portfolio website built with Next.js, featuring 3D elements, smooth animations, and responsive design.

## 🌟 Live Demo

🔗 **[View Live Portfolio](https://punisher007007.github.io/rajukanchanportfolio/)**

## ✨ Features

- **Modern Tech Stack**: Next.js 15, React 19, TypeScript
- **3D Graphics**: Three.js integration with React Three Fiber
- **Smooth Animations**: Framer Motion for fluid transitions
- **Responsive Design**: Tailwind CSS with mobile-first approach
- **Interactive Elements**: Custom cursor follower and loading screen
- **Dark Theme**: Sleek black background with white text
- **Optimized Performance**: Static site generation for fast loading

## 🛠️ Tech Stack

### Frontend
- **Next.js 15.2.4** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4.1.9** - Utility-first CSS framework

### UI Components
- **Radix UI** - Accessible, unstyled components
- **Lucide React** - Beautiful icons
- **Framer Motion** - Smooth animations
- **React Hook Form** - Form handling with validation

### 3D Graphics
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber

### Additional Features
- **Next Themes** - Dark/light mode support
- **Sonner** - Toast notifications
- **Recharts** - Data visualization
- **Zod** - Schema validation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/punisher007007/rajukanchanportfolio.git
   cd rajukanchanportfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── 3d/               # Three.js components
│   ├── ui/               # Reusable UI components
│   ├── hero-section.tsx  # Landing section
│   ├── about-section.tsx # About me section
│   ├── skills-section.tsx# Skills showcase
│   ├── projects-section.tsx# Portfolio projects
│   ├── experience-section.tsx# Work experience
│   ├── contact-section.tsx# Contact form
│   └── navigation.tsx    # Site navigation
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Additional styles
```

## 🔧 Build & Deploy

### Local Build
```bash
pnpm build
pnpm start
```

### GitHub Pages Deployment
This portfolio is automatically deployed to GitHub Pages using GitHub Actions:

1. **Automatic Deployment**: Every push to `main` branch triggers deployment
2. **Live URL**: https://punisher007007.github.io/rajukanchanportfolio/
3. **Build Process**: Next.js static export optimized for GitHub Pages

### Manual Deployment
```bash
pnpm build    # Builds and exports static files to ./out
```

## 🎨 Customization

### Updating Content
- **Personal Info**: Edit components in `/components/` directory
- **Projects**: Update `projects-section.tsx` with your projects
- **Skills**: Modify `skills-section.tsx` with your tech stack
- **Experience**: Update `experience-section.tsx` with work history

### Styling
- **Colors**: Modify Tailwind config or CSS variables
- **Animations**: Adjust Framer Motion configurations
- **Layout**: Customize component layouts and spacing

### 3D Elements
- **Models**: Add/modify 3D models in `/components/3d/`
- **Animations**: Customize Three.js animations
- **Performance**: Optimize 3D rendering for better performance

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Static Generation**: Pre-rendered at build time
- **Image Optimization**: Next.js optimized images
- **Code Splitting**: Automatic route-based splitting
- **Bundle Size**: Optimized with tree shaking

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Portfolio**: [Live Site](https://punisher007007.github.io/rajukanchanportfolio/)
- **GitHub**: [@punisher007007](https://github.com/punisher007007)
- **Email**: Contact form on portfolio website

---

⭐ **Star this repo if you found it helpful!**
