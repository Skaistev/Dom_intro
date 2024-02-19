const data1 = ['Miltai','druska','vanduo','kiausiniai'];
const data2 = ['Miltai1','druska2','vanduo3','kiausiniai4'];


const firstulDOM = document.querySelectorAll('.list')[0];

const ulDom = document.querySelectorAll('.list');

console.log (ulDom[0])

// const HTML = '<li>Miltai</li><li>Druska</li><li>Vanduo</li><li>Kiaušiniai</li>;'

// let HTML = '';
// for (const item of data1){
    // if(item.trim().length===0){continue}
//     HTML += `<li>${item}</li>`;
// }
// ulDom[0].innerHTML = HTML;

// let HTML1 = '';
// for (const item of data2){
//     HTML1 += `<li>${item}</li>`;
// }

// ulDom[1].innerHTML = HTML1;

// listdom  - elementas kuriame generuojamas listas
// data - kas bus i list dedama 

function renderList (listDom,data){
    let HTML = '';
for (const item of data){
    if (item.trim().length === 0){continue}
    HTML += `<li>${item}</li>`;
}
listDom.innerHTML = HTML;

}

renderList(ulDom[0],data1)

renderList(ulDom[1],data2)