/* JS for components across the Scratch site (e.g. banners, world map) */

(function() {
  function removeComponents() {
    const studentBanners = document.querySelectorAll('.student-deactivation-banner');
    const popOver = document.querySelectorAll('[class*="feature-callout-popover_popover"]');
    
    studentBanners.forEach(function(el) {
        el.remove();
    }); 

    popOver.foreach(function(el) {
        el.remove();
    });
  }

removeComponents();

  let observer = new MutationObserver(function() {
    removeComponents();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
