# OpenMind Blog

A modern, elegant, and fully responsive blog platform built with Next.js, TypeScript, and Tailwind CSS.

## Features

- SSR and SEO-optimized with dynamic metadata
- Clean architecture and feature-based organization
- Elegant Markdown rendering with custom styles
- Dynamic search bar for filtering posts
- Responsive design and accessibility best practices
- Image optimization with Next.js Image component
- Linting, formatting, and pre-commit hooks
- Sitemap and robots.txt for SEO

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/AlfrinP/Blog.git
cd Blog
```

### 2. Install dependencies

```bash
bun install
```

### 3. Set up environment variables

Create a .env.local file in the root and add any required variables (API URLs, secrets, etc).

### 4. Run the development server

```bash
bun run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

### 5. Build for production

```bash
bun run build
bun run start
```

## Project Structure

```
/app           # Next.js App Router pages and sections
/app/components    # Reusable UI components
/app/styles        # Global and markdown styles
/app/api           # API logic, types, and services
/utils         # Utility functions
/public        # Static assets (images, favicon, etc)
```

## Linting & Formatting

- ESLint and Prettier are set up for code quality.
- Use `bun run lint` and `bun run lint:fix` to check and fix issues.
- Pre-commit hooks are enabled via Husky and lint-staged.

## Markdown Styling

- Custom styles for `.blog-content` in `styles/blogContent.css`.

## Contributing

Pull requests and issues are welcome! Please follow the code style and add tests for new features.

## License

MIT
