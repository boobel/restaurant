import {makeHead, makeParagraph} from "./home";
import Map from './map.png';


const makeContact = () => {
    const contact = document.createElement('div');

    contact.setAttribute('id', 'contact')


    contact.appendChild(makeHead('Contact Us'))
    contact.appendChild(makeParagraph('Calls us at 123-456-789'))
    contact.appendChild(makeParagraph("Find us at 299 Orchard Street, Chastings"))

    const Img = new Image();
    Img.src = Map;
    Img.setAttribute('id','map')
    contact.appendChild(Img);

    return contact
};


const makeContactForm = () => {


};

const loadContact = () => {
    const main  = document.querySelector('#main')
    main.textContent = '';

    main.appendChild(makeContact());

    return main
};

export {loadContact};