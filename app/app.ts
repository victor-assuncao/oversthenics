window.addEventListener('scroll', () => {

    const currentScroll: number = window.scrollY;
    const header: HTMLHeadingElement = document.querySelector('#header');

    if (currentScroll > 100) {

        return header.classList.add('header--fixed');
    }

    header.classList.remove('header--fixed');
})