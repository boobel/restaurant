import {makeHead, makeParagraph} from "./home";
import { makeFooter } from "./web";
import Icon from './icon.png';

//RUDIMENTARY ITEMS DATABASE
var menuItems = ['','','','','','','','','',''];
var names = ['A','B','C','D','E','F','G','H','I','J'];
var prices = [12,15,17,10,24,32,30,15,50,64];
var bases = ['Classic','Classic','Classic','Classic','Classic','Classic','Classic','Classic','Classic','Classic'];
var toppings = [
['Beef patty', 'gouda cheese', 'lettuce', 'tomato', 'onion'],
['Beef patty', 'gouda cheese', 'lettuce', 'tomato', 'onion'],
['Beef patty', 'gouda cheese', 'lettuce', 'tomato', 'onion'],
['Beef patty', 'gouda cheese', 'lettuce', 'tomato', 'onion'],
['Beef patty', 'gouda cheese', 'lettuce', 'tomato', 'onion'],
['Beef patty', 'gouda cheese', 'lettuce', 'tomato', 'onion'],
['Beef patty', 'gouda cheese', 'lettuce', 'tomato', 'onion'],
['Beef patty', 'gouda cheese', 'lettuce', 'tomato', 'onion'],
['Beef patty', 'gouda cheese', 'lettuce', 'tomato', 'onion'],
['Beef patty', 'gouda cheese', 'lettuce', 'tomato', 'onion']
];


const makeMenu = () => {
    const menu = document.createElement('div');
    menu.setAttribute('id','menu')
    menu.classList.add('menu')

    
    
    for(let i = 0; i < menuItems.length; i++) {
        const item = document.createElement('div');
        const textContent = document.createElement('div')
        item.setAttribute('id','item')
        textContent.setAttribute('id','itemText')
        item.appendChild(textContent)
        menu.appendChild(item);
    }

    return menu;
}

const makeItem = () => {
    const items = document.querySelectorAll('#item')
    const itemTexts = document.querySelectorAll('#itemText')


    let j = 0;

    itemTexts.forEach(item => {
        item.appendChild(makeHead(menuItems[j].getName))
        item.appendChild(makeParagraph('Price: ' + menuItems[j].getPrice + '$'))
        item.appendChild(makeParagraph('Base: ' + menuItems[j].getBase))
        item.appendChild(makeParagraph('Ingridients: ' + menuItems[j].getToppings))
        j++
    });

    items.forEach(item => {
        const Img = new Image();
        Img.src = Icon;
        item.appendChild(Img);

        j++
    });


    return item;
};

const fillMenu = (arr, prices, bases, toppings) => {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = new Sandwich;
    }

    let i = 0;
    arr.forEach(sandwich => {
        sandwich.setName = names[i];
        sandwich.setPrice = prices[i];
        sandwich.setBase = bases[i];
        sandwich.setToppings = toppings[i];
        i++;
    });

};




const loadMenu = () => {
    const main = document.querySelector('#main');
    main.textContent = '';

    main.appendChild(makeMenu())
    fillMenu(menuItems, prices, bases, toppings);
    makeItem();

    main.appendChild(makeFooter())

    return main;
}





class Sandwich {
    constructor(name, price, base, toppings) {
        this.name = name;
        this.price = price;
        this.base = base;
        this.toppings = toppings;
    };

    set setName(name) {
        this.name = name;
    };

    set setPrice(price) {
        this.price = price;
    };

    set setBase(base) {
        this.base = base;
    };

    set setToppings(toppings) {
        this.toppings = toppings;
    };

    get getName(){
        return this.name
    }

    get getPrice(){
        return this.price
    }

    get getBase(){
        return this.base
    }

    get getToppings(){
        return this.toppings
    }

}



export {loadMenu};