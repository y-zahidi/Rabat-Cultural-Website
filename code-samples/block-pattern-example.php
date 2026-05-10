<?php
/**
 * Block Pattern Example: Hero Section
 * 
 * This is a representative example of how block patterns are structured
 * in the Rabat Cultural Website theme. Block patterns allow content
 * creators to insert pre-designed sections into pages.
 * 
 * Pattern Name: Hero Section with Background
 * Category: Rabat Patterns - Hero
 * Usage: Homepage, landing pages, feature pages
 * 
 * @package Rabat_Cultural_Website
 * @version 2.0.0
 */

/**
 * Register the block pattern
 * 
 * This function registers the pattern with WordPress, making it available
 * in the block inserter under the "Rabat Patterns" category.
 */
register_block_pattern(
    'rabat/hero-section',
    array(
        'title'       => __( 'Hero Section with Background', 'rabat' ),
        'description' => __( 'Large hero section with background image and call-to-action', 'rabat' ),
        'categories'  => array( 'rabat-patterns' ),
        'keywords'    => array( 'hero', 'header', 'banner', 'cta' ),
        'content'     => '
            <!-- wp:cover {"url":"path/to/image.jpg","dimRatio":50,"overlayColor":"charcoal","align":"full"} -->
            <div class="wp-block-cover alignfull">
                <span aria-hidden="true" class="wp-block-cover__background"></span>
                
                <div class="wp-block-cover__inner-container">
                    <!-- wp:group {"layout":{"type":"constrained","contentSize":"1200px"}} -->
                    <div class="wp-block-group">
                        
                        <!-- wp:heading {"level":1,"textColor":"white","fontSize":"huge"} -->
                        <h1 class="has-white-color has-huge-font-size">
                            Découvrez Rabat
                        </h1>
                        <!-- /wp:heading -->
                        
                        <!-- wp:paragraph {"textColor":"white","fontSize":"large"} -->
                        <p class="has-white-color has-large-font-size">
                            Capitale culturelle du Maroc, entre tradition et modernité
                        </p>
                        <!-- /wp:paragraph -->
                        
                        <!-- wp:buttons -->
                        <div class="wp-block-buttons">
                            <!-- wp:button {"backgroundColor":"primary","className":"is-style-fill"} -->
                            <div class="wp-block-button is-style-fill">
                                <a class="wp-block-button__link has-primary-background-color">
                                    Explorer Rabat
                                </a>
                            </div>
                            <!-- /wp:button -->
                        </div>
                        <!-- /wp:buttons -->
                        
                    </div>
                    <!-- /wp:group -->
                </div>
            </div>
            <!-- /wp:cover -->
        ',
    )
);

/**
 * Pattern Structure Explanation:
 * 
 * 1. Cover Block (wp:cover)
 *    - Full-width background container
 *    - Supports images or videos
 *    - Dim ratio for text readability
 *    - Overlay color for consistency
 * 
 * 2. Group Block (wp:group)
 *    - Content container
 *    - Constrained width for readability
 *    - Centered alignment
 * 
 * 3. Heading Block (wp:heading)
 *    - Main page title
 *    - Level 1 for SEO
 *    - White color for contrast
 *    - Large font size
 * 
 * 4. Paragraph Block (wp:paragraph)
 *    - Supporting text
 *    - White color
 *    - Larger than body text
 * 
 * 5. Button Block (wp:button)
 *    - Call-to-action
 *    - Primary brand color
 *    - Large touch target
 * 
 * Benefits of Block Patterns:
 * - Consistent design across pages
 * - No coding required to use
 * - Easy customization of content
 * - Maintains brand standards
 * - Speeds up page creation
 * 
 * How to Use:
 * 1. Edit page in WordPress
 * 2. Click (+) to add block
 * 3. Browse "Patterns" tab
 * 4. Select "Rabat Patterns" category
 * 5. Click pattern to insert
 * 6. Customize text and image
 * 7. Publish page
 */

/**
 * Additional Pattern Examples in the Theme:
 * 
 * - Hero variations (image, video, gradient)
 * - Content cards (2-col, 3-col, 4-col)
 * - Gallery layouts (grid, masonry)
 * - Call-to-action blocks
 * - Contact forms
 * - Footer layouts
 * - Feature sections
 * - Testimonial blocks
 * 
 * Total: 50+ custom patterns
 */
?>
