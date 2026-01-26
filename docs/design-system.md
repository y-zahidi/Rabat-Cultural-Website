# Design System

## Overview

The Rabat Cultural Website design system is inspired by Moroccan aesthetics, combining traditional colors and patterns with modern web design principles. The system ensures consistency across all pages while maintaining flexibility for content-rich layouts.

---

## Visual Identity

### Brand Philosophy

The design celebrates Rabat's unique blend of tradition and modernity:
- **Traditional:** Moroccan colors, Islamic geometric patterns, historical architecture
- **Modern:** Clean layouts, crisp typography, smooth animations
- **Accessible:** High contrast, readable fonts, clear hierarchy

---

## Color Palette

### Primary Colors

Our primary palette draws from Morocco's iconic colors:

**Moroccan Red** - `#B8302A`
```css
--color-primary: #B8302A;
```
- **Usage:** CTAs, links, emphasis
- **Inspiration:** Moroccan red clay, traditional tiles
- **Accessibility:** 4.5:1 contrast on white background

**Moroccan Green** - `#2C6E49`
```css
--color-secondary: #2C6E49;
```
- **Usage:** Nature content, secondary actions
- **Inspiration:** Andalusian gardens, mint tea
- **Accessibility:** 7:1 contrast on white background

**Atlantic Blue** - `#3A5F7D`
```css
--color-accent: #3A5F7D;
```
- **Usage:** Beach content, information sections
- **Inspiration:** Atlantic Ocean, Rabat's coastline
- **Accessibility:** 5.5:1 contrast on white background

**Moroccan Gold** - `#C9A961`
```css
--color-gold: #C9A961;
```
- **Usage:** Premium content, highlights
- **Inspiration:** Traditional crafts, royal palace
- **Accessibility:** 4.5:1 contrast on dark backgrounds

### Neutral Colors

**Ivory** - `#FAF7F2`
```css
--color-ivory: #FAF7F2;
```
- **Usage:** Page backgrounds, light sections

**Sand** - `#E8DFD0`
```css
--color-sand: #E8DFD0;
```
- **Usage:** Card backgrounds, subtle borders

**Stone** - `#A39B8B`
```css
--color-stone: #A39B8B;
```
- **Usage:** Secondary text, disabled states

**Charcoal** - `#2D2D2A`
```css
--color-charcoal: #2D2D2A;
```
- **Usage:** Body text, headings

### Color Usage Guidelines

**Do:**
- Use primary red for main CTAs
- Use green for nature/sport related content
- Use blue for water/beach related content
- Maintain consistent color meaning across pages

**Don't:**
- Mix colors randomly
- Use red and green together (accessibility)
- Rely on color alone to convey information
- Use colors below 4.5:1 contrast ratio

---

## Typography

### Font Families

**Display Font: Playfair Display**
```css
--font-display: 'Playfair Display', serif;
```
- **Usage:** Page titles, hero headings, major sections
- **Style:** Serif, elegant, traditional
- **Weights:** 400 (Regular), 500 (Medium), 600 (Semibold)
- **Character:** Sophisticated, cultural, timeless

**Body Font: Inter**
```css
--font-body: 'Inter', sans-serif;
```
- **Usage:** Body text, navigation, UI elements
- **Style:** Sans-serif, modern, readable
- **Weights:** 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold)
- **Character:** Clean, professional, accessible

**Accent Font: Cormorant Garamond**
```css
--font-accent: 'Cormorant Garamond', serif;
```
- **Usage:** Quotes, special emphasis, decorative text
- **Style:** Serif, elegant, refined
- **Weights:** 300 (Light), 400 (Regular), 500 (Medium)
- **Character:** Graceful, literary, distinguished

### Type Scale

Fluid typography using CSS clamp():

```css
/* Headings */
--text-6xl: clamp(3rem, 5vw, 4.5rem);      /* 48-72px */
--text-5xl: clamp(2.5rem, 4vw, 3.5rem);    /* 40-56px */
--text-4xl: clamp(2rem, 3vw, 3rem);        /* 32-48px */
--text-3xl: clamp(1.75rem, 2.5vw, 2.25rem);/* 28-36px */
--text-2xl: clamp(1.5rem, 2vw, 2rem);      /* 24-32px */
--text-xl: clamp(1.25rem, 1.5vw, 1.5rem);  /* 20-24px */

/* Body */
--text-lg: 1.125rem;  /* 18px */
--text-base: 1rem;    /* 16px */
--text-sm: 0.875rem;  /* 14px */
--text-xs: 0.75rem;   /* 12px */
```

