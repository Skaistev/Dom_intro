const data = [ 
    // rows
    [
        // row 1
        {
            //column 1
            title: "kas?",
            list: ["a","b","c","d"]
        },
        {
            //column 2
            title: "kas?",
            list: ["a","b","c","d"]
        }
    ],
    [
        //row 2
        { // column 3
            title: "kodel?",
            list:["e","f","g","j"]
        },
        {
            //column 4
            title: "kas?",
            list: ["a","b","c","d"]
        }

    ]
]


const contentDom = document.getElementById('content')
console.log (contentDom)

const contentDom1 = document.getElementById('aha')
console.log (contentDom1)

let HTML = '';

for ( const row of data){

    let columnHTML = '';

    for (const column of row){

        let litext = '';

        for (const li of column.list){
            // if(li.trim().length === 0){
            //     continue}
            litext += `<li>${li}<li>`
        }
   
        columnHTML += `<div class="column">
       <h2>${column.title}</h2>
       <ul>${litext}</ul>
        </div>`

    }
    HTML += `<div class="row">
    ${columnHTML}
    </div>`

    contentDom. innerHTML = HTML;

    }