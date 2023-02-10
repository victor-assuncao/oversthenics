export class Header {
    constructor() {
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;
            const header = document.querySelector('#header');
            if (currentScroll > 100) {
                return header.classList.add('header--fixed');
            }
            header.classList.remove('header--fixed');
        });
        this.openMenu();
        this.closeMenu();
    }
    openMenu() {
        document.querySelector('#header-menu').addEventListener('click', () => {
            document.querySelector('#mobile').classList.remove('is-invisible');
        });
    }
    ;
    closeMenu() {
        ['mobile', 'nav-close'].forEach((element) => {
            document.querySelector(`#${element}`).addEventListener('click', () => {
                document.querySelector('#mobile').classList.add('is-invisible');
            });
        });
    }
}
