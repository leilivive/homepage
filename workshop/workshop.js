(function() {
    try {
        var smoothElements = document.querySelectorAll('[data-smooth-scroll]');
        for (var i = 0; i < smoothElements.length; i++) {
            var smoothElement = smoothElements[i];
            var targetHref = smoothElement.getAttribute('href');
            var targetElement = document.querySelector(targetHref);
            if (targetElement) {
                smoothElement.addEventListener('click', function(event) {
                    event.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    setTimeout(function() {
                        location.href = targetHref;
                        targetElement.focus();
                    }, 500);
                }, false);
            }
        }
    } catch (error) {}
})();
