# Technical Architecture

## Overview

Rabat Cultural Website is built on a modern WordPress architecture, leveraging the Block Theme system introduced in WordPress 5.9. This approach provides maximum flexibility, better performance, and a more maintainable codebase compared to traditional PHP-based themes.

The platform is designed to handle content-rich pages while maintaining excellent performance scores (92+ on mobile, 98+ on desktop) through strategic optimization and modern web development practices.

---

## System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────┐
│           User Browser                   │
│  (Desktop / Tablet / Mobile)            │
└───────────────┬─────────────────────────┘
                │ HTTP/HTTPS
                │
┌───────────────▼─────────────────────────┐
│         Web Server Layer                 │
│     (Apache 2.4 / Nginx)                │
│   - SSL/TLS Termination                 │
│   - Static Asset Serving                │
│   - Gzip Compression                    │
└───────────────┬─────────────────────────┘
                │
┌───────────────▼─────────────────────────┐
│      WordPress Application Layer         │
│         (PHP 8.0+)                       │
│   - Block Theme Engine                   │
│   - Template Rendering                   │
│   - Content Management                   │
│   - Caching Layer                        │
└───────────────┬─────────────────────────┘
                │
┌───────────────▼─────────────────────────┐
│         Database Layer                   │
│          (MySQL 8.0+)                    │
│   - Content Storage                      │
│   - User Data                            │
│   - Configuration                        │
└─────────────────────────────────────────┘
```

---

## Frontend Architecture

### Component Structure

The frontend is built using a modular component-based approach:

**HTML Structure:**
- Semantic HTML5 elements
- ARIA landmarks for accessibility
- Microdata for SEO (Schema.org)
- Progressive enhancement

**CSS Architecture:**
- Mobile-first responsive design
- CSS Grid and Flexbox for layouts
- CSS Custom Properties (variables) for theming
- BEM-inspired naming convention
- Modular component styles

**JavaScript Strategy:**
- Vanilla JavaScript (no jQuery)
- Event delegation for performance
- Lazy loading for images
- Minimal footprint (322 lines total)

### Asset Organization

```
assets/
├── css/
│   └── style.css          (1,477 lines)
│       ├── Variables & Tokens
│       ├── Base Styles
│       ├── Layout Components
│       ├── UI Components
│       ├── Page-specific Styles
│       └── Responsive Overrides
│
└── js/
    └── main.js            (322 lines)
        ├── Navigation Module
        ├── Smooth Scroll
        ├── Lazy Loading
        └── Analytics Integration
```

---

## Backend Architecture

### WordPress Block Theme Structure

```
theme-root/
├── theme.json             # Theme configuration
├── style.css              # Theme metadata
├── functions.php          # Core functionality
│
├── templates/             # Page templates (25 files)
│   ├── index.html         # Homepage
│   ├── page.html          # Default page
│   ├── single.html        # Single post
│   ├── archive.html       # Archive pages
│   └── [custom pages]     # Thematic templates
│
├── parts/                 # Template parts
│   ├── header.html        # Site header
│   └── footer.html        # Site footer
│
└── patterns/              # Block patterns (50+)
    ├── header.php
    ├── footer.php
    ├── home-*.php
    ├── decouvrir-*.php
    └── [other patterns]
