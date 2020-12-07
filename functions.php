<?php
    function register_styles() {
        wp_enqueue_style('style', get_template_directory_uri() . '/style.css');

        wp_enqueue_style('media-styles', get_template_directory_uri() . '/assets/css/media.css');
    }

add_action('wp_enqueue_scripts', 'register_styles');

    function upload_scripts() {
        // wp_deregister_script('script');

        wp_register_script('script-style', get_template_directory_uri() .'/assets/js/script.js');
        wp_enqueue_script('script-style');

        wp_register_script('SmoothScrolling', get_template_directory_uri() .'/assets/js/SmoothScroll.js', array('script-style'), null, false);
        wp_enqueue_script('SmoothScrolling');
        
        function defer_parsing_of_js ( $url ) {
            if ( FALSE === strpos( $url, '.js' ) ) return $url;
            if ( strpos( $url, 'jquery.js' ) ) return $url;
            return "$url' defer ";
            }
            add_filter( 'clean_url', 'defer_parsing_of_js', 11, 1 );

    }

add_action('wp_enqueue_scripts', 'upload_scripts');
