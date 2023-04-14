const distanceFormula = 1.2;

//to calculate TV size
function tvSizeCalculator(idealDistance) {
    return idealDistance / distanceFormula;
}

//to calculate distance
function distanceLengthCalculator(idealSize){
    return idealSize * distanceFormula;
}

function convertMetersToInches(tvSize) {
    return tvSize * 39.37;
  }

function calculatedTv(){
    let sofaInputTextBox = document.getElementById("SofaInput");
    let sofaDistance = sofaInputTextBox.value;
    
    let tvSize = tvSizeCalculator(sofaDistance);

    let convertedTvSize= convertMetersToInches(tvSize);
    
    document.getElementById("tvSizeInput").value= Math.round(convertedTvSize);   
}

function convertInchToMeter(distanceSofa){
    return distanceSofa * 0.0254;
}
  
function calculatedDistance(){
    let tvInputTextBox= document.getElementById("tvSizeInput");
    let tvSizeInserted = tvInputTextBox.value;

    let distanceSofa = distanceLengthCalculator(tvSizeInserted);
    console.log('ideal distance should be:', distanceSofa);
    
    let ConvertedSofaDistance = convertInchToMeter(distanceSofa);

    document.getElementById("SofaInput").value= ConvertedSofaDistance.toFixed(2);   
}

