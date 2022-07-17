const makeHome = () => {
    const home = document.createElement('div');
    const about = document.createElement('div');
    const hours = document.createElement('div');
    const location = document.createElement('div');

    about.appendChild(makeHead('About Us'));
    about.appendChild(makeParagraph('Sabini and family has been creating,making and perfecting sandwiches since 1910, all for your pleasure!'));

    hours.appendChild(makeHead('Hours'));
    hours.appendChild(makeParagraph('Weekdays: 10 AM - 10 PM'));
    hours.appendChild(makeParagraph('Weekends: 12 PM - 1 AM'));

    location.appendChild(makeHead('Location'));
    location.appendChild(makeParagraph("Find us at 299 Orchard Street, Chastings"));

    home.setAttribute('id', 'home');
    home.classList.add('home');

    home.appendChild(makeHead("Your favourite sandwich at hands reach"));
    home.appendChild(about);
    home.appendChild(hours);
    home.appendChild(location);

    return home;
};

const loadHome = () => {
    const main = document.querySelector('#main')

    main.innerHTML = '';
    main.appendChild(makeHome());

    return main;
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

export {makeHome, loadHome};