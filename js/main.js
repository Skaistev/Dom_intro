

// 'use strict';

// import { sumavimas} from './components/sum.js';
// import { daugyba } from './components/daugyba.js';
// import { dalyba } from './components/dalyba.js';
// import { liekana } from './components/liekana.js';

// console.log(sumavimas(7, 5));
// console.log(daugyba(7, 5));
// console.log(dalyba(7, 5));
// console.log(liekana(7, 5));


console.log(document)
console.log(document.getElementById("title"))

const titleDOM = document.getElementById('title');

// titleDOM.innerText = 'Kaip gaminami blynai?';
// titleDOM.textContent = 'Kaip gaminami blynai???';

console.log("--->",titleDOM.innerText);
console.log(titleDOM.textContent);

titleDOM.innerText = 'Kaip gaminami blynai?';
titleDOM.textContent = 'Kaip gaminami blynai???';

const ingridientsDOM = document
    .getElementsByTagName('ul')[0]
    .getElementsByTagName('li');

    console.log(ingridientsDOM )

    const Uls = document.getElementsByTagName('ul');
const FirstLi = [Uls[0].getElementsByTagName('li')[0],
Uls[1].getElementsByTagName('li')[0]
]


console.log(FirstLi)


// const titleDom = 

const ingridients = [];

// for (let i = 0; i < ingridientsDOM.length; i++) {
//     const ingridientDOM = ingridientsDOM[i];
//     ingridients.push(ingridientDOM.innerText);
// }

for (const ingridientDOM of ingridientsDOM) {
    ingridients.push(ingridientDOM.innerText);
}

// const ingridients = [...ingridientsDOM].map(
//     ingridientDOM => ingridientDOM.innerText
// );

console.log(ingridients);

// // [...ingridientsDOM].forEach(
// //     ingridientDOM => ingridientDOM.innerText += ' (???)'
// // );

// for (const ingridientDOM of ingridientsDOM) {
//     ingridientDOM.innerText += ' (???)';
// }


