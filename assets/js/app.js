let righe = 10;
let colonne = 10;
let numeriEstratti = [];

function DisegnaTabella() {
    let div1 = document.getElementById('div1');
    while (div1.firstChild) {
        div1.removeChild(div1.firstChild);
    }
    let tabella = document.createElement("table");

    var i = 1;
    for (var r = 0; r < righe; r++) {
        let row = document.createElement("tr");
        for (var c = 0; c < colonne; c++, i++) {
            let cell = document.createElement("td");
            let cellText = document.createTextNode(i);
            cell.appendChild(cellText);
            row.appendChild(cell);
            if (numeriEstratti.includes(i)) cell.style.backgroundColor = 'red';
        }
        tabella.appendChild(row);
    }

    div1.appendChild(tabella);
}

function estraiNumero(){
    var num =  Math.floor(Math.random() * 100 + 1);
    numeriEstratti.push(num);
    DisegnaTabella();
}
