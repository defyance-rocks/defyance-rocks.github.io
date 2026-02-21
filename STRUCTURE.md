# Defyance Website Structure

## Overview
This is a Jekyll-based website with Bootstrap 5 responsive styling. The site has been converted to use a modular layout system with includes and front matter.

## Key Files & Structure

### Layout & Includes
- `_layouts/default.html` - Main page template (includes head, header, content, footer)
- `_includes/head.html` - Meta tags, Bootstrap CDN, custom CSS
- `_includes/header.html` - Responsive Bootstrap navbar
- `_includes/footer.html` - Footer with copyright

### Pages
- `index.html` - Home page with tour dates (Jekyll page with front matter)
- `bios.html` - Band members page with responsive cards (Jekyll page with front matter)

### Styling
- `assets/custom.css` - Main stylesheet (Plain CSS, loads after Bootstrap for overrides)
  - Dark theme overrides for navbar, tables, cards
  - Site-specific styles (tour title, bio layout, etc.)

### Scripts
- `assets/js/main.js` - Image hover effect for Pat's photo using data attributes

### Deprecated Files
- `assets/main.scss` - No longer used (replaced with custom.css)
- `assets/custom.scss` - No longer used (replaced with custom.css)
- `_sass/_custom.scss` - No longer used (replaced with custom.css)

## Design Notes

### Color Scheme
- Background: Black (#000)
- Text: Silver
- Accents: Red for tour title, Dark red for subtitle
- Links: Light gray (#e6e6e6), white on hover

### Responsive Behavior
- Bootstrap 5 grid system (col-md-6 for 2-column layout on medium+ screens)
- Navbar collapses on mobile with hamburger menu
- Images use `img-fluid` for responsive sizing
- Tables wrapped in `.table-responsive` for mobile

### JavaScript
- Photo hover effect uses data attributes (`data-original-src`, `data-hover-src`)
- DOMContentLoaded event ensures element exists before attaching listeners

## Build & Deployment
```bash
bundle install
bundle exec jekyll serve --livereload  # Local development
bundle exec jekyll build               # Build for production
```

Site is configured for GitHub Pages with responsive-layout branch as current working branch.
