import {makeHome, loadHome} from './home.js'
import {loadMenu} from './menu'
import {loadContact} from './contact.js';



const makeHeader = () => {
    const header = document.createElement('div');
    header.setAttribute('id', 'header');
    header.classList.add('header')

    header.textContent = "Birjir";

    header.append(makeNavBar());
    return header;
};

const fillNavBar = (e) => {

    const homeBtn = e.appendChild(document.createElement('button'));
    const menuBtn = e.appendChild(document.createElement('button'));
    const contactBtn = e.appendChild(document.createElement('button'));

    homeBtn.classList.add('navbtn');
    menuBtn.classList.add('navbtn');
    contactBtn.classList.add('navbtn');

    homeBtn.innerHTML = 'HOME';
    menuBtn.innerHTML ='MENU';
    contactBtn.innerHTML = 'CONTACT';

    const content = document.getElementById("content");

    homeBtn.addEventListener('click', () => {
        content.appendChild(loadHome());
    })

    menuBtn.addEventListener('click', () => {
        content.append(loadMenu())
    })

    contactBtn.addEventListener('click', () => {
        content.appendChild(loadContact())
    })

    return {homeBtn, menuBtn, contactBtn};
};

const makeNavBar = () => {
    const navbar = document.createElement('nav');
    
    fillNavBar(navbar);


    return navbar
};

const makeMain = () => {
    const main = document.createElement('div');
    main.setAttribute('id','main');
    main.classList.add('main')

    main.appendChild(makeHome());
    main.appendChild(makeFooter());

    return main;
};


const makeFooter = () => {
    const footer = document.createElement('footer')
    footer.classList.add("footer")

    footer.textContent = 'Copyright © Patryk Borowski 2022'

    return footer;
};


const webInit = () => {
    const content = document.querySelector("#content");



    content.appendChild(makeHeader());
    content.appendChild(makeMain());


    return content
}



export {webInit, makeFooter};

