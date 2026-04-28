# Marius Wagner - Portfolio Website

Modern portfolio website built with **Astro**, **React**, and **Tailwind CSS**.

**Live:** https://marius1501.github.io

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build) - Fast, modern static site generator
- **UI:** [React](https://react.dev) - Interactive components
- **Styling:** [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- **Language:** TypeScript for type safety

## 📁 Project Structure

```
├── src/
│   ├── components/      # React components
│   ├── layouts/         # Astro layouts
│   ├── pages/          # Astro pages (auto-routes)
│   ├── data/           # Static data & types
│   └── styles/         # Global styles
├── public/             # Static assets
├── dist/               # Build output
└── astro.config.mjs    # Astro configuration
```

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev
```

### Build

```bash
# Create optimized build
npm run build

# Preview built site
npm run preview
```

## 📦 Deployment - GitHub Pages

This site is automatically deployed to GitHub Pages.

### Setup (already configured ✅)

- Astro config includes `site: 'https://marius1501.github.io'`
- Output is set to static site generation
- GitHub Pages configured to deploy from repo

### To Deploy

**Option 1: Automatic (Recommended)**
```bash
# Push changes to main branch
git add .
git commit -m "Update portfolio"
git push origin main

# Site will be live in 1-2 minutes at https://marius1501.github.io
```

**Option 2: Manual Build**
```bash
npm run build
# dist/ folder is ready to deploy
```

## 📝 Editing Content

### Update Portfolio Projects
Edit `src/data/portfolio.ts`:
```typescript
export const projects: Project[] = [
  {
    id: 'project-id',
    title: 'Project Name',
    description: 'Description...',
    link: 'https://github.com/...',
    image: '/assets/projects/image.jpg',
    tags: ['React', 'TypeScript'],
  },
];
```

### Update Skills
Edit `src/data/portfolio.ts` - modify the `skills` array

### Add New Pages
Create `.astro` file in `src/pages/` and it will auto-route.

## ✨ Features

- ⚡ Ultra-fast static site generation with Astro
- 🎨 Modern, minimalist design
- 📱 Fully responsive
- ✨ Smooth animations & transitions
- 🔤 TypeScript support
- 🎯 SEO optimized

## 📄 License

MIT License - Feel free to use this as a template!
