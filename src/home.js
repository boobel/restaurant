const makeHome = () => {
    const home = document.createElement('div');
    home.setAttribute('id', 'home')
    home.classList.add('home')

    home.appendChild(makeParagraph("Your favourite sandwich at hands reach"))

    return home;
};


const makeParagraph = (text) => {
    const par = document.createElement('p');
    par.textContent = text;

    return par;
};

export default makeHome;