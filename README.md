# Rabat Cultural Website

A modern digital platform celebrating Morocco's capital city and its rich cultural heritage. This WordPress project combines elegant design with thoughtful user experience to showcase Rabat's historical monuments, vibrant neighborhoods, and contemporary cultural scene.

![Project Status](https://img.shields.io/badge/status-active-success)
![WordPress](https://img.shields.io/badge/WordPress-6.4+-blue)
![License](https://img.shields.io/badge/license-proprietary-red)

**🌐 Live Demo:** [rabatculture.lovestoblog.com](https://rabatculture.lovestoblog.com/)

---

## About This Project

Rabat Cultural Website started as an exploration of how digital storytelling can bring cultural heritage to life. The goal was simple: create a platform where visitors could discover everything Rabat has to offer—from its UNESCO-listed medina to its Atlantic beaches, from traditional souks to modern sports facilities.

What began as an idea evolved into a fully-featured WordPress theme that balances aesthetics with functionality. Every page was carefully crafted to provide visitors with authentic, useful information while maintaining fast load times and accessibility.
<img width="1896" height="913" alt="image" src="https://github.com/user-attachments/assets/0982a5b8-909c-4b38-aa0b-5d8930773e0b" />

### Key Features

**Content Rich**
- 8 thematic sections covering shopping, sports, beaches, nature, historic medina, transportation, neighborhoods, and practical information
- Over 80,000 words of original, researched content
- Detailed guides for both tourists and residents

**Performance Focused**
- Achieves 92+ score on mobile and 98+ on desktop (Google PageSpeed)
- Optimized images with lazy loading
- Minimal JavaScript for fast interactions
- Clean, semantic HTML structure

**Accessible & Responsive**
- WCAG 2.1 Level AA compliant
- Keyboard navigation support
- Screen reader friendly
- Works beautifully on phones, tablets, and desktops

**Modern Architecture**
- Built with WordPress Block Theme system
- Full Site Editing (FSE) capabilities
- Custom block patterns for easy content management
- Clean, maintainable codebase

---

## Live Website Preview

Visit the live site to experience the full project: **[rabatculture.lovestoblog.com](https://rabatculture.lovestoblog.com/)**

### Homepage Experience
The homepage welcomes visitors with an elegant hero section showcasing Rabat's iconic landmarks, followed by curated content sections that guide users to discover different aspects of the city.

### Thematic Pages

**🛍️ Shopping** - Discover traditional souks in the medina alongside modern shopping centers. Learn about Moroccan craftsmanship, negotiate like a local, and find the best places for authentic products.

**⚽ Sports & Activities** - From golf courses overlooking the Atlantic to water sports at local beaches, explore Rabat's active lifestyle. Includes information on gyms, sports clubs, and major sporting events.

**🏖️ Beaches** - Comprehensive guide to Rabat's Atlantic coastline, from family-friendly Plage de Rabat to the surfing haven of Témara. Complete with safety tips and amenity information.

**🌳 Nature & Parks** - Explore Rabat's green spaces, from the historic Jardin d'Essais to the exotic botanical gardens. Perfect for peaceful walks and family outings.

**🕌 Historic Medina** - Dive into Rabat's UNESCO World Heritage medina, its ancient monuments, traditional crafts, and living history that makes the city unique.

**🚇 Getting Around** - Practical information about Rabat's modern tramway system, bus network, taxis, and sustainable mobility options.

**🏘️ Neighborhoods** - Detailed look at six major neighborhoods, helping visitors and new residents understand the character and amenities of different areas.

**ℹ️ Practical Info** - Essential information for visitors: visa requirements, currency, climate, customs, emergency contacts, and local etiquette.

<img width="1894" height="703" alt="image" src="https://github.com/user-attachments/assets/ba1611f5-1842-45bb-b95b-e951f35bb204" />


---

## Technical Highlights

### Architecture
Built on WordPress 6.4+ using the modern Block Theme approach, this project showcases:
- Custom theme.json configuration for consistent styling
- Reusable block patterns (50+ custom patterns)
- Template-based structure for flexible content management
- Modular component system

### Design System
A cohesive design language inspired by Moroccan aesthetics:
- Color palette featuring Moroccan red (#B8302A), green (#2C6E49), Atlantic blue (#3A5F7D), and gold (#C9A961)
- Typography hierarchy using Playfair Display for headlines and Inter for body text
- Consistent spacing and layout grid
- Smooth transitions and subtle animations

### Performance Optimizations
- Image compression and WebP format with fallbacks
- Critical CSS inlined for faster first paint
- JavaScript deferred for non-critical functionality
- Browser caching strategies

### Code Quality
- W3C validated HTML5
- Clean, commented CSS (1,477 lines)
- Minimal JavaScript for better performance (322 lines)
- Follows WordPress coding standards

---

## Code Snippets

While the full source code remains private, here are some glimpses of the implementation:

### Custom Block Pattern Registration
```php
/**
 * Register custom block patterns for the theme
 * Patterns provide reusable content structures
 */
function rabat_register_block_patterns() {
    register_block_pattern_category(
        'rabat-patterns',
        array('label' => __('Rabat Patterns', 'rabat'))
    );
    
    // Hero section pattern
    register_block_pattern(
        'rabat/hero-section',
        array(
            'title'       => __('Hero Section', 'rabat'),
            'description' => __('Large hero with background image', 'rabat'),
            'categories'  => array('rabat-patterns'),
            'content'     => '<!-- Pattern content -->'
        )
    );
}
```

### Responsive Navigation
```javascript
// Mobile menu toggle with smooth animations
const initMobileMenu = () => {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');
    
    toggle?.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('active');
        toggle.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });
};

document.addEventListener('DOMContentLoaded', initMobileMenu);
```

### Design System Variables
```css
:root {
    /* Moroccan-inspired color palette */
    --color-primary: #B8302A;
    --color-secondary: #2C6E49;
    --color-accent: #3A5F7D;
    --color-gold: #C9A961;
    
    /* Typography scale */
    --font-display: 'Playfair Display', serif;
    --font-body: 'Inter', sans-serif;
    
    /* Spacing system */
    --space-xs: 0.5rem;
    --space-sm: 1rem;
    --space-md: 2rem;
    --space-lg: 4rem;
}
```

### Responsive Card Component
```css
.card {
    background: white;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.15);
}

@media (max-width: 768px) {
    .card {
        padding: 1.5rem;
    }
}
```

---

## Screenshots

### [Homepage](https://github.com/y-zahidi/RabatCulture-WP/blob/main/screenshots/homepage-desktop.png)
*The homepage features a striking hero section with Rabat's iconic Hassan Tower, followed by thematic content cards guiding visitors to explore different aspects of the city.*

### [Mobile Experience](https://github.com/y-zahidi/RabatCulture-WP/blob/main/screenshots/homepage-mobile.png)
*Fully responsive design ensures a smooth experience on all devices, with touch-friendly navigation and optimized content layout.*

### [Shopping Page](https://github.com/y-zahidi/RabatCulture-WP/blob/main/screenshots/shopping-page.png)
*Detailed information about traditional souks and modern shopping centers, with practical tips for visitors.*

---

## Development Journey

This project evolved over several months, going through multiple iterations:

1. **Research Phase** - Understanding Rabat's cultural landscape, tourist needs, and existing digital presences
2. **Design Phase** - Creating a visual identity that honors Moroccan aesthetics while staying modern
3. **Development Phase** - Building the WordPress theme with focus on performance and accessibility
4. **Content Creation** - Writing original, comprehensive content for all eight thematic sections
5. **Testing Phase** - Ensuring cross-browser compatibility, mobile responsiveness, and accessibility
6. **Optimization Phase** - Fine-tuning performance, SEO, and user experience

The result is a platform that serves both practical needs (helping visitors plan their trip) and cultural goals (celebrating Rabat's heritage).

---

## Technical Stack

**Core Technologies**
- WordPress 6.4+ (Block Theme)
- PHP 8.0+
- MySQL 8.0+
- HTML5 & CSS3
- Vanilla JavaScript (ES6+)

**Key Features**
- Full Site Editing (FSE)
- Custom Block Patterns
- Responsive Grid Layouts
- CSS Custom Properties
- Lazy Loading Images

**Development Tools**
- Visual Studio Code
- Local by Flywheel
- Chrome DevTools
- Git version control

---

## Performance Metrics

### Google PageSpeed Insights

| Metric | Mobile | Desktop |
|--------|--------|---------|
| Performance Score | 92/100 | 98/100 |
| First Contentful Paint | 1.2s | 0.8s |
| Largest Contentful Paint | 2.1s | 1.3s |
| Cumulative Layout Shift | 0.05 | 0.02 |

### Accessibility

- WCAG 2.1 Level AA compliant
- Zero critical accessibility errors
- Keyboard navigation fully functional
- Screen reader compatible

### Code Quality

- W3C validated HTML5
- W3C validated CSS3
- Zero JavaScript errors
- Follows WordPress coding standards

---

## Project Statistics

- **Lines of Code:** 2,050+ (PHP/CSS/JS)
- **Templates:** 25 custom templates
- **Block Patterns:** 50+ reusable patterns
- **Content:** 80,000+ words across 8 pages
- **Development Time:** 150+ hours
- **Team Size:** 4 developers

---

## Future Enhancements

This project continues to evolve. Planned features include:

**Version 2.1** (In Progress)
- Event calendar with filtering
- Interactive map integration
- Photo gallery enhancement
- User review system

**Version 2.5** (Planned)
- Multilingual support (Arabic, English, Spanish)
- Newsletter subscription
- Blog section for cultural articles
- User accounts for favorites

**Version 3.0** (Vision)
- Progressive Web App (PWA) capabilities
- Native mobile application
- AI-powered chatbot assistant
- 360° virtual tours of monuments

---

## Why This Project Matters

Rabat Cultural Website isn't just about showcasing a city—it's about preserving and promoting cultural heritage through modern technology. By making comprehensive information easily accessible, the project helps:

- **Tourists** discover lesser-known gems alongside famous landmarks
- **New residents** understand different neighborhoods and local services
- **Cultural enthusiasts** learn about Moroccan traditions and history
- **Local businesses** gain visibility through authentic recommendations

The project demonstrates that cultural websites can be both beautiful and functional, fast and content-rich, modern and respectful of heritage.

---

## About the Development

This project was developed during the 2025-2026 academic year as an exploration of modern WordPress development practices. It showcases:

- Modern WordPress Block Theme architecture
- Performance optimization techniques
- Accessibility best practices
- Responsive design patterns
- Content strategy and information architecture
- Team collaboration and project management

The focus was on creating a production-ready website that could serve real users while demonstrating professional development skills.

---

## License & Usage

**This is a proprietary project.** The website and its code are not open source.

- ✅ You can view the live demo
- ✅ You can view this documentation
- ✅ You can reference this project professionally
- ❌ Code is not available for download
- ❌ No redistribution or modification allowed
- ❌ No commercial use without permission

For professional inquiries or collaboration opportunities, please reach out through the contact information in my profile.

---

## Acknowledgments

Special thanks to:
- The city of Rabat for inspiring this project
- UNESCO for recognizing Rabat's World Heritage status
- The WordPress community for excellent documentation
- Moroccan tourism resources for valuable information
- InfinityFree for hosting the live demo

---

## Contact

For questions about this project, technical discussions, or professional opportunities:
- 💼 LinkedIn: linkedin.com/in/yassir-zahidi

---

## Project Links

- 🌐 **Live Website:** [rabatculture.lovestoblog.com](https://rabatculture.lovestoblog.com/)
- ♿ **Accessibility Report:** WCAG 2.1 AA Compliant

---

<div align="center">

**Celebrating Rabat's Cultural Heritage Through Digital Innovation**

Made with ❤️ for Morocco's Capital City

⭐ Star this repository if you find it interesting!

</div>
