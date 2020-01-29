const FADE_OFFSET = 250;

function checkScrollPosition() {

    var scrollPerent = Number.parseFloat((window.scrollY / (document.getElementsByTagName('body')[0].scrollHeight - window.innerHeight)) * 100).toFixed(3);

    document.getElementById('scroll-progress').setAttribute('value', scrollPerent);

    if (window.scrollY > window.innerHeight) {
        document.getElementsByClassName('logo-float')[0].classList.remove('hide');
    } else {
        document.getElementsByClassName('logo-float')[0].classList.add('hide');
    }

    if (window.scrollY > 100) {
        document.getElementById('scroll-down').classList.add('hide');
    }
    
    var hiddenElements = document.getElementsByClassName('fadein');
    
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

    var logoFloat = document.getElementsByClassName('logo-float')[0];
    logoFloat.addEventListener('click', function(e){
        e.preventDefault();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });

    // Reveal the page after 1 sec
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hide');
        document.addEventListener('scroll', checkScrollPosition);
    }, 1000);
};