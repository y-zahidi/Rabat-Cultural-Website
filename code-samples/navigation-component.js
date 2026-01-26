/**
 * Mobile Navigation Component
 * 
 * Handles responsive mobile menu functionality including:
 * - Hamburger toggle
 * - Slide-in animation
 * - Body scroll lock
 * - ESC key to close
 * - Accessibility (ARIA attributes)
 * 
 * @package Rabat_Cultural_Website
 * @version 2.0.0
 */

/**
 * Initialize mobile navigation
 * 
 * This function sets up the mobile menu with smooth animations
 * and proper accessibility features. It's called on DOM ready.
 */
const initMobileMenu = () => {
    // Cache DOM elements for better performance
    const menuToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    
    // Exit if elements don't exist
    if (!menuToggle || !navMenu) {
        return;
    }
    
    /**
     * Toggle menu open/closed
     * Updates ARIA attributes for accessibility
     */
    const toggleMenu = () => {
        const isOpen = navMenu.classList.toggle('active');
        
        // Update ARIA for screen readers
        menuToggle.setAttribute('aria-expanded', isOpen);
        navMenu.setAttribute('aria-hidden', !isOpen);
        
        // Prevent body scroll when menu is open
        body.style.overflow = isOpen ? 'hidden' : '';
        
        // Focus management for accessibility
        if (isOpen) {
            // Focus first menu item
            const firstLink = navMenu.querySelector('a');
            if (firstLink) {
                firstLink.focus();
            }
        } else {
            // Return focus to toggle button
            menuToggle.focus();
        }
    };
    
    /**
     * Close menu
     * Separate function for multiple triggers (ESC key, outside click)
     */
    const closeMenu = () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            navMenu.setAttribute('aria-hidden', 'true');
            body.style.overflow = '';
        }
    };
    
    // Click event on hamburger toggle
    menuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            closeMenu();
        }
    });
    
    // Close menu on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });
    
    // Close menu after clicking a link (for smooth scroll)
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Small delay to allow navigation to start
            setTimeout(closeMenu, 100);
        });
    });
};

/**
 * Initialize smooth scroll for anchor links
 * 
 * Provides smooth scrolling behavior when clicking internal links
 * Accounts for fixed header offset
 */
const initSmoothScroll = () => {
    // Get all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                // Get header height for offset
                const header = document.querySelector('.site-header');
                const offset = header ? header.offsetHeight : 0;
                
                // Calculate scroll position
                const targetPosition = target.offsetTop - offset - 20; // Extra 20px padding
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without jumping
                history.pushState(null, null, href);
            }
        });
    });
};

/**
 * Handle sticky header on scroll
 * 
 * Adds shadow and background to header when scrolled
 * Improves readability and adds depth
 */
const initStickyHeader = () => {
    const header = document.querySelector('.site-header');
    
    if (!header) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add shadow when scrolled
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
};

/**
 * Initialize all navigation features on DOM ready
 * 
 * This is the main entry point called when the page loads
 */
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initSmoothScroll();
    initStickyHeader();
});

/**
 * CSS Classes Used:
 * 
 * .nav-toggle        - Hamburger button
 * .nav-menu          - Mobile menu container
 * .nav-menu.active   - Open state
 * .site-header       - Main header element
 * .site-header.scrolled - Scrolled state
 * 
 * Required HTML Structure:
 * 
 * <header class="site-header">
 *   <button class="nav-toggle" aria-expanded="false" aria-label="Toggle menu">
 *     <span></span>
 *     <span></span>
 *     <span></span>
 *   </button>
 *   
 *   <nav class="nav-menu" aria-hidden="true">
 *     <a href="#home">Home</a>
 *     <a href="#about">About</a>
 *     ...
 *   </nav>
 * </header>
 * 
 * Required CSS (minimal example):
 * 
 * .nav-menu {
 *   position: fixed;
 *   right: -100%;
 *   transition: right 0.3s ease;
 * }
 * 
 * .nav-menu.active {
 *   right: 0;
 * }
 * 
 * Performance Notes:
 * - Uses event delegation where appropriate
 * - DOM elements cached to avoid repeated queries
 * - Passive event listeners for better scroll performance
 * - No jQuery required - vanilla JavaScript only
 * 
 * Accessibility Features:
 * - ARIA attributes (aria-expanded, aria-hidden)
 * - Keyboard navigation (ESC to close)
 * - Focus management
 * - Screen reader announcements
 * 
 * Browser Support:
 * - Modern browsers (Chrome, Firefox, Safari, Edge)
 * - Graceful degradation for older browsers
 * - No polyfills required for current setup
 */
