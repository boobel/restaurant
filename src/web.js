import {makeHome, loadHome} from './home.js'


const makeHeader = () => {
    const header = document.createElement('div');
    header.setAttribute('id', 'header');
    header.classList.add('header')

    header.textContent = "Sabini's";

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

    homeBtn.textContent = 'HOME';
    menuBtn.textContent ='MENU';
    contactBtn.textContent = 'CONTACT';

    const content = document.getElementById("content");

    homeBtn.addEventListener('click', () => {
        content.appendChild(loadHome());
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

    return main;
};


const makeFooter = () => {
    const footer = document.createElement('footer')
    footer.classList.add("footer")

    footer.textContent = 'Copyright © Patryk Borowski 2022'

    return footer;
};


const webInit = () => {
    const content = document.getElementById("content");

    content.appendChild(makeHeader());
    content.appendChild(makeMain());
    content.appendChild(makeFooter());
}

export default webInit;