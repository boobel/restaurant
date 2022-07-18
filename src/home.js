import { makeFooter } from "./web";
import Maker from './maker.jpg';




const makeHome = () => {
    const home = document.createElement('div');
    const about = document.createElement('div');

    about.appendChild(makeParagraph('Scientifically develop to perfection, introducing Birjir patty. Completely halal, for your pleasure.'));

        
    const Img = new Image();
    Img.src = Maker;
    Img.setAttribute('id','maker')

    




    home.setAttribute('id', 'home');
    home.classList.add('home');


    home.appendChild(makeHead("World's First Halal Burger"));
    home.appendChild(about);
    home.appendChild(Img);


    return home;
};

const loadHome = () => {
    const main  = document.querySelector('#main')
    main.textContent = '';

    main.appendChild(makeHome());
    main.appendChild(makeFooter());

    return main
};


const makeHead = (text) => {
    const head = document.createElement('h1');
    head.textContent = text;

    return head;
};

const makeParagraph = (text) => {
    const par = document.createElement('a');
    par.innerHTML = text;

    return par;
};


const main = document.querySelector('#main')

export {makeHome, loadHome, makeHead, makeParagraph};