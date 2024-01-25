let righe = 10;
let colonne = 10;
let numeriEstratti = [];

function DisegnaTabella() {
    let div1 = document.getElementById('div1');
    while (div1.firstChild) { //ciclo che rimuove la tabella precedente e ne mette una nuova con la tabella cambiata
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
            if (numeriEstratti.includes(i)) cellText.remove();
        }
        tabella.appendChild(row);
    }

    div1.appendChild(tabella);
}

function estraiNumero(){
    var num =  0;
    do{
        num = Math.floor(Math.random() * 100 + 1);
    }while(numeriEstratti.includes(num));//estrae numeri fino a quando non ne esca uno non presente nell'array
    numeriEstratti.push(num); //dopo aver trovato il numero lo mette dentro l'array
    DisegnaTabella();//e ridisegna la tabella
}

DisegnaTabella();