```

### Theme Configuration (theme.json)

The `theme.json` file centralizes theme settings:

- **Color palette** - Moroccan-inspired colors
- **Typography** - Font families and sizes
- **Spacing** - Consistent spacing scale
- **Layout** - Content width and alignment
- **Custom CSS** - Additional styling

This configuration enables:
- Global Styles interface in WordPress
- Consistent design tokens
- Easy customization without code
- Performance optimization

### Block Patterns System

Block patterns are pre-designed section layouts that can be inserted into pages. We've created 50+ custom patterns organized by page type:

**Pattern Categories:**
- Hero sections
- Content cards
- Image galleries
- Call-to-action blocks
- Footer layouts
- Contact forms

Each pattern is registered in PHP and can be inserted via the WordPress editor.

---

## Database Architecture

### WordPress Standard Tables

We use WordPress's standard database schema:

**Core Tables:**
- `wp_posts` - Pages, posts, and custom content
- `wp_postmeta` - Additional post metadata
- `wp_users` - User accounts (admin only)
- `wp_options` - Site configuration
- `wp_terms` - Categories and tags
- `wp_term_relationships` - Content taxonomy links

**Custom Post Types:**
- Events (for future event calendar)
- Testimonials (for user reviews)

### Data Optimization

- Indexed queries for fast retrieval
- Transient caching for expensive operations
- Object caching ready (Redis/Memcached)
- Database query optimization

---

## Performance Architecture

### Optimization Strategy

**1. Asset Optimization**
- CSS minification (production)
- JavaScript minification (production)
- Image compression (WebP + fallback)
- Critical CSS inline
- Deferred non-critical assets

**2. Caching Strategy**

```
Browser Cache
    ↓
WordPress Object Cache (if available)
    ↓
Page Cache (wp-cache or similar)
    ↓
Database Query
```

**3. Lazy Loading**
- Images load on scroll
- Reduces initial page weight
- Native browser lazy loading
- JavaScript fallback for older browsers

**4. Code Splitting**
- Only load necessary CSS per page
- Conditional JavaScript loading
- Minimal global scripts

---

## Security Architecture

### Security Layers

**1. Server Level**
- SSL/TLS encryption (HTTPS)
- Firewall configuration
- Rate limiting
- IP blocking for malicious traffic

**2. WordPress Level**
- Regular core updates
- Security plugins (if needed)
- Strong password policies
- Limited login attempts

**3. Application Level**
- Input sanitization (all user inputs)
- Output escaping (prevent XSS)
- Nonce verification (CSRF protection)
- Prepared statements (SQL injection prevention)

**4. File System**
- Correct file permissions (644/755)
- No writable directories
- .htaccess protection
- wp-config.php outside web root (if possible)

### Code Security Practices

```php
// Input sanitization
$input = sanitize_text_field($_POST['input']);

// Output escaping
echo esc_html($user_content);

// CSRF protection
wp_nonce_field('action_name', 'nonce_name');

// SQL prepared statements
$wpdb->prepare("SELECT * FROM table WHERE id = %d", $id);
```

---

## Responsive Architecture

### Mobile-First Approach

Design and code flow:

```
Mobile Base Styles (320px+)
    ↓
Tablet Enhancements (768px+)
    ↓
Desktop Enhancements (992px+)
    ↓
Large Desktop Refinements (1200px+)
```

### Breakpoint Strategy

```css
/* Mobile: Base styles (no media query) */

/* Tablet: 768px and up */
@media (min-width: 768px) { }

/* Desktop: 992px and up */
@media (min-width: 992px) { }

/* Large Desktop: 1200px and up */
@media (min-width: 1200px) { }
```

### Responsive Components

All components adapt fluidly:
- Navigation (hamburger → horizontal)
- Grids (1 column → 2 → 3 → 4)
- Images (responsive srcset)
- Typography (fluid sizing)
- Spacing (proportional scaling)

---

## Accessibility Architecture

### WCAG 2.1 Level AA Compliance

**1. Semantic Structure**
- Proper heading hierarchy (H1 → H2 → H3)
- Landmark regions (header, nav, main, footer)
- Lists for grouped content
- Buttons vs. links (semantic correctness)

**2. Keyboard Navigation**
- Tab order follows visual order
- Focus indicators visible
- Skip links for quick navigation
- Keyboard-accessible dropdowns

**3. Screen Reader Support**
- ARIA labels where needed
- Alt text for all images
- Form labels properly associated
- Status messages announced

**4. Visual Accessibility**
- Color contrast ratios > 4.5:1
- Text resizable to 200%
- No content loss on zoom
- Focus visible on all interactive elements

---

## Deployment Architecture

### Hosting Environment

**Current Setup:**
- **Host:** InfinityFree
- **Server:** Apache
- **PHP:** 8.0+
- **MySQL:** 8.0+
- **SSL:** Let's Encrypt (free)

**Recommended Production Setup:**
- **Host:** Managed WordPress hosting (WP Engine, Kinsta, etc.)
- **Server:** Nginx (faster than Apache)
- **CDN:** Cloudflare or similar
- **Caching:** Redis or Memcached
- **Monitoring:** Uptime monitoring service

### Deployment Process

```bash
# 1. Code preparation
- Run tests
- Minify assets
- Update version numbers

