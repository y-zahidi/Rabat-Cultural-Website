# Rabat Cultural Website

> A WordPress block-theme site dedicated to Morocco's capital — its medina, neighborhoods, beaches, transport, history. Eight thematic sections, ~80 000 words of original content, accessibility and performance taken seriously.

![status](https://img.shields.io/badge/status-active-5cf2c1?labelColor=0a0e14)
![license](https://img.shields.io/badge/license-proprietary-5cf2c1?labelColor=0a0e14)
![wordpress](https://img.shields.io/badge/wordpress-6.4%2B-5cf2c1?labelColor=0a0e14)

**Live site:** <https://rabatculture.lovestoblog.com>

## What it is

A digital tourism platform for Rabat. The goal was to do the *opposite* of what most tourism sites do — instead of recycled stock photos and generic top-10 lists, write long, specific, useful content (where to actually buy babouches in the medina, how the tramway connects Salé to Agdal, which beach is safe for kids in winter), then design around that content.

This repo is a **portfolio mirror** — full theme source not included. Code snippets, screenshots and architecture write-up are.

## Sections

1. **Shopping** — souks vs malls, etiquette around bargaining, neighbourhood-by-neighbourhood guide.
2. **Sports & activities** — golf, water sports, surfing at Témara, gyms.
3. **Beaches** — the Atlantic coast, family-friendly vs surf spots, safety.
4. **Nature & parks** — Jardin d'Essais, exotic gardens, walking circuits.
5. **Historic medina** — UNESCO context, monuments, crafts, living history.
6. **Getting around** — tramway, bus, taxis, sustainable mobility.
7. **Neighborhoods** — six districts, character and amenities.
8. **Practical info** — visa, currency, climate, customs, emergencies.

## Built with

- WordPress 6.4+ block-theme architecture (FSE).
- PHP 8.0+, MySQL 8.
- ~50 custom block patterns.
- HTML5 + CSS3 + vanilla JavaScript (ES6+).
- ~1 500 lines of CSS, ~320 lines of JS — deliberately small.

## What I optimised for

| Concern | What I did |
|---|---|
| Performance | Lazy-loaded images, WebP with fallbacks, critical CSS inlined, JS deferred. Mobile PageSpeed sits at 92, desktop at 98 in tests. |
| Accessibility | WCAG 2.1 AA target — keyboard navigation, screen-reader-friendly, semantic HTML. |
| Maintenance | Block patterns over hard-coded templates so the content team can edit without touching PHP. |
| SEO | Clean URLs, semantic markup, OG tags, structured data on key pages. |

## Code snippets

```php
// Register custom block patterns for the theme
function rabat_register_block_patterns() {
    register_block_pattern_category(
        'rabat-patterns',
        ['label' => __('Rabat Patterns', 'rabat')]
    );

    register_block_pattern('rabat/hero-section', [
        'title'       => __('Hero Section', 'rabat'),
        'description' => __('Large hero with background image', 'rabat'),
        'categories'  => ['rabat-patterns'],
        'content'     => '<!-- wp:cover --> ... <!-- /wp:cover -->',
    ]);
}
```

```css
:root {
  /* Moroccan-leaning palette */
  --color-primary:   #B8302A;  /* zellige red */
  --color-secondary: #2C6E49;  /* mint green */
  --color-accent:    #3A5F7D;  /* atlantic blue */
  --color-gold:      #C9A961;
  --font-display: 'Playfair Display', serif;
  --font-body:    'Inter', sans-serif;
}
```

## Screenshots

| Homepage | Mobile |
|:--:|:--:|
| ![home](screenshots/homepage-desktop.png) | ![mobile](screenshots/homepage-mobile.png) |

## Roadmap

- [x] Eight thematic sections, full content.
- [x] FSE block theme, ~50 patterns.
- [ ] Event calendar with category filtering.
- [ ] Interactive map (Leaflet, OpenStreetMap tiles).
- [ ] Multilingual (Arabic, French, English).
- [ ] Newsletter + RSS for cultural events.

## Credit & honesty

This started as a school assignment with a small team; I led the build (theme, performance, accessibility, deployment) and wrote most of the long-form content myself. If you reach out and want a list of teammates or want to license the theme, that's a real conversation — yassirzahidi8@gmail.com.

— Yassir Zahidi · Rabat, Morocco · [portfolio](https://y-zahidi.github.io)
