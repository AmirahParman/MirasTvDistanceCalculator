const distanceFormula = 1.2;


let idealDistance = 0;
let distanceCaculator = (idealDistance / distanceFormula); //to calculate distance 
console.log('distance: ', distanceCaculator);

// multiply the screen size by 1.2
function tvSizeCalculator(idealDistance) {
    return idealDistance / distanceFormula;
}

function calculate() {
    let sofaInputTextBox = document.getElementById("SofaInput");
    let sofaDistance = sofaInputTextBox.value;

    let tvSize = tvSizeCalculator(sofaDistance);

    console.log('tv size should be: ', tvSize);

    document.getElementById("tvSizeInput").value= tvSize;
}