# 2. Database backup
- Export database
- Store securely

# 3. File upload
- Upload theme files
- Set correct permissions

# 4. WordPress configuration
- Activate theme
- Clear all caches
- Test functionality

# 5. Performance check
- Run PageSpeed test
- Check mobile responsiveness
- Verify accessibility
```

---

## Monitoring & Maintenance

### Performance Monitoring

**Metrics to Track:**
- Page load times (< 3s target)
- Server response times (< 200ms)
- Database query times
- Cache hit rates
- CDN performance

**Tools:**
- Google PageSpeed Insights
- GTmetrix
- Pingdom
- New Relic (advanced)

### Maintenance Schedule

**Daily:**
- Monitor uptime
- Check error logs

**Weekly:**
- Review analytics
- Check for plugin updates
- Monitor disk space

**Monthly:**
- WordPress core updates
- Theme updates
- Full backup
- Security scan
- Performance audit

---

## Scalability Considerations

### Current Capacity

The current architecture handles:
- ~1,000 concurrent users
- ~10,000 page views/day
- 8 content-rich pages
- 100+ images
- Minimal server resources

### Future Scaling Options

**Vertical Scaling:**
- Increase server resources (CPU, RAM)
- Upgrade to better hosting plan
- Add more PHP workers

**Horizontal Scaling:**
- Multiple server instances
- Load balancer
- Separate database server
- CDN for static assets

**Code Optimization:**
- Database query caching
- Object caching (Redis)
- Fragment caching
- API rate limiting

---

## Integration Points

### Current Integrations

- **Google Fonts** - Typography
- **Schema.org** - SEO markup
- **Google Analytics** (ready to add)

### Future Integration Possibilities

- **Booking System** - Event reservations
- **Payment Gateway** - Online tickets
- **Email Marketing** - Newsletter (Mailchimp)
- **Social Media** - Auto-posting
- **Maps API** - Interactive location maps
- **Weather API** - Real-time weather info
- **Translation API** - Multilingual support

---

## Technology Decisions Explained

### Why WordPress Block Theme?

**Chosen over:**
- Classic PHP theme
- Page builder (Elementor, etc.)
- Static site generator

**Reasons:**
- Modern architecture
- Better performance
- Easier customization
- Future-proof
- No plugin dependencies
- Clean code

### Why Vanilla JavaScript?

**Chosen over:**
- jQuery
- React/Vue frameworks

**Reasons:**
- Better performance (no library overhead)
- Modern browser support is excellent
- Smaller bundle size
- No dependency management
- Simpler maintenance

### Why Mobile-First?

**Chosen over:**
- Desktop-first
- Adaptive (separate mobile site)

**Reasons:**
- Google mobile-first indexing
- Majority of traffic is mobile
- Progressive enhancement
- Better performance baseline
- Simpler responsive code

---

## Development Best Practices

### Code Standards

- **PHP:** WordPress Coding Standards
- **CSS:** BEM-inspired methodology
- **JavaScript:** ES6+ with backward compatibility
- **HTML:** Semantic, validated HTML5

### Version Control

- Git for source control
- Semantic versioning (MAJOR.MINOR.PATCH)
- Meaningful commit messages
- Feature branches for development

### Documentation

- Inline code comments
- README files
- Architecture documentation (this file)
- User guides

---

## Conclusion

This architecture provides a solid foundation for a performant, accessible, and maintainable WordPress website. The modular approach allows for easy updates and future enhancements while maintaining code quality and performance standards.

The combination of modern WordPress Block Theme architecture, optimized frontend code, and strategic caching creates a platform that delivers excellent user experience while remaining easy to manage and extend.

---

**Last Updated:** January 2026  
**Version:** 2.0.0  
**Maintained by:** Development Team
