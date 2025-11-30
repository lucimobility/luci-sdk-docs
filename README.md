# SDK Documentation

This repo is the public repo responsible for hosting all the LUCI Sandbox Documentation.

## Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a static website generator.

## Installation

### Prerequisites

Before getting started, ensure you have the following installed on your system:

- **Node.js** (v16 or later): Download from [nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js): Package manager for JavaScript dependencies

Verify your installations:
```bash
node --version
npm --version
```

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/lucimobility/luci-ros2-sdk-docs.git
   cd luci-ros2-sdk-docs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Local Development

### Starting the Development Server

To start the local development server with hot-reload:

```bash
npm start
```

The website will automatically open in your default browser at `http://localhost:3000`. The development server watches for file changes and automatically rebuilds the site, so you can see your changes in real-time.

### Editing Documentation

Documentation source files are located in the `source_files/` directory:

- **Main docs**: `source_files/` (markdown files)
- **Versioned docs**: `versioned_docs/` (previous version documentation)
- **Sidebars**: `sidebars.js` (defines documentation structure and navigation)
- **Configuration**: `docusaurus.config.js` (site-wide settings)

Make changes to the markdown files, and they will be reflected immediately in your browser.

### Stopping the Development Server

Press `Ctrl+C` in your terminal to stop the development server.

## Build

### Production Build

To create an optimized production build:

```bash
npm run build
```

This command generates a static site in the `build/` directory. The build process:
- Bundles all documentation
- Optimizes assets and JavaScript
- Generates static HTML files
- Prepares everything for deployment

### Preview Production Build

To locally preview the production build before deployment:

```bash
npm run serve
```

This starts a local server serving the optimized `build/` directory at `http://localhost:3000`.

## Development Workflow

### 1. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### 2. Start the Development Server
```bash
npm start
```

### 3. Make Your Changes
Edit markdown files in `source_files/` and see changes in real-time.

### 4. Test Your Changes
- Review the rendered documentation in your browser
- Test all links and navigation
- Verify code blocks and formatting
- Check on different screen sizes (responsive design)

### 5. Build Locally to Test Production
```bash
npm run build
npm run serve
```

## Useful Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start development server with hot-reload |
| `npm run build` | Create optimized production build |
| `npm run serve` | Preview production build locally |
| `npm run clear` | Clear cache and generated files |
| `npm run docusaurus -- --version` | Check Docusaurus version |

## Documentation Structure

- `source_files/` - Main documentation source files (markdown)
- `versioned_docs/` - Documentation for previous releases
- `versioned_sidebars/` - Sidebar configurations for each version
- `docs/` - Generated static site (created during build)
- `static/` - Static assets (images, logos, etc.)
- `src/` - React components and styling
- `docusaurus.config.js` - Main Docusaurus configuration
- `sidebars.js` - Documentation navigation structure
- `babel.config.js` - Babel configuration
- `package.json` - Project dependencies and scripts

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, you can specify a different port:
```bash
npm start -- --port 3001
```

### Cache Issues

If you experience unexpected behavior, clear the cache:
```bash
npm run clear
npm start
```

### Dependency Issues

If you encounter dependency problems:
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### Build Failures

Check the error messages carefully. Common issues:
- Broken markdown links (use relative paths)
- Missing images or assets
- Incorrect sidebar configuration in `sidebars.js`
- Syntax errors in configuration files

## Contributing

When contributing documentation changes:

1. Follow the existing markdown formatting and style
2. Test your changes locally with `npm start`
3. Build and preview the production version with `npm run build && npm run serve`
4. Verify all links work correctly
5. Ensure responsive design works on mobile devices
6. Create a descriptive pull request with your changes

## Resources

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Markdown Guide](https://docusaurus.io/docs/markdown-features)
- [Docusaurus API Reference](https://docusaurus.io/docs/api)
- [GitHub Repository](https://github.com/lucimobility/luci-ros2-sdk-docs)