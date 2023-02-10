import { Data } from "./data.js";
import { Header } from "./header.js";

declare const Mustache: any;
declare const $: any;

// Trocar o estado do header quando scrolar a tela
window.addEventListener('scroll', () => {

    const currentScroll: number = window.scrollY;
    const header: HTMLHeadingElement = document.querySelector('#header');

    if (currentScroll > 100) {

        return header.classList.add('header--fixed');
    }

    header.classList.remove('header--fixed');
})

// Gerar o modal quando clicar no card do atleta
document.querySelectorAll('#athlete').forEach((element: HTMLElement) => {

    const modalTemplate = $('#modal-athlete-template').html();
    const data = new Data().athleteURL;

    element.addEventListener('click', () => {

        const name: string = element.getAttribute('data-name');

        const html = Mustache.render(modalTemplate, {url: data[name]});

        document.querySelector('#modal-container').innerHTML = html;

        const closeModal = [
            'modal-back',
            'modal-background'
        ];

        closeModal.forEach((element: string) => {

            document.querySelector(`#${element}`).addEventListener('click', () => {

                document.querySelector('#modal').remove();
                document.querySelector('#modal-background').remove();
            })
        })
    });
});

new Header();
