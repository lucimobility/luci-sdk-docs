# SDK Documentation

This repo is the public repo responsible for hosting all the LUCI Sandbox Documentation.

**This website is built using [Docusaurus 2](https://docusaurus.io/), a static website generator. Source files must be updated in their respective repositories NOT IN THIS REPO.**

## To Locally Build the Site for Review

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

## Local Review

### Starting the Development Server

To start the local development server with hot-reload:

```bash
npm start
```

The website will automatically open in your default browser at `http://localhost:3000`. The development server watches for file changes and automatically rebuilds the site, so you can see your changes in real-time.

### Editing Documentation

Documentation source files are located in the `source_files/` directory:

- **Main docs**: `source_files/` (markdown files - THESE ARE COPIES of the master documents in each repo. DO NOT MODIFY THEM HERE!)
- **Versioned docs**: `versioned_docs/` (previous version documentation stored here)
- **Sidebars**: `sidebars.js` (defines documentation structure and navigation)
- **Configuration**: `docusaurus.config.js` (site-wide settings)

### Stopping the Development Server

Press `Ctrl+C` in your terminal to stop the development server.


### Preview Production Build

To locally preview the production build before deployment:

```bash
npm run serve
```

This starts a local server serving the optimized `build/` directory at `http://localhost:3000`.
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

## Resources

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Markdown Guide](https://docusaurus.io/docs/markdown-features)
- [Docusaurus API Reference](https://docusaurus.io/docs/api)
- [GitHub Repository](https://github.com/lucimobility/luci-ros2-sdk-docs)