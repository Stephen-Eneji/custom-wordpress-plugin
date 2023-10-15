import { registerBlockType } from '@wordpress/blocks';
import { TextControl, ToggleControl } from '@wordpress/components';

registerBlockType('my-slideshow-plugin/slideshow', {
    title: 'Slideshow',
    icon: 'format-gallery',
    category: 'common',
    attributes: {
        // Get back to write this
    },
    edit: function(props) {
        const { attributes, setAttributes } = props;
        
        
        const showTitle = attributes.showTitle || false;
        const showImage = attributes.showImage || false;
        const autoScroll = attributes.autoScroll || false;
        

        const updateAttributes = newAttributes => {
            setAttributes(newAttributes);
        };

        return (
            <div className="my-slideshow-block">
                {/* Toggle to show/hide title */}
                <ToggleControl
                    label="Show Title"
                    checked={showTitle}
                    onChange={value => updateAttributes({ showTitle: value })}
                />

                {/* Toggle to show/hide image */}
                <ToggleControl
                    label="Show Image"
                    checked={showImage}
                    onChange={value => updateAttributes({ showImage: value })}
                />

                {/* Toggle for auto-scroll */}
                <ToggleControl
                    label="Auto-Scroll"
                    checked={autoScroll}
                    onChange={value => updateAttributes({ autoScroll: value })}
                />

                {/* // Get back to write this*/}
            </div>
        );
    },
    save: function(props) {
        const { attributes } = props;
        
        // Define the saved content structure based on block attributes
        const savedContent = (
            <div className="my-slideshow-block">
                {attributes.showTitle && (
                    <h3>{attributes.postTitle}</h3>
                )}
                {attributes.showImage && (
                    <img src={attributes.featuredMediaSrc} alt={attributes.postTitle} />
                )}
                {attributes.showDate && (
                    <p>{attributes.postDate}</p>
                )}
            </div>
        );
    
        return savedContent;
    }
});
