// '<i class="bi bi-heart"></i>',
// '<i class="bi bi-heart-fill"></i>',
// '<i class="bi bi-heart-half"></i>',





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
        generateGrid(diff);
        this.disabled = true;
    }
); 

function generateGrid(size){
    let selClass;
    let selIcon;
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
        //Aggiunta icon random
        cell.classList.add(selClass);
        //Piccka un' icona random dall'array di icone
        selIcon = pickRandomFromArray(itemTypesIcons);

        cell.innerHTML = selIcon;

        container.append(cell);

        //Onclick della cell
        cell.addEventListener("click",

        function(){
            console.log(this.innerHTML);
            this.classList.toggle("activeCell");
            iteration++;
            iterationLabel.innerHTML = `No. Iterazioni: ${iteration}`;
        });
    }
}

function pickRandomFromArray(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}



