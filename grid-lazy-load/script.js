document.addEventListener("DOMContentLoaded", function() {
  // Get our lazy-loaded images
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  // Do this only if IntersectionObserver is supported
  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      // ... callback function content here
      entries.forEach(function(entry) {
        // Do these if the target intersects with the root
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  }
});