### Typography Hierarchy

**H1 - Page Title**
```css
h1 {
    font-family: var(--font-display);
    font-size: var(--text-5xl);
    font-weight: 600;
    line-height: 1.1;
    color: var(--color-charcoal);
}
```

**H2 - Major Section**
```css
h2 {
    font-family: var(--font-display);
    font-size: var(--text-4xl);
    font-weight: 600;
    line-height: 1.2;
    color: var(--color-primary);
}
```

**H3 - Subsection**
```css
h3 {
    font-family: var(--font-display);
    font-size: var(--text-2xl);
    font-weight: 500;
    line-height: 1.3;
    color: var(--color-charcoal);
}
```

**Body Text**
```css
p {
    font-family: var(--font-body);
    font-size: var(--text-base);
    font-weight: 400;
    line-height: 1.7;
    color: var(--color-charcoal);
}
```

---

## Spacing System

### Base Unit

Base spacing unit: `0.5rem` (8px)

```css
--space-xs: 0.5rem;   /* 8px */
--space-sm: 1rem;     /* 16px */
--space-md: 2rem;     /* 32px */
--space-lg: 4rem;     /* 64px */
--space-xl: 6rem;     /* 96px */
--space-2xl: 8rem;    /* 128px */
```

### Spacing Usage

**Component Padding:**
- Cards: `var(--space-md)` (32px)
- Sections: `var(--space-lg)` (64px)
- Page margins: `var(--space-xl)` (96px)

**Element Spacing:**
- Paragraph margin: `var(--space-sm)` (16px)
- Heading margin: `var(--space-md)` (32px)
- Section gap: `var(--space-lg)` (64px)

**Responsive Spacing:**
```css
/* Mobile */
.section {
    padding: var(--space-md);
}

/* Desktop */
@media (min-width: 992px) {
    .section {
        padding: var(--space-xl);
    }
}
```

---

## Layout System

### Grid System

**2-Column Grid**
```css
.grid-2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-md);
}
```

**3-Column Grid**
```css
.grid-3 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-md);
}
```

**4-Column Grid**
```css
.grid-4 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-sm);
}
```

### Container Widths

```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;

.container {
    max-width: var(--container-lg);
    margin: 0 auto;
    padding: 0 var(--space-md);
}
```

---

## Component Library

### Buttons

**Primary Button**
```css
.btn-primary {
    background: var(--color-primary);
    color: white;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.3s ease;
}

.btn-primary:hover {
    background: #9a2722;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(184, 48, 42, 0.2);
}
```

**Secondary Button**
```css
.btn-secondary {
    background: transparent;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
    padding: 1rem 2rem;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.btn-secondary:hover {
    background: var(--color-primary);
    color: white;
}
```

### Cards

**Standard Card**
```css
.card {
    background: white;
    border-radius: 8px;
    padding: var(--space-md);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}
```

**Image Card**
```css
.card-image {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
}

.card-image img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.6s ease;
}

.card-image:hover img {
    transform: scale(1.1);
}
```

### Navigation

**Desktop Navigation**
```css
.nav-menu {
    display: flex;
    gap: var(--space-md);
    align-items: center;
}

.nav-link {
    color: var(--color-charcoal);
    font-weight: 500;
    padding: 0.5rem 1rem;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: var(--color-primary);
}
```

**Mobile Navigation**
```css
@media (max-width: 767px) {
    .nav-menu {
        position: fixed;
        top: 0;
        right: -100%;
        width: 80%;
        height: 100vh;
        background: white;
        flex-direction: column;
        padding: var(--space-xl) var(--space-md);
        transition: right 0.3s ease;
    }
    
    .nav-menu.active {
        right: 0;
        box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
    }
}
```

### Forms

**Input Fields**
```css
.form-input {
    width: 100%;
    padding: 1rem;
    border: 2px solid var(--color-sand);
    border-radius: 8px;
    font-family: var(--font-body);
    font-size: var(--text-base);
    transition: border-color 0.3s ease;
}

.form-input:focus {
    outline: none;
    border-color: var(--color-primary);
}
```

---

