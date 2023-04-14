const distanceFormula = 1.2;

//to calculate TV size
function tvSizeCalculator(idealDistance) {
    return idealDistance / distanceFormula;
}

//to calculate distance
function distanceLengthCalculator(idealSize){
    return idealSize * distanceFormula;
}

function calculatedTv(){
    let sofaInputTextBox = document.getElementById("SofaInput");
    let sofaDistance = sofaInputTextBox.value;
    
    let tvSize = tvSizeCalculator(sofaDistance);
    
    console.log('tv size should be: ', tvSize);
    
    document.getElementById("tvSizeInput").value= tvSize;   
}

function calculatedDistance(){
    let tvInputTextBox= document.getElementById("tvSizeInput");
    let tvSizeInserted = tvInputTextBox.value;

    let distanceSofa = distanceLengthCalculator(tvSizeInserted);
    console.log('ideal distance should be:', distanceSofa);
    
    document.getElementById("SofaInput").value= distanceSofa;
}