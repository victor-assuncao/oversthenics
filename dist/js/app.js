window.addEventListener('scroll', function () {
    var currentScroll = window.scrollY;
    var header = document.querySelector('#header');
    if (currentScroll > 100) {
        return header.classList.add('header--fixed');
    }
    header.classList.remove('header--fixed');
});
