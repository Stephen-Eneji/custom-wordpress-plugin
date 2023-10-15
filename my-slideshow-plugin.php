<?php
/*
Plugin Name: My Slideshow Plugin
Description: Custom Gutenberg block for fetching and displaying data as a slideshow.
Author: By Stephen Eneji
*/

function my_slideshow_plugin_enqueue() {
    wp_enqueue_script('my-slideshow-block', plugins_url('src/block/index.js', __FILE__), array('wp-blocks', 'wp-element', 'wp-editor'), true);
    wp_enqueue_style('my-slideshow-styles', plugins_url('src/frontend/styles.css', __FILE__), array(), '1.0');
}
add_action('enqueue_block_editor_assets', 'my_slideshow_plugin_enqueue');
