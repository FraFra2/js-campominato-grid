// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
const generateGridButton = document.getElementById("generateGrid");
const diffSel = document.getElementById("diff");

let diff;
let cell;
let container = document.getElementById("gridContainer");

generateGridButton.addEventListener("click",
    function(){
        generateGrid(diff);
        this.disabled = true;
    }
); 

function generateGrid(size){
    let selClass;
    selectedDiff = diffSel.value;
    switch (selectedDiff) {
        case "diff1":
            size = 100;
            selClass = "smallCell";
            break;
        case "diff2":
            size = 81;
            selClass = "mediumCell";
            break;
        case "diff3":
            size = 49;
            selClass = "largeCell";
            break;
    }
    for (let index = 1; index <= size; index++) {
        cell = document.createElement("div");
        cell.classList.add("cell", "d-flex", "justify-content-center", "align-items-center");
        cell.classList.add(selClass);
        cell.innerHTML = index;
        container.append(cell);
        cell.addEventListener("click", 
        function(){
            console.log(this.innerHTML);
            this.classList.toggle("activeCell");
        });
    }
}




