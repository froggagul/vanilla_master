핵심은 다음과 같다.

```js
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
```

* [참고](https://dev.to/ekafyi/lazy-loading-images-with-vanilla-javascript-2fbj#:~:text=Improve%20your%20website's%20speed%20and,when%20they%20appear%20on%20screen.)