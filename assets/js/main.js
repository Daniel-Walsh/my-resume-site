const FADE_OFFSET = 250;

function checkScrollPosition() {
    if (window.scrollY > 100) {
        document.getElementById('scroll-down').classList.add('hide');
    }
    
    var hiddenElements = document.getElementsByClassName('fadein');
    
    if (hiddenElements.length === 0) {
        document.removeEventListener('scroll', checkScrollPosition);
        return;
    }

    for (i = 0; i < hiddenElements.length; i++) {
        elem = hiddenElements[i];
        elemY = elem.getBoundingClientRect().y;
   
        if (elemY - window.innerHeight + FADE_OFFSET <= 0) {
            elem.classList.remove('fadein');
        }
    }
}

window.onload = function() {
    // Lazy load images
    var lazyImages = document.getElementsByClassName('lazy');
    for (i = 0; i < lazyImages.length; i++) {
        lazyImages[i].setAttribute('src', lazyImages[i].getAttribute('data-lazy'));
    }

    // Reveal the page after 1 sec
    setTimeout(() => {
        document.getElementsByTagName('body')[0].classList.remove('fadein');
        document.addEventListener('scroll', checkScrollPosition);
    }, 1000);
};