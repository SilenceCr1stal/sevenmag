<?php
    function register_styles() {
        wp_register_style('style.css', get_template_directory_uri() . '/style.css');
        wp_enqueue_style('style.css');

        wp_register_style('media', get_template_directory_uri() . '/media.css');
        wp_enqueue_style('media');
    }

add_action('wp_enqueue_scripts', 'register_styles');

    function upload_scripts() {
        wp_deregister_script('script');

        wp_register_script('script', get_template_directory_uri() .'/script.js');
        wp_enqueue_script('script');

        wp_register_script('SmoothScrolling', get_template_directory_uri() .'/SmoothScroll.js', array('script'), null, false);
        wp_enqueue_script('SmoothScrolling');

        wp_register_script('jquery', get_template_directory_uri() .'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js', 
            array('script'), null, false);
        wp_enqueue_script('jquery');
    }

add_action('wp_enqueue_scripts', 'upload_scripts');