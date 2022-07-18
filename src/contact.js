import {makeHead, makeParagraph} from "./home";
import Map from './map.png';
import { makeFooter } from "./web";



const makeContact = () => {
    const contact = document.createElement('div');
    const hours = document.createElement('div');


    contact.setAttribute('id', 'contact')



    hours.appendChild(makeHead('Hours'));
    hours.appendChild(makeParagraph('Weekdays: 10 AM - 10 PM<br/>'));
    hours.appendChild(makeParagraph('Weekends: 12 PM - 1 AM'));


    contact.appendChild(hours);
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
    main.appendChild(makeFooter());

    return main
};

export {loadContact};