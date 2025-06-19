# RoboInk Steampunk Shopify Theme

A sophisticated steampunk-themed Shopify Online Store 2.0 theme for RoboInkTees, featuring Victorian elegance with AI-generated designs.

## Features

### 🎨 Design System
- **Victorian Steampunk Aesthetic**: Brass, copper, navy, and parchment color palette
- **Custom Typography**: Roboto, Roboto Slab, and Cinzel Decorative fonts
- **Animated Elements**: Rotating gears, metallic text shimmer effects
- **Responsive Design**: Optimized for all devices

### 🛍️ E-commerce Features
- **Product Collections**: 9 themed categories (Robots, Vehicles, Clockwork Creatures, etc.)
- **Hero Section**: Engaging banner with call-to-action buttons
- **Newsletter Integration**: Capture leads with styled signup forms
- **Social Media Links**: Instagram, TikTok, Facebook integration

### ⚙️ Technical Features
- **Shopify Online Store 2.0**: Section-based architecture
- **TailwindCSS**: Utility-first CSS framework
- **Custom JavaScript**: Interactive animations and effects
- **Performance Optimized**: Lazy loading, optimized assets
- **SEO Ready**: Structured data and meta tags

## Installation

### Option 1: Shopify CLI (Recommended)
```bash
# Clone the repository
git clone https://github.com/[username]/roboink-steampunk-theme.git
cd roboink-steampunk-theme

# Connect to your Shopify store
shopify theme dev --store your-store.myshopify.com

# Deploy to live theme
shopify theme push --live
```

### Option 2: Manual Upload
1. Download the theme as a ZIP file
2. Go to Shopify Admin → Online Store → Themes
3. Click "Upload theme" and select the ZIP file
4. Publish the theme when ready

## Theme Structure

```
roboink-steampunk/
├── assets/           # CSS, JavaScript, and image files
├── config/           # Theme settings and configuration
├── layout/           # Theme layout files
├── locales/          # Translation files
├── sections/         # Reusable theme sections
├── snippets/         # Reusable code snippets
├── templates/        # Page templates
└── tailwind.config.js # TailwindCSS configuration
```

## Customization

### Colors
The theme uses CSS custom properties for easy color customization:
- `--parchment`: #F8F5F0 (Background)
- `--navy`: #1A2634 (Text)
- `--brass`: #D4B483 (Primary accent)
- `--copper`: #E7A977 (Secondary accent)
- `--burgundy`: #800020 (Headers)
- `--teal`: #6DC6C4 (Subtle accent)
- `--rust`: #B7410E (Warm accent)

### Fonts
- **Primary**: Roboto (body text)
- **Heading**: Roboto Slab (headings)
- **Display**: Cinzel Decorative (decorative elements)

### Sections
- **Hero**: Main banner with customizable text and images
- **Collection Grid**: 3x3 grid of product categories
- **Footer**: Newsletter signup, links, and social media

## Development

### Prerequisites
- Node.js (v14 or higher)
- Shopify CLI
- Git

### Local Development
```bash
# Install dependencies (if using npm packages)
npm install

# Start development server
shopify theme dev

# Build CSS (if modifying Tailwind)
npx tailwindcss -o assets/roboink.css --watch
```

### File Structure
- **Layout**: `layout/theme.liquid` - Main theme wrapper
- **Sections**: `sections/` - Individual page sections
- **Assets**: `assets/` - CSS, JS, and images
- **Config**: `config/settings_schema.json` - Theme customization options

## Product Categories

The theme includes 9 product categories:
1. **Robots** - Mechanical beings with gears and engineering
2. **Vehicles** - Fantastical transportation (airships, trains, subs)
3. **Clockwork Creatures** - Animals reimagined with mechanical artistry
4. **Gadgetry & Gizmos** - Inventive gadgets and wearable tech
5. **Victorian Vanguard** - Portraits, fashion, and classic motifs
6. **Retro-Futurism** - Futuristic tech imagined from the past
7. **Skulls** - Anatomy fused with gears and mechanical details
8. **Typographic Treasures** - Clever quotes in steampunk style
9. **Custom Requests** - Unique design commissions

## Performance

- **Optimized Images**: WebP format with fallbacks
- **Lazy Loading**: Images load as they enter viewport
- **Minified Assets**: Compressed CSS and JavaScript
- **Fast Loading**: Optimized for Core Web Vitals

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This theme is proprietary to RoboInkTees. All rights reserved.

## Support

For theme support and customization requests:
- Email: support@roboinktees.com
- Website: https://roboinktees.com

## Changelog

### v1.0.0 (2024-06-19)
- Initial release
- Complete steampunk theme implementation
- 9 product categories
- Responsive design
- Interactive animations
- Newsletter integration

---

**Where Victorian Engineering Meets AI Design. Timeless style, machine-made.**