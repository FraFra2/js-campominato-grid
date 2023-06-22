// '<i class="bi bi-heart"></i>',
// '<i class="bi bi-heart-fill"></i>',
// '<i class="bi bi-heart-half"></i>',

//Aggiunta icon random
//Piccka un' icona random dall'array di icone
// selIcon = pickRandomFromArray(itemTypesIcons);

let itemsInv = ['<i class="px-2 bi bi-house-door-fill"></i>',
                '<i class="px-2 bi bi-bank2"></i>',
                '<i class="px-2 bi bi-bricks"></i>',
                '<i class="px-2 bi bi-currency-dollar"></i>']

const invButtons = document.querySelectorAll(".inventory .cell");

for (let index = 0; index < invButtons.length; index++) {
    const element = invButtons[index];
    element.innerHTML += itemsInv[index];

    element.addEventListener("click", function(){
        this.classList.toggle("activeCell");
    });
    

}

const generateGridButton = document.getElementById("generateGrid");
const diffSel = document.getElementById("diff");
const iterationLabel = document.querySelector(".iterationCount");
let diff;
let cell;
let iteration = 0;
let container = document.getElementById("gridContainer");

let itemTypesIcons = ['<i class="bi bi-circle-fill"></i>',
                      '<i class="bi bi-circle"></i>',
                      '<i class="bi bi-circle-half"></i>',
                      '<i class="bi bi-square"></i>',
                      '<i class="bi bi-square-half"></i>',
                      '<i class="bi bi-square-fill"></i>',
                    ];

generateGridButton.addEventListener("click",
    function(){
        container.innerHTML = "";
        iteration = 0;
        iterationLabel.innerHTML = `No. Iterazioni: ${iteration}`;
        generateGrid(diff);
    }
); 

function generateGrid(size){
    let selClass;
    selectedDiff = diffSel.value; //Seleziona valore della sel.
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
        container.append(cell);

        //Onclick della cell
        cell.addEventListener("click",

        function(){
            console.log(this.innerHTML);
            this.classList.add("activeCell");
            iteration++;
            iterationLabel.innerHTML = `No. Iterazioni: ${iteration}`;
        });
    }
}

function pickRandomFromArray(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}



