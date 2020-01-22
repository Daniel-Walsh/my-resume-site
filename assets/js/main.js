function checkScrollPosition() {
    if (window.scrollY > 100) {
        document.getElementById('scroll-down').classList.add('hide');
        document.removeEventListener('scroll', checkScrollPosition);
    }
}

document.addEventListener('scroll', checkScrollPosition);
