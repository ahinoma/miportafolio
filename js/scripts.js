document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');

    gallery.addEventListener('wheel', function(event) {
        if (event.deltaY !== 0) {
            event.preventDefault();
            gallery.scrollLeft += event.deltaY;
        }
    });
});
