
const makeHome = () => {
    const home = document.createElement('div');
    const about = document.createElement('div');
    const hours = document.createElement('div');

    about.appendChild(makeHead('About Us'));
    about.appendChild(makeParagraph('Bob and family has been creating, making and perfecting sandwiches since 1910, all for your pleasure!'));

    hours.appendChild(makeHead('Hours'));
    hours.appendChild(makeParagraph('Weekdays: 10 AM - 10 PM'));
    hours.appendChild(makeParagraph('Weekends: 12 PM - 1 AM'));


    home.setAttribute('id', 'home');
    home.classList.add('home');

    home.appendChild(makeHead("Your favourite sandwich at hands reach"));
    home.appendChild(about);
    home.appendChild(hours);


    return home;
};

const loadHome = () => {
    const main  = document.querySelector('#main')
    main.textContent = '';

    main.appendChild(makeHome());

    return main
};


const makeHead = (text) => {
    const head = document.createElement('h1');
    head.textContent = text;

    return head;
};

const makeParagraph = (text) => {
    const par = document.createElement('p');
    par.textContent = text;

    return par;
};


const main = document.querySelector('#main')

export {makeHome, loadHome, makeHead, makeParagraph};