// My function to fetch data from the REST API https://wptavern.com/wp-json/wp/v2/posts

function createSlideshow(data) {
    const slideshowContainer = document.querySelector('.my-slideshow');
    const slides = data.map(post => {
        return `
            <div class="slide">
                <img src="${post.featured_media_src_url}" alt="${post.title.rendered}">
                <h3>${post.title.rendered}</h3>
                <p>${post.date}</p>
            </div>
        `;
    });

    slideshowContainer.innerHTML = slides.join('');
    const slideElements = slideshowContainer.querySelectorAll('.slide');
    let currentSlideIndex = 0;
    slideElements[currentSlideIndex].classList.add('active');

    // Function to handle click events on post titles and images
    function handleItemClick(event) {
        if (event.target.tagName === 'IMG' || event.target.tagName === 'H3') {
            const postLink = data[currentSlideIndex].link;
            window.open(postLink, '_blank'); 
        }
    }

    // Add click event listener to the slideshow container
    slideshowContainer.addEventListener('click', handleItemClick);

    // Function to advance to the next slide
    function nextSlide() {
        slideElements[currentSlideIndex].classList.remove('active');
        currentSlideIndex = (currentSlideIndex + 1) % slideElements.length;
        slideElements[currentSlideIndex].classList.add('active');
    }

    // Function to go back to the previous slide
    function previousSlide() {
        slideElements[currentSlideIndex].classList.remove('active');
        currentSlideIndex = (currentSlideIndex - 1 + slideElements.length) % slideElements.length;
        slideElements[currentSlideIndex].classList.add('active');
    }

    // Handle keyboard navigation
    document.addEventListener('keydown', event => {
        if (event.key === 'ArrowRight') {
            nextSlide();
        } else if (event.key === 'ArrowLeft') {
            previousSlide();
        }
    });
}

// Initialize the slideshow when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://wptavern.com/wp-json/wp/v2/posts'; // API endpoint for WPTavern
    fetchData(apiUrl).then(data => {
        createSlideshow(data);
    });
});
