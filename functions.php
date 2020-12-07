<?php
    function setUp_styles() {
        wp_register_style('style', get_template_directory_uri() . '/style.css');
        wp_enqueue_style('style');

        wp_register_style('media-styles', get_template_directory_uri() . '/assets/css/media.css');
        wp_enqueue_style('media-styles');
    }

add_action('wp_enqueue_scripts', 'setUp_styles');

    function setUp_scripts() {
        wp_register_script('script', get_template_directory_uri() . '/assets/js/script.js');
        wp_enqueue_script('script');

        // wp_enqueue_script('script', get_template_directory_uri() . '/assets/js/script.js');

        wp_register_script('smooth-scrolling', get_template_directory_uri() . '/assets/js/SmoothScroll.js');
        wp_enqueue_script('smooth-scrolling');
        
        function defer_parsing_js($url) {
            if (FALSE === strpos($url, '.js')) return $url;
            if (strpos($url, 'jquery.js')) return $url;
            return "$url' defer '";
        }
        add_filter('clean_url', 'defer_parsing_js');
    }

add_action('wp_enqueue_scripts', 'setUp_scripts');
