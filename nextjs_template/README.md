# Next.js Template

A simple and modern Next.js template with TypeScript, Tailwind CSS, and best practices.

## Features

- ⚡ **Next.js 15** with App Router
- 🔷 **TypeScript** for type safety
- 🎨 **Tailwind CSS** for styling
- 🌙 **Dark mode** support
- 📱 **Responsive** design
- 🔍 **ESLint** for code quality
- 🚀 **Optimized** for performance

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone or copy this template
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                 # App Router pages
│   ├── about/          # About page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
└── components/         # Reusable components
    └── Button.tsx      # Example button component
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Customization

### Styling

This template uses Tailwind CSS. You can customize the design system in `tailwind.config.js`.

### Dark Mode

Dark mode is supported out of the box using CSS variables and Tailwind's dark mode classes.

### Adding Pages

Create new pages by adding files to the `src/app` directory. Next.js will automatically create routes based on the file structure.

### Components

Add reusable components to the `src/components` directory.

## Deployment

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/hello-world)

You can also deploy to other platforms like Netlify, AWS, or any hosting service that supports Node.js.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - interactive Next.js tutorial
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS

## License

This template is open source and available under the [MIT License](LICENSE). 