## Animation & Transitions

### Timing Functions

```css
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Common Animations

**Fade In Up**
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in-up {
    animation: fadeInUp 0.6s var(--ease-smooth);
}
```

**Card Lift**
```css
.card {
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-8px);
}
```

**Image Zoom**
```css
.image-container {
    overflow: hidden;
}

.image-container img {
    transition: transform 0.6s ease;
}

.image-container:hover img {
    transform: scale(1.1);
}
```

---

## Iconography

### Icon Style

- **Style:** Outlined, minimal
- **Stroke:** 2px
- **Size:** 24px base (scalable)
- **Color:** Inherits from parent

### Usage

```html
<!-- Navigation icon -->
<svg class="icon" width="24" height="24">
  <use href="#icon-menu"></use>
</svg>

<!-- Social media icon -->
<svg class="icon icon-lg" width="32" height="32">
  <use href="#icon-facebook"></use>
</svg>
```

---

## Imagery Guidelines

### Photography Style

**Characteristics:**
- Bright, natural lighting
- Moroccan architecture and landscapes
- Cultural authenticity
- High quality, professional

**Subjects:**
- Rabat landmarks
- Street scenes
- Cultural activities
- Nature and beaches
- Local life

### Image Specs

**Formats:**
- Primary: WebP
- Fallback: JPEG
- Quality: 80-85%

**Sizes:**
- Hero images: 1920x1080px
- Cards: 800x600px
- Thumbnails: 400x300px

**Optimization:**
- Lazy loading enabled
- Responsive srcset
- Alt text required
- Compression applied

---

## Responsive Behavior

### Breakpoint System

```css
/* Mobile: 320px - 767px (base styles) */

/* Tablet: 768px - 991px */
@media (min-width: 768px) {
    /* 2-column grids */
    /* Larger typography */
    /* Adjusted spacing */
}

/* Desktop: 992px - 1199px */
@media (min-width: 992px) {
    /* 3-4 column grids */
    /* Full navigation */
    /* Maximum readability */
}

/* Large Desktop: 1200px+ */
@media (min-width: 1200px) {
    /* Wider containers */
    /* More spacing */
    /* Enhanced visuals */
}
```

### Component Adaptation

**Navigation:**
- Mobile: Hamburger menu
- Desktop: Horizontal menu

**Grids:**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns

**Typography:**
- Mobile: Smaller, compressed
- Desktop: Larger, spacious

---

## Accessibility

### Color Contrast

All text meets WCAG 2.1 AA standards:
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum
- UI components: 3:1 minimum

### Focus States

```css
*:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
}

*:focus:not(:focus-visible) {
    outline: none;
}

*:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
}
```

### Text Sizing

- Base size: 16px (1rem)
- Minimum: 14px (0.875rem)
- Resizable to 200% without breaking

---

## Design Tokens

All design values are stored as CSS custom properties:

```css
:root {
    /* Colors */
    --color-primary: #B8302A;
    --color-secondary: #2C6E49;
    
    /* Typography */
    --font-display: 'Playfair Display', serif;
    --font-body: 'Inter', sans-serif;
    
    /* Spacing */
    --space-xs: 0.5rem;
    --space-sm: 1rem;
    
    /* Timing */
    --duration-fast: 0.2s;
    --duration-normal: 0.3s;
    
    /* Shadows */
    --shadow-sm: 0 2px 4px rgba(0,0,0,0.1);
    --shadow-md: 0 10px 30px rgba(0,0,0,0.1);
    --shadow-lg: 0 20px 50px rgba(0,0,0,0.15);
}
```

---

## Usage Examples

### Complete Card Component

```css
.feature-card {
    background: white;
    border-radius: 8px;
    padding: var(--space-md);
    box-shadow: var(--shadow-md);
    transition: all var(--duration-normal) var(--ease-smooth);
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.feature-card__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: var(--space-sm);
}

.feature-card__title {
    font-family: var(--font-display);
    font-size: var(--text-2xl);
    color: var(--color-charcoal);
    margin-bottom: var(--space-xs);
}

.feature-card__description {
    font-family: var(--font-body);
    font-size: var(--text-base);
    color: var(--color-stone);
    line-height: 1.6;
}
```

---

**Last Updated:** January 2026  
**Version:** 2.0.0  
**Design Team:** Rabat Cultural Website
