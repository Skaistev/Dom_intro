const data = [
    {title: 'ingridientai',
    list: ['miltai',"druska","vanduo"],

},
{title: 'iranga',
    list: ['mikseris','  ', 'keptuve','lekste'],

},

]

const contentDom = document.getElementById('content')
console.log (contentDom)

let HTML = '';

for (const column of data){
    let listHTML = '';
    for (const item of column.list){
        if(item.trim().length === 0){
            continue
        }
        listHTML += `<li>${item}</li>`;
    }


for (const column of data){
    HTML += `<div class="column">
    <h2>${column.title}</h2>
    <ul class="list">
     ${listHTML}
   </ul>
 </div>`
}

contentDom .innerHTML = HTML;
}

