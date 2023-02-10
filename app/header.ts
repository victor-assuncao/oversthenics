export class Header {

    constructor() {

        window.addEventListener('scroll', () => {

            const currentScroll: number = window.scrollY;
            const header: HTMLHeadingElement = document.querySelector('#header');
        
            if (currentScroll > 100) {
        
                return header.classList.add('header--fixed');
            }
        
            header.classList.remove('header--fixed');
        });

        this.openMenu();
        this.closeMenu();
    }

    openMenu(): void {

        document.querySelector('#header-menu').addEventListener('click', () => {

            document.querySelector('#mobile').classList.remove('is-invisible');
        })
    };

    closeMenu() {

        ['mobile', 'nav-close'].forEach((element: string) => {

            document.querySelector(`#${element}`).addEventListener('click', () => {

                document.querySelector('#mobile').classList.add('is-invisible');
            })
        });
    }
}